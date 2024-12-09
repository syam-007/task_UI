import { Component } from '@angular/core';
import flatpickr from 'flatpickr';
import { SharedModule } from '../../../shared/shared.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
interface SurveyData {
  station: number;
  depth: number;
  inc: number;
  azimuth: number;
  tvd: number;
  verticalSection: number;
  n_s: number;
  e_w: number;
  closureDistance: number;
  closureDirection: number;
  cl: number;
  dogLeg: number;
  ratioFactor: number;
}

@Component({
  selector: 'app-interploation',
  standalone: true,
  imports: [SharedModule,MaterialModuleModule,NgApexchartsModule,NgSelectModule,ReactiveFormsModule,FormsModule,CommonModule],
  providers:[FlatpickrDefaults],
  templateUrl: './interploation.component.html',
  styleUrl: './interploation.component.scss'
})
export class InterploationComponent {

  chartOptions:any
  data:any
  searchTerm: string = '';
  surveyData: SurveyData[] = [
  { station: 1, depth: 100, inc: 100, azimuth: 0.23, tvd: 0.23, verticalSection: 0.23, n_s: 0.23, e_w: 0.23, closureDistance: 0.23, closureDirection: 0.23, cl: 0.23, dogLeg: 0.23, ratioFactor: 0.23 },
  { station: 2, depth: 110, inc: 101, azimuth: 0.24, tvd: 0.24, verticalSection: 0.24, n_s: 0.24, e_w: 0.24, closureDistance: 0.24, closureDirection: 0.24, cl: 0.24, dogLeg: 0.24, ratioFactor: 0.24 },
  { station: 3, depth: 120, inc: 102, azimuth: 0.25, tvd: 0.25, verticalSection: 0.25, n_s: 0.25, e_w: 0.25, closureDistance: 0.25, closureDirection: 0.25, cl: 0.25, dogLeg: 0.25, ratioFactor: 0.25 },
  { station: 4, depth: 130, inc: 103, azimuth: 0.26, tvd: 0.26, verticalSection: 0.26, n_s: 0.26, e_w: 0.26, closureDistance: 0.26, closureDirection: 0.26, cl: 0.26, dogLeg: 0.26, ratioFactor: 0.26 },
  { station: 5, depth: 140, inc: 104, azimuth: 0.27, tvd: 0.27, verticalSection: 0.27, n_s: 0.27, e_w: 0.27, closureDistance: 0.27, closureDirection: 0.27, cl: 0.27, dogLeg: 0.27, ratioFactor: 0.27 },
  { station: 6, depth: 150, inc: 105, azimuth: 0.28, tvd: 0.28, verticalSection: 0.28, n_s: 0.28, e_w: 0.28, closureDistance: 0.28, closureDirection: 0.28, cl: 0.28, dogLeg: 0.28, ratioFactor: 0.28 },
  { station: 7, depth: 160, inc: 106, azimuth: 0.29, tvd: 0.29, verticalSection: 0.29, n_s: 0.29, e_w: 0.29, closureDistance: 0.29, closureDirection: 0.29, cl: 0.29, dogLeg: 0.29, ratioFactor: 0.29 },
  { station: 8, depth: 170, inc: 107, azimuth: 0.30, tvd: 0.30, verticalSection: 0.30, n_s: 0.30, e_w: 0.30, closureDistance: 0.30, closureDirection: 0.30, cl: 0.30, dogLeg: 0.30, ratioFactor: 0.30 },
  { station: 9, depth: 180, inc: 108, azimuth: 0.31, tvd: 0.31, verticalSection: 0.31, n_s: 0.31, e_w: 0.31, closureDistance: 0.31, closureDirection: 0.31, cl: 0.31, dogLeg: 0.31, ratioFactor: 0.31 },
  { station: 10, depth: 190, inc: 109, azimuth: 0.32, tvd: 0.32, verticalSection: 0.32, n_s: 0.32, e_w: 0.32, closureDistance: 0.32, closureDirection: 0.32, cl: 0.32, dogLeg: 0.32, ratioFactor: 0.32 },
  { station: 11, depth: 200, inc: 110, azimuth: 0.33, tvd: 0.33, verticalSection: 0.33, n_s: 0.33, e_w: 0.33, closureDistance: 0.33, closureDirection: 0.33, cl: 0.33, dogLeg: 0.33, ratioFactor: 0.33 },
  { station: 12, depth: 210, inc: 111, azimuth: 0.34, tvd: 0.34, verticalSection: 0.34, n_s: 0.34, e_w: 0.34, closureDistance: 0.34, closureDirection: 0.34, cl: 0.34, dogLeg: 0.34, ratioFactor: 0.34 },
  { station: 13, depth: 220, inc: 112, azimuth: 0.35, tvd: 0.35, verticalSection: 0.35, n_s: 0.35, e_w: 0.35, closureDistance: 0.35, closureDirection: 0.35, cl: 0.35, dogLeg: 0.35, ratioFactor: 0.35 },
  { station: 14, depth: 230, inc: 113, azimuth: 0.36, tvd: 0.36, verticalSection: 0.36, n_s: 0.36, e_w: 0.36, closureDistance: 0.36, closureDirection: 0.36, cl: 0.36, dogLeg: 0.36, ratioFactor: 0.36 },
  { station: 15, depth: 240, inc: 114, azimuth: 0.37, tvd: 0.37, verticalSection: 0.37, n_s: 0.37, e_w: 0.37, closureDistance: 0.37, closureDirection: 0.37, cl: 0.37, dogLeg: 0.37, ratioFactor: 0.37 },
  { station: 16, depth: 250, inc: 115, azimuth: 0.38, tvd: 0.38, verticalSection: 0.38, n_s: 0.38, e_w: 0.38, closureDistance: 0.38, closureDirection: 0.38, cl: 0.38, dogLeg: 0.38, ratioFactor: 0.38 },
  { station: 17, depth: 260, inc: 116, azimuth: 0.39, tvd: 0.39, verticalSection: 0.39, n_s: 0.39, e_w: 0.39, closureDistance: 0.39, closureDirection: 0.39, cl: 0.39, dogLeg: 0.39, ratioFactor: 0.39 },
  { station: 18, depth: 270, inc: 117, azimuth: 0.40, tvd: 0.40, verticalSection: 0.40, n_s: 0.40, e_w: 0.40, closureDistance: 0.40, closureDirection: 0.40, cl: 0.40, dogLeg: 0.40, ratioFactor: 0.40 },
  { station: 19, depth: 280, inc: 118, azimuth: 0.41, tvd: 0.41, verticalSection: 0.41, n_s: 0.41, e_w: 0.41, closureDistance: 0.41, closureDirection: 0.41, cl: 0.41, dogLeg: 0.41, ratioFactor: 0.41 },
  { station: 20, depth: 290, inc: 119, azimuth: 0.42, tvd: 0.42, verticalSection: 0.42, n_s: 0.42, e_w: 0.42, closureDistance: 0.42, closureDirection: 0.42, cl: 0.42, dogLeg: 0.42, ratioFactor: 0.42 },
  { station: 21, depth: 100, inc: 100, azimuth: 0.23, tvd: 0.23, verticalSection: 0.23, n_s: 0.23, e_w: 0.23, closureDistance: 0.23, closureDirection: 0.23, cl: 0.23, dogLeg: 0.23, ratioFactor: 0.23 },
  { station: 22, depth: 110, inc: 101, azimuth: 0.24, tvd: 0.24, verticalSection: 0.24, n_s: 0.24, e_w: 0.24, closureDistance: 0.24, closureDirection: 0.24, cl: 0.24, dogLeg: 0.24, ratioFactor: 0.24 },
  { station: 23, depth: 120, inc: 102, azimuth: 0.25, tvd: 0.25, verticalSection: 0.25, n_s: 0.25, e_w: 0.25, closureDistance: 0.25, closureDirection: 0.25, cl: 0.25, dogLeg: 0.25, ratioFactor: 0.25 },
  { station: 24, depth: 130, inc: 103, azimuth: 0.26, tvd: 0.26, verticalSection: 0.26, n_s: 0.26, e_w: 0.26, closureDistance: 0.26, closureDirection: 0.26, cl: 0.26, dogLeg: 0.26, ratioFactor: 0.26 },
  { station: 25, depth: 140, inc: 104, azimuth: 0.27, tvd: 0.27, verticalSection: 0.27, n_s: 0.27, e_w: 0.27, closureDistance: 0.27, closureDirection: 0.27, cl: 0.27, dogLeg: 0.27, ratioFactor: 0.27 },
  { station: 26, depth: 150, inc: 105, azimuth: 0.28, tvd: 0.28, verticalSection: 0.28, n_s: 0.28, e_w: 0.28, closureDistance: 0.28, closureDirection: 0.28, cl: 0.28, dogLeg: 0.28, ratioFactor: 0.28 },
  { station: 27, depth: 160, inc: 106, azimuth: 0.29, tvd: 0.29, verticalSection: 0.29, n_s: 0.29, e_w: 0.29, closureDistance: 0.29, closureDirection: 0.29, cl: 0.29, dogLeg: 0.29, ratioFactor: 0.29 },
  { station: 28, depth: 170, inc: 107, azimuth: 0.30, tvd: 0.30, verticalSection: 0.30, n_s: 0.30, e_w: 0.30, closureDistance: 0.30, closureDirection: 0.30, cl: 0.30, dogLeg: 0.30, ratioFactor: 0.30 },
  { station: 29, depth: 180, inc: 108, azimuth: 0.31, tvd: 0.31, verticalSection: 0.31, n_s: 0.31, e_w: 0.31, closureDistance: 0.31, closureDirection: 0.31, cl: 0.31, dogLeg: 0.31, ratioFactor: 0.31 },
  { station: 30, depth: 190, inc: 109, azimuth: 0.32, tvd: 0.32, verticalSection: 0.32, n_s: 0.32, e_w: 0.32, closureDistance: 0.32, closureDirection: 0.32, cl: 0.32, dogLeg: 0.32, ratioFactor: 0.32 },
  { station: 31, depth: 200, inc: 110, azimuth: 0.33, tvd: 0.33, verticalSection: 0.33, n_s: 0.33, e_w: 0.33, closureDistance: 0.33, closureDirection: 0.33, cl: 0.33, dogLeg: 0.33, ratioFactor: 0.33 },
  { station: 32, depth: 210, inc: 111, azimuth: 0.34, tvd: 0.34, verticalSection: 0.34, n_s: 0.34, e_w: 0.34, closureDistance: 0.34, closureDirection: 0.34, cl: 0.34, dogLeg: 0.34, ratioFactor: 0.34 },
  { station: 33, depth: 220, inc: 112, azimuth: 0.35, tvd: 0.35, verticalSection: 0.35, n_s: 0.35, e_w: 0.35, closureDistance: 0.35, closureDirection: 0.35, cl: 0.35, dogLeg: 0.35, ratioFactor: 0.35 },
  { station: 34, depth: 230, inc: 113, azimuth: 0.36, tvd: 0.36, verticalSection: 0.36, n_s: 0.36, e_w: 0.36, closureDistance: 0.36, closureDirection: 0.36, cl: 0.36, dogLeg: 0.36, ratioFactor: 0.36 },
  { station: 35, depth: 240, inc: 114, azimuth: 0.37, tvd: 0.37, verticalSection: 0.37, n_s: 0.37, e_w: 0.37, closureDistance: 0.37, closureDirection: 0.37, cl: 0.37, dogLeg: 0.37, ratioFactor: 0.37 },
  { station: 36, depth: 250, inc: 115, azimuth: 0.38, tvd: 0.38, verticalSection: 0.38, n_s: 0.38, e_w: 0.38, closureDistance: 0.38, closureDirection: 0.38, cl: 0.38, dogLeg: 0.38, ratioFactor: 0.38 },
  { station: 37, depth: 260, inc: 116, azimuth: 0.39, tvd: 0.39, verticalSection: 0.39, n_s: 0.39, e_w: 0.39, closureDistance: 0.39, closureDirection: 0.39, cl: 0.39, dogLeg: 0.39, ratioFactor: 0.39 },
  { station: 38, depth: 270, inc: 117, azimuth: 0.40, tvd: 0.40, verticalSection: 0.40, n_s: 0.40, e_w: 0.40, closureDistance: 0.40, closureDirection: 0.40, cl: 0.40, dogLeg: 0.40, ratioFactor: 0.40 },
  { station: 39, depth: 280, inc: 118, azimuth: 0.41, tvd: 0.41, verticalSection: 0.41, n_s: 0.41, e_w: 0.41, closureDistance: 0.41, closureDirection: 0.41, cl: 0.41, dogLeg: 0.41, ratioFactor: 0.41 },
  { station: 40, depth: 290, inc: 119, azimuth: 0.42, tvd: 0.42, verticalSection: 0.42, n_s: 0.42, e_w: 0.42, closureDistance: 0.42, closureDirection: 0.42, cl: 0.42, dogLeg: 0.42, ratioFactor: 0.42 },
  { station: 41, depth: 100, inc: 100, azimuth: 0.23, tvd: 0.23, verticalSection: 0.23, n_s: 0.23, e_w: 0.23, closureDistance: 0.23, closureDirection: 0.23, cl: 0.23, dogLeg: 0.23, ratioFactor: 0.23 },
  { station: 42, depth: 110, inc: 101, azimuth: 0.24, tvd: 0.24, verticalSection: 0.24, n_s: 0.24, e_w: 0.24, closureDistance: 0.24, closureDirection: 0.24, cl: 0.24, dogLeg: 0.24, ratioFactor: 0.24 },
  { station: 43, depth: 120, inc: 102, azimuth: 0.25, tvd: 0.25, verticalSection: 0.25, n_s: 0.25, e_w: 0.25, closureDistance: 0.25, closureDirection: 0.25, cl: 0.25, dogLeg: 0.25, ratioFactor: 0.25 },
  { station: 44, depth: 130, inc: 103, azimuth: 0.26, tvd: 0.26, verticalSection: 0.26, n_s: 0.26, e_w: 0.26, closureDistance: 0.26, closureDirection: 0.26, cl: 0.26, dogLeg: 0.26, ratioFactor: 0.26 },
  { station: 45, depth: 140, inc: 104, azimuth: 0.27, tvd: 0.27, verticalSection: 0.27, n_s: 0.27, e_w: 0.27, closureDistance: 0.27, closureDirection: 0.27, cl: 0.27, dogLeg: 0.27, ratioFactor: 0.27 },
  { station: 46, depth: 150, inc: 105, azimuth: 0.28, tvd: 0.28, verticalSection: 0.28, n_s: 0.28, e_w: 0.28, closureDistance: 0.28, closureDirection: 0.28, cl: 0.28, dogLeg: 0.28, ratioFactor: 0.28 },
  { station: 47, depth: 160, inc: 106, azimuth: 0.29, tvd: 0.29, verticalSection: 0.29, n_s: 0.29, e_w: 0.29, closureDistance: 0.29, closureDirection: 0.29, cl: 0.29, dogLeg: 0.29, ratioFactor: 0.29 },
  { station: 48, depth: 170, inc: 107, azimuth: 0.30, tvd: 0.30, verticalSection: 0.30, n_s: 0.30, e_w: 0.30, closureDistance: 0.30, closureDirection: 0.30, cl: 0.30, dogLeg: 0.30, ratioFactor: 0.30 },
  { station: 49, depth: 180, inc: 108, azimuth: 0.31, tvd: 0.31, verticalSection: 0.31, n_s: 0.31, e_w: 0.31, closureDistance: 0.31, closureDirection: 0.31, cl: 0.31, dogLeg: 0.31, ratioFactor: 0.31 },
  { station: 50, depth: 190, inc: 109, azimuth: 0.32, tvd: 0.32, verticalSection: 0.32, n_s: 0.32, e_w: 0.32, closureDistance: 0.32, closureDirection: 0.32, cl: 0.32, dogLeg: 0.32, ratioFactor: 0.32 },
  { station: 11, depth: 200, inc: 110, azimuth: 0.33, tvd: 0.33, verticalSection: 0.33, n_s: 0.33, e_w: 0.33, closureDistance: 0.33, closureDirection: 0.33, cl: 0.33, dogLeg: 0.33, ratioFactor: 0.33 },
  { station: 52, depth: 210, inc: 111, azimuth: 0.34, tvd: 0.34, verticalSection: 0.34, n_s: 0.34, e_w: 0.34, closureDistance: 0.34, closureDirection: 0.34, cl: 0.34, dogLeg: 0.34, ratioFactor: 0.34 },
  { station: 53, depth: 220, inc: 112, azimuth: 0.35, tvd: 0.35, verticalSection: 0.35, n_s: 0.35, e_w: 0.35, closureDistance: 0.35, closureDirection: 0.35, cl: 0.35, dogLeg: 0.35, ratioFactor: 0.35 },
  { station: 54, depth: 230, inc: 113, azimuth: 0.36, tvd: 0.36, verticalSection: 0.36, n_s: 0.36, e_w: 0.36, closureDistance: 0.36, closureDirection: 0.36, cl: 0.36, dogLeg: 0.36, ratioFactor: 0.36 },
  { station: 55, depth: 240, inc: 114, azimuth: 0.37, tvd: 0.37, verticalSection: 0.37, n_s: 0.37, e_w: 0.37, closureDistance: 0.37, closureDirection: 0.37, cl: 0.37, dogLeg: 0.37, ratioFactor: 0.37 },
  { station: 56, depth: 250, inc: 115, azimuth: 0.38, tvd: 0.38, verticalSection: 0.38, n_s: 0.38, e_w: 0.38, closureDistance: 0.38, closureDirection: 0.38, cl: 0.38, dogLeg: 0.38, ratioFactor: 0.38 },
  { station: 57, depth: 260, inc: 116, azimuth: 0.39, tvd: 0.39, verticalSection: 0.39, n_s: 0.39, e_w: 0.39, closureDistance: 0.39, closureDirection: 0.39, cl: 0.39, dogLeg: 0.39, ratioFactor: 0.39 },
  { station: 58, depth: 270, inc: 117, azimuth: 0.40, tvd: 0.40, verticalSection: 0.40, n_s: 0.40, e_w: 0.40, closureDistance: 0.40, closureDirection: 0.40, cl: 0.40, dogLeg: 0.40, ratioFactor: 0.40 },
  { station: 59, depth: 280, inc: 118, azimuth: 0.41, tvd: 0.41, verticalSection: 0.41, n_s: 0.41, e_w: 0.41, closureDistance: 0.41, closureDirection: 0.41, cl: 0.41, dogLeg: 0.41, ratioFactor: 0.41 },
  { station: 60, depth: 290, inc: 119, azimuth: 0.42, tvd: 0.42, verticalSection: 0.42, n_s: 0.42, e_w: 0.42, closureDistance: 0.42, closureDirection: 0.42, cl: 0.42, dogLeg: 0.42, ratioFactor: 0.42 },
  { station: 61, depth: 100, inc: 100, azimuth: 0.23, tvd: 0.23, verticalSection: 0.23, n_s: 0.23, e_w: 0.23, closureDistance: 0.23, closureDirection: 0.23, cl: 0.23, dogLeg: 0.23, ratioFactor: 0.23 },
  { station: 62, depth: 110, inc: 101, azimuth: 0.24, tvd: 0.24, verticalSection: 0.24, n_s: 0.24, e_w: 0.24, closureDistance: 0.24, closureDirection: 0.24, cl: 0.24, dogLeg: 0.24, ratioFactor: 0.24 },
  { station: 63, depth: 120, inc: 102, azimuth: 0.25, tvd: 0.25, verticalSection: 0.25, n_s: 0.25, e_w: 0.25, closureDistance: 0.25, closureDirection: 0.25, cl: 0.25, dogLeg: 0.25, ratioFactor: 0.25 },
  { station: 64, depth: 130, inc: 103, azimuth: 0.26, tvd: 0.26, verticalSection: 0.26, n_s: 0.26, e_w: 0.26, closureDistance: 0.26, closureDirection: 0.26, cl: 0.26, dogLeg: 0.26, ratioFactor: 0.26 },
  { station: 65, depth: 140, inc: 104, azimuth: 0.27, tvd: 0.27, verticalSection: 0.27, n_s: 0.27, e_w: 0.27, closureDistance: 0.27, closureDirection: 0.27, cl: 0.27, dogLeg: 0.27, ratioFactor: 0.27 },
  { station: 66, depth: 150, inc: 105, azimuth: 0.28, tvd: 0.28, verticalSection: 0.28, n_s: 0.28, e_w: 0.28, closureDistance: 0.28, closureDirection: 0.28, cl: 0.28, dogLeg: 0.28, ratioFactor: 0.28 },
  { station: 67, depth: 160, inc: 106, azimuth: 0.29, tvd: 0.29, verticalSection: 0.29, n_s: 0.29, e_w: 0.29, closureDistance: 0.29, closureDirection: 0.29, cl: 0.29, dogLeg: 0.29, ratioFactor: 0.29 },
  { station: 68, depth: 170, inc: 107, azimuth: 0.30, tvd: 0.30, verticalSection: 0.30, n_s: 0.30, e_w: 0.30, closureDistance: 0.30, closureDirection: 0.30, cl: 0.30, dogLeg: 0.30, ratioFactor: 0.30 },
  { station: 69, depth: 180, inc: 108, azimuth: 0.31, tvd: 0.31, verticalSection: 0.31, n_s: 0.31, e_w: 0.31, closureDistance: 0.31, closureDirection: 0.31, cl: 0.31, dogLeg: 0.31, ratioFactor: 0.31 },
  { station: 70, depth: 190, inc: 109, azimuth: 0.32, tvd: 0.32, verticalSection: 0.32, n_s: 0.32, e_w: 0.32, closureDistance: 0.32, closureDirection: 0.32, cl: 0.32, dogLeg: 0.32, ratioFactor: 0.32 },
  { station: 71, depth: 200, inc: 110, azimuth: 0.33, tvd: 0.33, verticalSection: 0.33, n_s: 0.33, e_w: 0.33, closureDistance: 0.33, closureDirection: 0.33, cl: 0.33, dogLeg: 0.33, ratioFactor: 0.33 },
  { station: 72, depth: 210, inc: 111, azimuth: 0.34, tvd: 0.34, verticalSection: 0.34, n_s: 0.34, e_w: 0.34, closureDistance: 0.34, closureDirection: 0.34, cl: 0.34, dogLeg: 0.34, ratioFactor: 0.34 },
  { station: 73, depth: 220, inc: 112, azimuth: 0.35, tvd: 0.35, verticalSection: 0.35, n_s: 0.35, e_w: 0.35, closureDistance: 0.35, closureDirection: 0.35, cl: 0.35, dogLeg: 0.35, ratioFactor: 0.35 },
  { station: 74, depth: 230, inc: 113, azimuth: 0.36, tvd: 0.36, verticalSection: 0.36, n_s: 0.36, e_w: 0.36, closureDistance: 0.36, closureDirection: 0.36, cl: 0.36, dogLeg: 0.36, ratioFactor: 0.36 },
  { station: 75, depth: 240, inc: 114, azimuth: 0.37, tvd: 0.37, verticalSection: 0.37, n_s: 0.37, e_w: 0.37, closureDistance: 0.37, closureDirection: 0.37, cl: 0.37, dogLeg: 0.37, ratioFactor: 0.37 },
  { station: 76, depth: 250, inc: 115, azimuth: 0.38, tvd: 0.38, verticalSection: 0.38, n_s: 0.38, e_w: 0.38, closureDistance: 0.38, closureDirection: 0.38, cl: 0.38, dogLeg: 0.38, ratioFactor: 0.38 },
  { station: 77, depth: 260, inc: 116, azimuth: 0.39, tvd: 0.39, verticalSection: 0.39, n_s: 0.39, e_w: 0.39, closureDistance: 0.39, closureDirection: 0.39, cl: 0.39, dogLeg: 0.39, ratioFactor: 0.39 },
  { station: 78, depth: 270, inc: 117, azimuth: 0.40, tvd: 0.40, verticalSection: 0.40, n_s: 0.40, e_w: 0.40, closureDistance: 0.40, closureDirection: 0.40, cl: 0.40, dogLeg: 0.40, ratioFactor: 0.40 },
  { station: 79, depth: 280, inc: 118, azimuth: 0.41, tvd: 0.41, verticalSection: 0.41, n_s: 0.41, e_w: 0.41, closureDistance: 0.41, closureDirection: 0.41, cl: 0.41, dogLeg: 0.41, ratioFactor: 0.41 },
  { station: 80, depth: 290, inc: 119, azimuth: 0.42, tvd: 0.42, verticalSection: 0.42, n_s: 0.42, e_w: 0.42, closureDistance: 0.42, closureDirection: 0.42, cl: 0.42, dogLeg: 0.42, ratioFactor: 0.42 }
];
filteredData: SurveyData[] = this.surveyData;
filterData(): void {
  if (this.searchTerm) {
    this.filteredData = this.surveyData.filter((item: SurveyData) =>
      item.station.toString().includes(this.searchTerm)
    );
  } else {
    this.filteredData = this.surveyData; 
  }
}

  constructor() {
  this.chartOptions = {
    series: [
      {
        name: 'New',
        data: [76, 85, 101, 98, 87, 105],
      },
      {
        name: 'Pending',
        data: [35, 41, 36, 26, 45, 48],
      },
      {
        name: 'Completed',
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: 'Inprogress',
        data: [13, 27, 31, 29, 35, 25],
      },
    ],
    chart: {
      type: 'bar',
      height: 210,
      width:342,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '25%',
        endingShape: 'rounded',
      },
    },
    grid: {
      borderColor: '#f2f5f7',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#845adf', '#28d193', '#ffbe14', '#23b7e5'],
    stroke: {
      show: true,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      labels: {
        show: true,
        style: {
          colors: '#8c9097',
          fontSize: '11px',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    yaxis: {
      title: {
        style: {
          color: '#8c9097',
        },
      },
      labels: {
        show: true,
        style: {
          colors: '#8c9097',
          fontSize: '11px',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    fill: {
      opacity: 1,
    },
 
  };
  
}

}
 



