import {Attribute} from './attribute.model';
import {Node} from './node.model';

export class InfoUnitSave {
  public id: number;
  public name: string;
  public description: string;
  public infoNode: Node;
  public attributes: Attribute[];

  constructor(id: number, name: string, description: string, infoNode: number, attributes: Attribute[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.infoNode = new Node(infoNode, null, null, null, null, null);
    this.attributes = attributes;
  }

}

