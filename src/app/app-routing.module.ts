import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { MembersComponent } from './members/members.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
 { path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'project', pathMatch: 'full' },
      { path: 'project', component: ProjectComponent },
      { path: 'view-project', component: ViewProjectComponent },
      { path: 'tasks', component: TaskComponent },
      { path: 'members', component: MembersComponent }


    ]

  },

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
