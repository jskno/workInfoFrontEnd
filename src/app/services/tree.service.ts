import {Tree} from '../model/tree.model';
import {Node} from '../model/node.model';
import {Subject} from 'rxjs/Subject';

export class TreeService {
  treeChanged = new Subject<Tree>();
  tree: Tree = new Tree(
        [
        new Node(
          1,
          1,
          'Environments',
          [
            new Node(
              4,
              1,
              'Altia Int Env',
              [
                new Node(
                  6,
                  1,
                  'Database connections Altia Int',
                  [],
                  [],
                  4
                )
              ],
              [],
              1
            ),
            new Node(
              5,
              2,
              'Euipo Int Env',
              [
                new Node(
                  7,
                  1,
                  'Database connections Euipo Int',
                  [],
                  [],
                  5
                )
              ],
              [],
              1
            )
          ],
          [],
          null
        ),
        new Node(
          2,
          2,
          'ShareDox',
          [],
          [],
          null
        ),
        new Node(
          3,
          3,
          'Stash',
          [],
          [],
          null
        )
        ]
      );

  getTree() {
    return this.tree;
  }
}
