import { Component, Input, Output, EventEmitter } from 'angular2/core'
import { BoardService } from './board.service'
import { GLOBALS } from './globals'
import { Robot } from './robot.service'
import { Command } from './command.service'

@Component({
	selector: 'board',
	template: `<table>
					<tr *ngFor="#r of rows"> 
						<td *ngFor="#c of cols"> 
							<div class="{{classMap(r,c)}}" ></div>
						</td>
					</tr>
				</table>
				`,
	styles: [`
    div.no-robot {
		width:50px; 
		height:50px;
		background: #666;
    }

	div.has-robot {
		width:50px; 
		height:50px;
    	background: red;
	}
  `],
	providers: [BoardService, GLOBALS]
})

//Angular would know that this is a component class, by looking into meta data
export class BoardComponent {
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