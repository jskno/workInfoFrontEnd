import {InfoUnit} from './info-unit.model';

export class Node {
  public id: number;
  public title: string;
  public nodeOrder: number;
  public parentNode: number;
  public childrenNodes: Node[];
  public infoUnits: InfoUnit[];

  constructor(id: number, title: string, nodeOrder: number, parentNode: number,
              childrenNodes: Node[], infoUnits: InfoUnit[]) {
    this.id =  id;
    this.title = title;
    this.nodeOrder = nodeOrder;
    this.parentNode = parentNode;
    this.childrenNodes = childrenNodes;
    this.infoUnits = infoUnits;
  }
}
