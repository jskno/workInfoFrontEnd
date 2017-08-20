import {ChildNode} from './child-node.model';
import {InfoUnit} from './info-unit.model';

export abstract class AbstractNode {
  public id: number;
  public order: number;
  public title: string;
  public children: ChildNode[];
  public infoUnits: InfoUnit[];

  constructor(id: number, order: number, title: string,
              children: ChildNode[], infoUnits: InfoUnit[]) {
    this.id =  id;
    this.order = order;
    this.title = title;
    this.children = children;
    this.infoUnits = infoUnits;
  }
}
