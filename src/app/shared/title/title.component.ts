import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: '<h1 class="text-3xl mb5">{{ title }}</h1>'
})
export class TitleComponent {
  @Input() title!: string;
}