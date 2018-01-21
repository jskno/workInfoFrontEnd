import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../../model/node.model';
import {NodeService} from "../../../services/node.service";

@Component({
  selector: 'app-node-item',
  templateUrl: './node-item.component.html',
  styleUrls: ['./node-item.component.css']
})
export class NodeItemComponent implements OnInit {
  @Input() node: Node;

  constructor() { }

  ngOnInit() {
  }

}
