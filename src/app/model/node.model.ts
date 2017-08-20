import {InfoUnit} from './info-unit.model';

export class Node {
  public id: number;
  public order: number;
  public title: string;
  public children: Node[];
  public infoUnits: InfoUnit[];
  public parentId: number;

  constructor(id: number, order: number, title: string, children: Node[],
              infoUnits: InfoUnit[], parentId: number) {
    this.id =  id;
    this.order = order;
    this.title = title;
    this.children = children;
    this.infoUnits = infoUnits;
    this.parentId = parentId;
  }
}
