import {Tree} from '../model/tree.model';
import {Node} from '../model/node.model';
import {Subject} from 'rxjs/Subject';
import {NodeService} from './node.service';
import {Injectable} from '@angular/core';

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
              1,
              [
                new Node(
                  6,
                  'Database connections Altia Int',
                  1,
                  4,
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
              1,
              [
                new Node(
                  7,
                  'Database connections Euipo Int',
                  1,
                  5,
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
