import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataViewComponent } from '../app/data-view/data-view.component';
import { ProductEditComponent } from './data-edit/product-edit.component'
import { AppComponent } from '../app/app.component'
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', component: DataViewComponent 
},
  {
    path: 'edit',
    component: ProductEditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
