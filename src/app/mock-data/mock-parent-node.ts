import {Node} from '../model/node.model';
import {ParentNode} from '../model/parent-node.model';

export const PARENT_NODE: Node =
  new Node(
    0,
    'Information',
    1,
    null,
    [
      new Node(
        1,
        'Environments',
        1,
        new ParentNode(0, 'Information'),
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
        new ParentNode(0, 'Information'),
        [],
        []
      ),
      new Node(
        3,
        'Stash',
        3,
        new ParentNode(0, 'Information'),
        [],
        []
      )
    ],
    [],
  );
