import {Pipe, PipeTransform} from '@angular/core';
import {InfoUnit} from '../model/info-unit.model';
import {isUndefined} from 'util';

@Pipe({
  name: 'snippetFilter'
})
export class SnippetFilterPipe implements PipeTransform {

  transform(codeSnippets: InfoUnit[], searchingText: string): any {
    if (isUndefined(searchingText)) {
      return codeSnippets;
    }
    return codeSnippets.filter(
      (codeSnippet: InfoUnit) => {
        return this.searchAlgorith(codeSnippet, searchingText)
      }
    );
  }

  private searchAlgorith(codeSnippet: InfoUnit, searchingText: string) {
    return codeSnippet.name.toLocaleLowerCase().includes(searchingText.toLocaleLowerCase()) ||
      codeSnippet.description.toLocaleLowerCase().includes(searchingText.toLocaleLowerCase()) ||
      codeSnippet.attributes[0].value.toLocaleLowerCase().includes(searchingText.toLocaleLowerCase());

  }

}
