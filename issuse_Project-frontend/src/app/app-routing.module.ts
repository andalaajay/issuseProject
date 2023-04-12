import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIssueComponent } from './add-issue/add-issue.component';

const routes: Routes = [

  {path:'',redirectTo:'add-issue1',pathMatch:'full'},
  {
    path:'add-issue1',
    component:AddIssueComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
