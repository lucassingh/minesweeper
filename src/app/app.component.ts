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
	board: Board;
	  
	constructor() {
		this.reset();
	}

	chekCell(cell: Cell) {
		let result = this.board.checkCell(cell);    	
		if(result === 'gameover') {
			Swal.fire(
			'You loose',
			'Close',
			'error'
			)
			
		} else if(result === 'win') {
			Swal.fire(
			'You win!',
			'Close',
			'success'
			)
		}		
	}

	flag(cell:Cell) {
		if(cell.status === 'flag') {
			cell.status = 'open';
		} else {
			cell.status = 'flag';
		}
	}

	reset() {
		this.board = new Board(8, 8);
	}	
}
