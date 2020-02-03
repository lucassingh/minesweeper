import { Component } from '@angular/core';
import { Board } from './game/board';
import { Cell } from './game/cell';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'minesweeper-angular';
	constructor() {
		this.reset();
	}
}
