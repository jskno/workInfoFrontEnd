import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {NodeService} from '../../../services/node.service';
import {InfoUnitService} from '../../../services/info-unit.service';
import {Attribute} from '../../../model/attribute.model';
import {InfoUnit} from '../../../model/info-unit.model';
import {Node} from '../../../model/node.model';
import {InfoUnitSave} from '../../../model/info-unit-save.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-code-snippet-edit',
  templateUrl: './code-snippet-edit.component.html',
  styleUrls: ['./code-snippet-edit.component.css']
})
export class CodeSnippetEditComponent implements OnInit {
  id: number;
  editMode = true;
  infoUnitForm: FormGroup;
  nodes: Node[];
  CODE_SNIPPETS = 'Code Snippets';

  constructor(private route: ActivatedRoute,
              private nodeService: NodeService,
              private infoUnitService: InfoUnitService,
              private _location: Location) { }

  ngOnInit() {
    this.initEmptyForm();
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // this.editMode = params['edit'];
          console.log(this.editMode);
          this.fetchNodes();
        }
      );
  }

  private initEmptyForm() {
    const id = null;
    const name = '';
    const description = '';
    const node = null;
    const attributes: Attribute[] = null;

    this.infoUnitForm = new FormGroup({
      'id': new FormControl(id),
      'name': new FormControl(name, [Validators.required]),
      'description': new FormControl(description, [Validators.required]),
      'node': new FormControl(node),
      'attributes': new FormArray([
        new FormGroup({
          'key': new FormControl('Code'),
          'value': new FormControl('')
        })
      ])
    });
  }

  private setValues() {
    let id = null;
    let name = '';
    let description = '';
    let node = null;
    let attributes: Attribute[] = null;

    if (this.id) {
      this.infoUnitService.fetchInfoUnitById(this.id)
        .subscribe(
          (infoUnit: InfoUnit) => {
            id = infoUnit.id;
            name = infoUnit.name;
            description = infoUnit.description;
            node = this.nodeService.getNodeFromNodes(this.nodes, infoUnit.infoNode);
            attributes = infoUnit.attributes;
            this.infoUnitForm = new FormGroup({
              'id': new FormControl(id),
              'name': new FormControl(name, [Validators.required]),
              'description': new FormControl(description, [Validators.required]),
              'node': new FormControl(node),
              'attributes': new FormArray(attributes.map(attribute => new FormGroup({
                'key': new FormControl(attribute.key),
                'value': new FormControl(attribute.value)
              })))
            });
            // // if (this.editMode) {
            //   this.infoUnitForm.controls['id'].disable();
            //   this.infoUnitForm.get('name').disable();
            //   this.infoUnitForm.controls['description'].disable();
            //   this.infoUnitForm.controls['node'].disable();
            //   this.infoUnitForm.disable();
            // // }
          }
        )
    }
  }

  private fetchNodes(): void {
    this.nodeService.fetchNodes()
      .subscribe(
        (nodes: Node[]) => {
          this.nodes = nodes;
          this.setValues();
        }
      );
  }

  onSubmit() {
    console.log(this.infoUnitForm);
    const infoUnit = new InfoUnitSave(
      this.infoUnitForm.value.id,
      this.infoUnitForm.value.name,
      this.infoUnitForm.value.description,
      this.infoUnitForm.value.node.id,
      this.infoUnitForm.value.attributes
    );
    // this.infoUnitService.save(infoUnit);
    this.infoUnitService.saveInfoUnit(infoUnit)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.infoUnitService.infoUnitsChanged.next();
        }
      );
    this.infoUnitForm.reset();
  }

  onAddAttribute() {
    const group = new FormGroup({
      'key': new FormControl(null, Validators.required),
      'value': new FormControl(null, Validators.required)
    });
    (<FormArray>this.infoUnitForm.get('attributes')).push(group);
  }

  onCancel() {
    this._location.back();
  }

}
