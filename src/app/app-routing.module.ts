import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from '../app/components/task-add/task-add.component';
import { TaskEditComponent } from '../app/components/task-edit/task-edit.component';
import { HomeComponent } from './components/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserListComponent } from './components/user/user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-add', component: TaskAddComponent },
  { path: 'task-edit/:id', component: TaskEditComponent },



  {path: 'user-add' ,component:UserAddComponent},
  {path: 'user-edit/:id' ,component:UserEditComponent},
  {path: 'user-list' ,component:UserListComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }