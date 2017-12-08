import {InfoUnit} from './info-unit.model';
import {AbstractNode} from './abstract-node.model';

export class ChildNode extends AbstractNode {
  parentNode: number;

  constructor(id: number, order: number, title: string, children: ChildNode[],
              infoUnits: InfoUnit[], parentNode: number) {
    super(id, order, title, children, infoUnits);
    this.parentNode = parentNode;
  }
}
