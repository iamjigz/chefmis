import { Component, OnInit } from '@angular/core';

import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patients-page',
  templateUrl: './patients-page.component.html',
  styleUrls: ['./patients-page.component.scss']
})
export class PatientsPageComponent implements OnInit {

  constructor(public patients: PatientsService) { }

  ngOnInit() {
  }

}
