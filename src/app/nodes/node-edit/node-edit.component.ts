import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NodeService} from '../../services/node.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Node} from '../../model/node.model';
import {NodeSave} from 'app/model/node-save.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-node-edit',
  templateUrl: './node-edit.component.html',
  styleUrls: ['./node-edit.component.css']
})
export class NodeEditComponent implements OnInit {
  id: number;
  editMode = false;
  nodeForm: FormGroup;
  nodes: Node[];

  constructor(private nodeSevice: NodeService,
              private route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    this.initEmptyForm();
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log(this.editMode);
          this.fetchNodes();
        }
      );
  }

  private initEmptyForm() {
    const id = null;
    const title = '';
    const nodeOrder = null;
    const parent = null;

    this.nodeForm = new FormGroup({
      'id' : new FormControl(id),
      'title' : new FormControl(title),
      'nodeOrder' : new FormControl(nodeOrder),
      'parent' : new FormControl(parent)
    });
  }

  private setValues() {
    let id = null;
    let title = '';
    let nodeOrder = null;
    let parent = null;

    if (this.editMode) {
      this.nodeSevice.fetchNodeById(this.id)
        .subscribe(
          (node: Node) => {
            id = node.id;
            title = node.title;
            nodeOrder = node.nodeOrder;
            parent = node.parentNode;
            this.nodeForm = new FormGroup({
              'id' : new FormControl(id),
              'title' : new FormControl(title),
              'nodeOrder' : new FormControl(nodeOrder),
              'parent' : new FormControl(parent)
            });
          }
        );
    }
  }

  private fetchNodes(): void {
    this.nodeSevice.fetchNodes()
      .subscribe(
        (nodes: Node[]) => {
          this.nodes = nodes;
          this.setValues();
        }
      );
  }

  onSubmit() {
    console.log(this.nodeForm);
    let parentId: number = null;
    if (this.nodeForm.value.parent) {
      parentId = this.nodeForm.value.parent.id;
    }
    const node = new NodeSave(
      this.nodeForm.value.id,
      this.nodeForm.value.title,
      this.nodeForm.value.nodeOrder,
      parentId,
      null,
      null
    );
    this.nodeSevice.saveNode(node)
      .subscribe(
        (transformedData: any) => {
          console.log(transformedData);
          this.nodeSevice.nodesChanged.next();
        }
      );
    this.nodeForm.reset();
  }

  onCancel() {
    this._location.back();
  }

}
