import {Component, OnDestroy, OnInit} from '@angular/core';
import {TreeService} from '../services/tree.service';
import {Tree} from '../model/tree.model';
import {Subscription} from 'rxjs/Subscription';
import {NodeService} from '../services/node.service';
import {Node} from '../model/node.model';
import {TreeNode} from '../model/tree-node.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, OnDestroy {
  treeChangedSubscrition: Subscription;
  tree: Tree = this.treeService.getEmptyTree();
  isExpanded = false;

  constructor(private treeService: TreeService,
              private nodeService: NodeService) { }

  ngOnInit() {
    // this.tree = this.treeService.getTree();
    this.fetchTree();
    this.treeChangedSubscrition = this.nodeService.nodesChanged
      .subscribe(
        () => {
          // this.tree = this.treeService.getTree();
          this.fetchTree();
        }
      )
  }

  private fetchTree() {
    this.nodeService.fetchTree()
      .subscribe(
        (nodes: Node[]) => {
          this.tree = new Tree(nodes);
        }
      )
  }

  // private fetchTree2() {
  //   this.nodeService.fetchTree()
  //     .subscribe(
  //       (nodes: Node[]) => {
  //         this.tree = this.getCompleteTree(nodes);
  //       }
  //     )
  // }

  // private getCompleteTree(nodes: Node[]) {
  //   const treeNodes: TreeNode[] = [];
  //   nodes.forEach((node) => treeNodes.push(this.creatingTreeNode(node)))
  //   return new Tree(treeNodes);
  // }

  private creatingTreeNode(node: Node) {
    if (node.childrenNodes.length > 0) {
      node.childrenNodes.forEach((childNode) => this.creatingTreeNode(childNode))
    } else {
      return new TreeNode(node);
    }
  }

  ngOnDestroy() {
    this.treeChangedSubscrition.unsubscribe();
  }

  toggle() {
    this.treeService.treeExpanded.next();
  }

}
