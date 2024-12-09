import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { admin, dashboardRoutingModule } from '../../components/dashboards/dashboard.routes';
import { pagesRoutingModule } from '../../components/pages/pages.routes';
import { filemanagerRoutingModule } from '../../components/pages/file-manager/filemanager.routes';


export const content: Routes = [

  { path: '', children: [
   ...dashboardRoutingModule.routes,
      ...pagesRoutingModule.routes,
      ...filemanagerRoutingModule.routes
   
  ]}

  
];
@NgModule({
    imports: [RouterModule.forRoot(admin)],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
