import {InfoUnit} from '../model/info-unit.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {NodeService} from './node.service';
import {INFO_UNITS} from '../mock-data/mock-info-units';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {AbstractService} from './abstract.service';
import {AuthService} from '../auth/auth.service';
import {Node} from '../model/node.model';
import {InfoUnitSave} from '../model/info-unit-save.model';

@Injectable()
export class InfoUnitService extends AbstractService {
  FETCH_INFO_UNITS = '/infounit/all';
  FETCH_INFO_UNIT_BY_ID = '/infounit/';
  FETCH_INFO_UNITS_BY_NODE = '/infounit/bynode/'
  FETCH_INFO_UNITS_BY_NODE_TITLE = '/infounit/bynodetitle/'
  SAVE_INFO_UNIT = '/infounit/new';
  nodeInfoUnitsChanged = new Subject();
  infoUnitsChanged = new Subject();
  infoUnits: InfoUnit[];

  constructor(private nodeService: NodeService,
              private http: Http,
              protected authService: AuthService
  ) {
    super(authService);
  }

  getInfoUnits() {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(INFO_UNITS.slice());
      }, 1000);
    });
  }

  getObsInfoUnitById(id: number) {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.getInfoUnitById(id));
      }, 1000);
    });
  }

  getInfoUnitById(id: number) {
    let keepGoing = true;
    let selectedInfoUnit: InfoUnit = null;
    INFO_UNITS.slice().forEach(
      (infoUnit) => {
        if (keepGoing) {
          if (infoUnit.id === id) {
            keepGoing = false;
            selectedInfoUnit = infoUnit;
          }
        }
      }
    )
    return selectedInfoUnit;
  }

  // getInfoUnitsOfNode(nodeId: number) {
  //   const infoUnitsOfNode = [];
  //   return this.getInfoUnits().map(
  //     infoUnits => infoUnits.forEach((infoUnit) => {
  //       if (infoUnit.nodeId === nodeId) {
  //         infoUnitsOfNode.push(infoUnit);
  //       }
  //     })
  //   );
  // }

  addInfoUnitToNode(nodeId: number, infoUnit: InfoUnit) {
    this.nodeService.addInfoUnitToNode(nodeId, infoUnit);
    this.nodeInfoUnitsChanged.next(nodeId)
  }

  save(infoUnit: InfoUnit) {
    INFO_UNITS.push(infoUnit);
    this.infoUnitsChanged.next();
  }

  fetchInfoUnits() {
    return this.http
      .get(this.BASEURL + this.FETCH_INFO_UNITS, this.getOptions())
      .map(response => {
        const data = response.json() as InfoUnit[];
        return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  fetchInfoUnitsByNode(node: Node) {
    return this.http
      .get(this.BASEURL + this.FETCH_INFO_UNITS_BY_NODE + node.id, this.getOptions())
      .map(response => {
          const data = response.json() as InfoUnit[];
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  fetchInfoUnitsByNodeTitle(nodeTitle: string) {
    return this.http
      .post(this.BASEURL + this.FETCH_INFO_UNITS_BY_NODE_TITLE, nodeTitle, this.getOptions())
      .map(response => {
          const data = response.json() as InfoUnit[];
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  fetchInfoUnitById(id: number) {
    return this.http
      .get(this.BASEURL + this.FETCH_INFO_UNIT_BY_ID + id, this.getOptions())
      .map(response => {
        const data = response.json() as InfoUnit;
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  saveInfoUnit(infoUnit: InfoUnitSave) {
    return this.http
      .post(this.BASEURL + this.SAVE_INFO_UNIT, infoUnit, this.getOptions())
      // .map(response => {
      //   const data = response.json();
      //   return data || {};
      // })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  getEmptyInfoUnit() {
    return new InfoUnit(null, null, null, null, null);
  }

  onUpdate(infoUnit: InfoUnit) {
    return this.http.put('http://', infoUnit);
  }

  // fetchInfoUnits() {
  //   return this.http.get('http://swapi.co/api/people/')
  //     .map((response: Response) => {
  //       const data = response.json();
  //       const extractedChars = data.results;
  //       const chars = extractedChars.map((char) => {
  //         return {name: char.name, side: ''};
  //       });
  //       return chars;
  //     })
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //       }
  //     );
  // }
}

