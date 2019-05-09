import { NgModule } from '@angular/core';
import { AngularLibComponent } from './angular-lib.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [AngularLibComponent, FooComponent],
  imports: [
  ],
  exports: [AngularLibComponent, AngularLibComponent, FooComponent]
})
export class AngularLibModule { }
