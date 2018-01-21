import {Node} from './node.model';

export class TreeNode {
  public node: Node;
  public isExpanded: boolean;

  constructor(node: Node) {
    this.node = node;
    this.isExpanded = false;
  }

}
