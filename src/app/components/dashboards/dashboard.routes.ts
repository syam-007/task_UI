import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboard',children:[ 

{
  path: 'admin',
  loadComponent: () =>
    import('./admin/admin.component').then((m) => m.AdminComponent),
},
{
  path: 'start-job',
  loadComponent: () =>
    import('./start-job/start-job.component').then((m) => m.StartJobComponent),
},
{
  path: 'job-reports',
  loadComponent: () =>
    import('./job-reports/job-reports.component').then((m) => m.JobReportsComponent),
},
{
  path: 'interpolation',
  loadComponent: () =>
    import('./interploation/interploation.component').then((m) => m.InterploationComponent),
},
{
  path: 'quality-analysis',
  loadComponent: () =>
    import('./qualityanalysis/qualityanalysis.component').then((m) => m.QualityanalysisComponent),
},


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}