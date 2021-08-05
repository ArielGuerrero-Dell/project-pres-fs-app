import { Input, Component, OnInit } from '@angular/core';
import { Api_Name } from '../api-name';

@Component({
  selector: 'app-api-names',
  templateUrl: './api-names.component.html',
  styleUrls: ['./api-names.component.css']
})
export class ApiNamesComponent implements OnInit {

  @Input() tmp_api = new Api_Name("true", [], "", "");

  constructor() { }

  ngOnInit(): void {

  }

  isNameValid() {

  }

}
