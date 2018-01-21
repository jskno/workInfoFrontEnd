import {Component, OnInit} from '@angular/core';
import {Node} from '../../model/node.model';
import {NodeService} from '../../services/node.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.css']
})
export class NodeDetailComponent implements OnInit {
  node: Node = this.nodeService.getEmptyInfoNode();
  id: number;

  constructor(private nodeService: NodeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.fetchNodeById(this.id);
          // this.getNodeById(this.id);
        }
      )
  }

  private getNodeById(id: number) {
    this.node = this.nodeService.getNodeById(id);
  }

  private fetchNodeById(id: number) {
    this.nodeService.fetchNodeById(id)
      .subscribe(
        (node: Node) => this.node = node
      );
  }

  addInfoUnitToNode(nodeId: number) {
  }

  onEditNode() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
