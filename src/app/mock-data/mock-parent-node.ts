import {Node} from '../model/node.model';

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
        0,
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
        0,
        [],
        []
      ),
      new Node(
        3,
        'Stash',
        3,
        0,
        [],
        []
      )
    ],
    [],
  );
