import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { HttpService } from '../http.service';

import { Api_Name } from '../api-name';
@Component({
  selector: 'app-api-names-form',
  templateUrl: './api-names-form.component.html',
  styleUrls: ['./api-names-form.component.css']
})
export class ApiNamesFormComponent implements OnInit {

  model = new Api_Name("true", [], "", "");
  iapiname = "";

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
  }

  submitNewAPIName(newName: string) {
    if (newName.trim().length == 0)
      return;

    var endpoint = 'http://localhost:4040/validation?query=' + newName;

    this.http.get(endpoint).then(data => {
      let value = JSON.parse(JSON.stringify(data))
      this.model.is_valid = value.isValid;
      this.model.query = value.query;
      this.model.suggested_name = value.suggestedQuery;
      this.model.product_list = value.associatedProducts;
    });

  }

  clearForm() {

    this.model.is_valid = "true";
    this.model.query = "";
    this.model.suggested_name = "";
    this.model.product_list = [];
    this.iapiname = "";

  }
}

