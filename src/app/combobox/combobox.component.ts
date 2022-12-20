import { Component } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent {
  public districts: any = ["Chọn quận huyện"];
  public cities = [
    {
      "city": "Vui lòng chọn thành phố",
      "district": ["Chọn quận huyện"]
    },
    {
      "city": "An Giang",
      "district": ["a", "b", "c", "d", "e"]
    }, {
      "city": "Khánh Hòa",
      "district": ["z", "y", "x", "m", "s"]
    }];
  changeCity(event: any): void {
    if (!event.target.value) {
      return;
    }
    const search = this.cities.filter((data) => data.city == event.target.value)
    if (search && search.length > 0) {
      this.districts = search[0].district;
    }
  }
}
