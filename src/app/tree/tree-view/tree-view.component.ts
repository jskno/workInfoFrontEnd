import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../model/node.model';
import {TreeService} from '../../services/tree.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  @Input() nodes: Node[];
  isExpanded = false;

  constructor(private treeService: TreeService) {}

  ngOnInit() {
    this.treeService.treeExpanded.subscribe(
      () => {
        this.isExpanded = !this.isExpanded;
      }
    )
  }

  toggle() {
  }

}
