import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import  ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-start-job',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule],
  templateUrl: './start-job.component.html',
  styleUrl: './start-job.component.scss'
})
export class StartJobComponent {
  selectedLanguages=['English'];
  languages=[
    {id:1,name:'French'},
    {id:2,name:'Arabic'},
    {id:3,name:'Hindi'},
    
  ]
  selectedQualifications=['Graduate'];
  Qualifications=[
    {id:1,name:'Diploma'},
    {id:2,name:'MBA'},
    {id:3,name:'MCA'},
    
  ]
  selectedSkills=['HTML'];
  Skills=[
    {id:1,name:'CSS'},
    {id:2,name:'JavaScript'},
    {id:3,name:'React'},
    
  ]
}
