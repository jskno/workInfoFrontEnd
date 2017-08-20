import {InfoUnit} from './info-unit.model';
import {ChildNode} from './child-node.model';
import {AbstractNode} from './abstract-node.model';

export class ParentNode extends AbstractNode {

  constructor(id: number, order: number, title: string, children: ChildNode[], infoUnits: InfoUnit[]) {
    super(id, order, title, children, infoUnits);
  }
}
