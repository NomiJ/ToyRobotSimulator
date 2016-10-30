import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BoardService } from './board.service'
import { GLOBALS,Command } from '../shared/globals'
import { Robot } from '../shared/robot'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardService, GLOBALS]

})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('command') commandName: Command;
	@Output() commandExecuted = new EventEmitter();

	rows: number[] = Array.from({ length: GLOBALS.MAXROWS }).map((x, i) => ((GLOBALS.MAXROWS - 1) - i));
	cols: number[] = Array.from({ length: GLOBALS.MAXCOLS }).map((x, i) => i);
	static rx: number = -1;
	static ry: number = -1;

	ngOnChanges(changes: any) {
		console.log(changes);
		if (this.commandName) {
			let r: Robot = Robot.getInstance()
			let m: string = r.mapCommand(this.commandName)
			BoardComponent.rx = r.x
			BoardComponent.ry = r.y
			this.commandExecuted.emit({ msg: m })
		}

	}

	classMap(r: number, c: number) {
		if (r == BoardComponent.ry && c == BoardComponent.rx)
			return "has-robot";
		return "no-robot";
	}

}
