import {InfoUnit} from './info-unit.model';
import {Node} from './node.model';

export class NodeSave {
  public id: number;
  public title: string;
  public nodeOrder: number;
  public parentNode: Node;
  public childrenNodes: Node[];
  public infoUnits: InfoUnit[];

  constructor(id: number, title: string, nodeOrder: number, parentNode: number,
              childrenNodes: Node[], infoUnits: InfoUnit[]) {
    this.id =  id;
    this.title = title;
    this.nodeOrder = nodeOrder;
    if (parentNode) {
      this.parentNode = new Node(parentNode, null, null, null, null, null);
    } else {
      this.parentNode = null;
    }
    this.childrenNodes = childrenNodes;
    this.infoUnits = infoUnits;
  }
}
