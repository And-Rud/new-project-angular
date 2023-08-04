import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass'],
})
export class CarComponent implements OnInit {
  name: string;
  model: string;
  speed: number;
  colors: Colors;
  options: string[];
  isEdit: Boolean = false;

  constructor() {}

  ngOnInit() {
    this.name = 'Audi';
    this.model = 'RS8';
    this.speed = 235;
    this.colors = {
      car: 'white',
      salon: 'black',
      wheel: 'gray',
    };
    this.options = ['ABS', 'Autopilot', 'parking'];
  }

  addOpt(option: any) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option: any) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  carSelect(carName: any) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.model = 'X-5';
      this.speed = 320;
      this.colors = {
        car: 'white',
        salon: 'black',
        wheel: 'gray',
      };
      this.options = ['ABS', 'Autopilot', 'parking'];
    } else if (carName == 'audi') {
      this.name = 'Audi';
      this.model = 'RS8';
      this.speed = 285;
      this.colors = {
        car: 'red',
        salon: 'gray',
        wheel: 'white',
      };
      this.options = ['ABS', 'Autopilot', 'parking'];
    } else if (carName == 'mer') {
      this.name = 'Mercedes';
      this.model = 'CLK';
      this.speed = 290;
      this.colors = {
        car: 'dark',
        salon: 'black',
        wheel: 'silver',
      };
      this.options = ['ABS', 'Autopilot', 'parking'];
    }
  }
}

interface Colors {
  car: string;
  salon: string;
  wheel: string;
}
