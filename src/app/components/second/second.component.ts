import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <div class="alert alert-dark">
      second Component
    </div>
  `,
  styles: [``]
})
export class SecondComponent {
  acr = inject(ActivatedRoute);
  constructor() {
    this.acr.snapshot.params['quelqueChose'];
    this.acr.snapshot.paramMap.get('quelqueChose');

    this.acr.snapshot.queryParams['page'];

  }
}
