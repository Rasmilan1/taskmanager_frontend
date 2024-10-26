import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TaskfilterPipe } from './taskfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { HomeComponent } from './components/home/home.component';
import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserFilterPipe } from './pipes/user-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,

    TaskEditComponent,
    TaskfilterPipe,
    HomeComponent,
    TaskAddComponent,
    UserAddComponent,
    UserEditComponent,
    UserListComponent,
    UserFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
