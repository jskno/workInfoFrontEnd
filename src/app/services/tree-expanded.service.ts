import {Tree} from '../model/tree.model';
import {Node} from '../model/node.model';
import {Subject} from 'rxjs/Subject';
import {NodeService} from './node.service';
import {Injectable} from '@angular/core';
import {ParentNode} from "../model/parent-node.model";
import {TreeNode} from "../model/tree-node.model";

@Injectable()
export class TreeService {
  treeChanged = new Subject<Tree>();

  constructor(private nodeService: NodeService) {}

  fetchTree() {
    return this.nodeService.fetchTree();
  }

  getEmptyTree() {
    const treeNodes = [];
    treeNodes.push(new TreeNode(null));
    return new Tree(treeNodes);
  }
}
