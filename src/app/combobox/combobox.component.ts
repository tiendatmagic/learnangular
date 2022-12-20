import { Component } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent {
  public districts: any = [];
  public cities = [{
    "city": "An Giang",
    "district": ["a", "b", "c", "d", "e"]
  }, {
    "city": "Khánh Hòa",
    "district": ["z", "y", "x", "m", "s"]
  }];
  changeCity(event: any) {
    console.log(event.target.value);
    const search = this.cities.filter((data) => data.city == event.target.value)
    console.log(search);
    this.districts = search[0].district;
  }
}
