import {Component, Input} from '@angular/core';
import {InfoUnit} from '../../../../model/info-unit.model';

@Component({
  selector: 'app-code-snippet-item',
  templateUrl: './code-snippet-item.component.html',
  styleUrls: ['./code-snippet-item.component.css']
})
export class CodeSnippetItemComponent {
  @Input() infoUnit: InfoUnit;
}
