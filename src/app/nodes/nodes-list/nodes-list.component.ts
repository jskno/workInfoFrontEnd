import {Component, OnDestroy, OnInit} from '@angular/core';
import {NodeService} from '../../services/node.service';
import {Node} from '../../model/node.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-nodes-list',
  templateUrl: './nodes-list.component.html',
  styleUrls: ['./nodes-list.component.css']
})
export class NodesListComponent implements OnInit, OnDestroy {
  nodesChangeSubscription = new Subscription();
  nodes: Node[];

  constructor(private nodeService: NodeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.nodes = this.nodeService.getNodes();
    this.fetchNodes();
    this.nodesChangeSubscription = this.nodeService.nodesChanged
      .subscribe(
        () => this.fetchNodes()
      );
  }

  private fetchNodes(): void {
    this.nodeService.fetchNodes()
      .subscribe(
        (nodes: Node[]) => this.nodes = nodes
      );
  }

  onNewNode() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.nodesChangeSubscription.unsubscribe();
  }

}
