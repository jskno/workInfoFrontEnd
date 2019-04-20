import {InfoUnit} from '../model/info-unit.model';
import {Attribute} from '../model/attribute.model';

export const INFO_UNITS: InfoUnit[] = [
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
