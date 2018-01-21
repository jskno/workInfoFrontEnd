import {Tree} from '../model/tree.model';
import {Node} from '../model/node.model';
import {Subject} from 'rxjs/Subject';
import {NodeService} from './node.service';
import {Injectable} from '@angular/core';
import {ParentNode} from '../model/parent-node.model';

@Injectable()
export class TreeService {
  treeChanged = new Subject<Tree>();
  tree: Tree = new Tree(
        [
        new Node(
          1,
          'Environments',
          1,
          null,
          [
            new Node(
              4,
              'Altia Int Env',
              1,
              new ParentNode(1, 'Environments'),
              [
                new Node(
                  6,
                  'Database connections Altia Int',
                  1,
                  new ParentNode(4, 'Altia Int Env'),
                  [],
                  []
                )
              ],
              []
            ),
            new Node(
              5,
              'Euipo Int Env',
              2,
              new ParentNode(1, 'Environments'),
              [
                new Node(
                  7,
                  'Database connections Euipo Int',
                  1,
                  new ParentNode(5, 'Euipo Int Env'),
                  [],
                  []
                )
              ],
              []
            )
          ],
          []
        ),
        new Node(
          2,
          'ShareDox',
          2,
          null,
          [],
          []
        ),
        new Node(
          3,
          'Stash',
          3,
          null,
          [],
          []
        )
        ]
      );

  constructor(private nodeService: NodeService) {}

  getTree() {
    return this.tree;
  }

  fetchTree() {
    return this.nodeService.fetchTree();
  }

  getEmptyTree() {
    return new Tree(null);
  }
}
