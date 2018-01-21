import {Component, Input} from '@angular/core';
import {Node} from '../../model/node.model';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  @Input() nodes: Node[];
  isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  // check() {
  //   const newState = !this.checked;
  //   this.checked = newState;
  //   this.checkRecursive(newState);
  // }

  // checkRecursive(state) {
  //   this.node.childrenNodes.forEach(child => {
  //     child.checked = state;
  //     child.checkRecusive(state);
  //   })
  // }
}
