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

		//asignar minas
		for (let i = 0; i < mines; i++) {
			this.getRandomCell().mine = true;
		}

		//contar minas
		const peers = [ [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
		
		//minas adyacentes
		for (let y = 0; y < size; y++) {
			for (let x = 0; x < size; x++) {
				let adjacentMines = 0;
				for (let peer of peers) {
					if (this.cells[y + peer[0]] &&
						this.cells[x + peer[1]] &&
						this.cells[y + peer[0]][x + peer[1]].mine
					) {
						adjacentMines++;
					}
				}
				this.cells[y][x].proximityMines = adjacentMines;

				//count
				if(this.cells[y][x].mine) {
					this.mineCount++;
				}
			}
		}
		this.remainingCells = (size * size) - this.mineCount;
	}

	//celdas al azar
	getRandomCell(): Cell {
		const y = Math.floor(Math.random() * this.cells.length);
		const x = Math.floor(Math.random() * this.cells[y].length);
		return this.cells[x][y];
	}

	//celda clickeada
	checkCell(cell: Cell): 'gameover' | 'win' | null {
		if (cell.status !== 'open') {
			return;
		} else if (cell.mine) {
			this.revealAll();
			return 'gameover';
		} else {
			cell.status = 'clear';
			if(this.remainingCells-- <= 1) {
				return 'win';
			}
			return;
		}
	}
}