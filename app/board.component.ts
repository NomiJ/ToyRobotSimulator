import { Component, EventEmitter } from 'angular2/core'
import { BoardService } from './board.service'
import {GLOBALS} from './globals'

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
	providers: [BoardService]
})

//Angular would know that this is a component class, by lokking into meta data
export class BoardComponent {
	rows: number[] = Array.from({ length: GLOBALS.MAXROWS }).map((x, i) => ( (GLOBALS.MAXROWS-1) -i));
	cols: number[] = Array.from({ length: GLOBALS.MAXCOLS }).map((x, i) => i);

	classMap(r: number, c: number) {
		if (r == 0 && c == 0)
			return "has-robot";
		return "no-robot";
	}
}