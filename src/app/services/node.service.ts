import {Injectable} from '@angular/core';
import {InfoUnitService} from './info-unit.service';
import {Node} from '../model/node.model';
import {TreeService} from './tree.service';
import {Subject} from 'rxjs/Subject';
import {InfoUnit} from '../model/info-unit.model';
import {PARENT_NODE} from '../mock-data/mock-parent-node';
import {AbstractService} from './abstract.service';
import {Http} from '@angular/http';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs/Observable';
import {ObjectUnsubscribedError} from 'rxjs/Rx';

@Injectable()
export class NodeService extends AbstractService {
  FETCH_NODES = '/infonode/all';
  FETCH_NODE_BY_ID = '/infonode/';
  FETCH_TREE = '/infonode/tree';
  SAVE_NODE = '/infonode/new';
  node: Node;
  nodesChanged = new Subject();
  selectedNode = new Subject<Node>();

  constructor(private http: Http,
              // protected authService: AuthService
  ) {
    // super(authService);
    super();
  }

  getParentNode() {
    return Promise.resolve(PARENT_NODE);
  }

  getNodes() {
    let nodes: Node[];
    this.getParentNode().then(
      (node) => {nodes = node.childrenNodes; }
    );
    return nodes;
  }

  getNodeById(id: number) {
    let node = null;
    this.getParentNode().then(
      (parentNode) => {
        node = parentNode;
      }
    )
    return this.getNodeByIdAndNode(node, id);
  }

  getNodeFromNodesById(id: number) {
    this.fetchNodes().subscribe(
      (nodes: Node[]) => {
        return this.getNodeFromNodes(nodes, id);
      }
    );
  }

  getNodeFromNodes(nodes: Node[], id: number) {
    for (const node of nodes) {
      if (node.id === id) {
        return node;
      }
    }
  }

  getNodeFromNodesByTitle(nodes: Node[], title: string) {
    for (const node of nodes) {
      if (node.title === title) {
        return node;
      }
    }
  }

  getNodeByIdAndNode(node: Node, id: number) {
    if (node.id === id) {
      return node;
    } else {
      node.childrenNodes.forEach(
        (childNode) => this.getNodeByIdAndNode(childNode, id)
      )
    }
  }

  nodeChanged(changedNode: Node) {
    let node: Node;
    node = this.getNodeById(changedNode.id);
    this.mapNode(node, changedNode);
    this.nodesChanged.next();
  }

  mapNode(node: Node, changedNode: Node) {
    node.parentNode = changedNode.parentNode;
    node.nodeOrder = changedNode.nodeOrder;
    node.title = changedNode.title;
    node.childrenNodes = changedNode.childrenNodes;
    node.infoUnits = changedNode.infoUnits;
  }

  addInfoUnitToNode(nodeId: number, infoUnit: InfoUnit) {
    const node = this.getNodeById(nodeId);
    node.infoUnits.push(infoUnit);
    this.nodesChanged.next();
  }

  onSelectNode(node: Node) {
    this.selectedNode.next(node);
  }

  fetchNodes() {
    return this.http
      .get(this.BASEURL + this.FETCH_NODES, this.getOptions())
      .map(response => {
        const data = response.json() as Node[];
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  fetchNodeById(id: number) {
    return this.http
      .get(this.BASEURL + this.FETCH_NODE_BY_ID + id, this.getOptions())
      .map(response => {
        const data = response.json() as Node;
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  saveNode(node: Node) {
    return this.http
      .post(this.BASEURL + this.SAVE_NODE, node, this.getOptions())
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

  fetchTree() {
    return this.http
      .get(this.BASEURL + this.FETCH_TREE, this.getOptions())
      .map(response => {
        const data = response.json() as Node[];
        return data;
      })
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong!');
        }
      );
  }

  getEmptyInfoNode() {
    return new Node(null, null, null, null, null, null);
  }



}
