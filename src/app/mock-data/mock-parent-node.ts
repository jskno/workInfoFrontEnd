import {Node} from '../model/node.model';

export const PARENT_NODE: Node =
  new Node(
    0,
    1,
    'Information',
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
        0
      ),
      new Node(
        2,
        2,
        'ShareDox',
        [],
        [],
        0
      ),
      new Node(
        3,
        3,
        'Stash',
        [],
        [],
        0
      )
    ],
    [],
    null
  );
