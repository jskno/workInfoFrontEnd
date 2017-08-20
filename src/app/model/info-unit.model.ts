import {Attribute} from './attribute.model';

export class InfoUnit {
  public id: number;
  public nodeId: number;
  public name: string;
  public description: string;
  public attributes: Attribute[];

  constructor(id: number, name: string, description: string, nodeId: number, attributes: Attribute[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.nodeId = nodeId;
    this.attributes = attributes;
  }

}

