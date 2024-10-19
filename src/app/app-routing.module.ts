import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from '../app/components/task-add/task-add.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  {path :'list',component:TaskListComponent},
  {path:'add',component:TaskAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
