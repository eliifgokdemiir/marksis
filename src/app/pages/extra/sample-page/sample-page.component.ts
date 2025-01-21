import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

export interface productsData {
  id: number;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    uname: '001',
    position: 'GDA',
    productName: 'Un',
    budget: 3.9,
    priority: 'low',
  },
  {
    id: 2,
    uname: '002',
    position: 'GDA',
    productName: 'Şeker',
    budget: 24.5,
    priority: 'medium',
  },
  {
    id: 3,
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    productName: 'MedicalPro Theme',
    budget: 12.8,
    priority: 'high',
  },
  {
    id: 4,
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    productName: 'Hosting Press HTML',
    budget: 2.4,
    priority: 'critical',
  },
];

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html'
})

export class AppSamplePageComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  displayedColumns: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
