import { Cell } from './cell';

export class Board {
	cells: Cell[][] = [];
	private remainingCells = 0;
	private mineCount = 0;

	constructor(size: number, mines: number) {
		for (let y = 0; y < size; y++) {
			this.cells[y] = [];
			for (let x = 0; x < size; x++) {
				this.cells[y][x] = new Cell(y, x);
			}
		}
	
	} 
}