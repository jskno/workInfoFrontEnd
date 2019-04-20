import {Attribute} from './attribute.model';

export class InfoUnit {
  public id: number;
  public name: string;
  public description: string;
  public infoNode: number;
  public attributes: Attribute[];

  constructor(id: number, name: string, description: string, infoNode: number, attributes: Attribute[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.infoNode = infoNode;
    this.attributes = attributes;
  }

}

