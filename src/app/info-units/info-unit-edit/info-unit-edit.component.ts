import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {NodeService} from '../../services/node.service';
import {Node} from '../../model/node.model';
import {InfoUnit} from '../../model/info-unit.model';
import {InfoUnitService} from '../../services/info-unit.service';
import {Attribute} from '../../model/attribute.model';
import {InfoUnitSave} from '../../model/info-unit-save.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-info-unit-edit',
  templateUrl: './info-unit-edit.component.html',
  styleUrls: ['./info-unit-edit.component.css']
})
export class InfoUnitEditComponent implements OnInit {
  id: number;
  editMode = false;
  infoUnitForm: FormGroup;
  nodes: Node[];

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
          this.editMode = params['id'] != null;
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
      'attributes': new FormArray([])
    });

  }

  private setValues() {
    let id = null;
    let name = '';
    let description = '';
    let node = null;
    let attributes: Attribute[] = null;

    if (this.editMode) {
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
