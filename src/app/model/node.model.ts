import {InfoUnit} from './info-unit.model';

export class Node {
  public id: number;
  public nodeOrder: number;
  public title: string;
  public childrenNodes: Node[];
  public infoUnits: InfoUnit[];
  public parentId: number;

  constructor(id: number, nodeOrder: number, title: string, childrenNodes: Node[],
              infoUnits: InfoUnit[], parentId: number) {
    this.id =  id;
    this.nodeOrder = nodeOrder;
    this.title = title;
    this.childrenNodes = childrenNodes;
    this.infoUnits = infoUnits;
    this.parentId = parentId;
  }
}
