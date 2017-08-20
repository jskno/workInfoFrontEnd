import {InfoUnit} from '../model/info-unit.model';
import {Attribute} from '../model/attribute.model';
import {forEach} from '@angular/router/src/utils/collection';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {NodeService} from './node.service';

@Injectable()
export class InfoUnitService {
  nodeInfoUnitsChanged = new Subject();
  infoUnitsChanged = new Subject();

  private infoUnits: InfoUnit[] = [
    new InfoUnit(
      1,
      'micro1',
      'A virtual machine in altia int env',
      1,
      [
        new Attribute('name', 'vkvld001'),
        new Attribute('applications', 'ms-task, ms-international'),
      ]
    ),
    new InfoUnit(
      2,
      'micro2',
      'A virtual machine in altia int env',
      1,
      [
        new Attribute('name', 'vkvld002'),
        new Attribute('applications', 'ms-trademark, ms-proceeding')
      ]
    ),
    new InfoUnit(
      3,
      'serverAccess',
      'Loging to virtual servers in altia int',
      1,
      [
        new Attribute('user', 'devops'),
        new Attribute('password', 'd3v0ps'),
        new Attribute('commnad', 'ssh devops@vkvld001'),
        new Attribute('logsPath', '/opt/...'),
        new Attribute('jarsPath', '/opt/...'),
        new Attribute('deployment Command', './puppet.sh')
      ]
    ),
  ];

  constructor(private nodeService: NodeService) {}

  getInfoUnits() {
    return this.infoUnits.slice();
  }

  getInfoUnit(index: number) {
    return this.infoUnits[index];
  }

  getInfoUnitsOfNode(nodeId: number) {
    const infoUnitsOfNode = [];
    this.getInfoUnits().forEach((infoUnit) => {
      if (infoUnit.nodeId === nodeId) {
        infoUnitsOfNode.push(infoUnit);
      }
    });
    return infoUnitsOfNode;
  }

  addInfoUnitToNode(nodeId: number, infoUnit: InfoUnit) {
    this.nodeService.addInfoUnitToNode(nodeId, infoUnit);
    this.nodeInfoUnitsChanged.next(nodeId)
  }

  save(infoUnit: InfoUnit) {
    this.infoUnits.push(infoUnit);
    this.infoUnitsChanged.next();
  }
}

