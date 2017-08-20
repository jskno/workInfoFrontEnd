import {InfoUnit} from './info-unit.model';
import {AbstractNode} from './abstract-node.model';

export class ChildNode extends AbstractNode {
  parentId: number;

  constructor(id: number, order: number, title: string, children: ChildNode[],
              infoUnits: InfoUnit[], parentId: number) {
    super(id, order, title, children, infoUnits);
    this.parentId = parentId;
  }
}
