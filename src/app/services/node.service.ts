import {Injectable} from '@angular/core';
import {InfoUnitService} from './info-unit.service';
import {Node} from '../model/node.model';
import {TreeService} from './tree.service';
import {Subject} from 'rxjs/Subject';
import {InfoUnit} from '../model/info-unit.model';

@Injectable()
export class NodeService {
  nodes: Node[];
  nodesChanged = new Subject();
  selectedNode = new Subject<Node>();

  constructor(private treeService: TreeService) {
    this.nodes = this.treeService.getTree().nodes;
  }

  getNodes() {
    return this.nodes.slice();
  }

  getNode(id: number) {
    let theNode = null;
    this.nodes.forEach((node) => {
      if (node.id === id) {
        theNode = node;
      }});
    return theNode;
  }

  loadNodes() {
    this.nodes = this.treeService.getTree().nodes;
  }

  nodeChanged(changedNode: Node) {
    let node: Node;
    node = this.getNode(changedNode.id);
    this.mapNode(node, changedNode);
    this.nodesChanged.next();
  }

  mapNode(node: Node, changedNode: Node) {
    node.parentId = changedNode.parentId;
    node.order = changedNode.order;
    node.title = changedNode.title;
    node.children = changedNode.children;
    node.infoUnits = changedNode.infoUnits;
  }

  addInfoUnitToNode(nodeId: number, infoUnit: InfoUnit) {
    const node = this.getNode(nodeId);
    node.infoUnits.push(infoUnit);
    this.nodesChanged.next();
  }

  onSelectNode(node: Node) {
    this.selectedNode.next(node);
  }}
