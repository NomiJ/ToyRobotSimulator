import { Component } from 'angular2/core'
import { GLOBALS, COMMAND_DICT } from './globals'

@Component({
	selector: 'manual',
	template: `<h2>{{title}}</h2>
					<ul>
					<li *ngFor="#m of messages"> 
							<b>{{m}}</b>
						</li>
						</ul>
						`,
	styles:['h2 {text-align:center;} ']
})

export class ManualComponent {
	title="Command Manual"
	messages: string[] = [];
	constructor() {
		for (let c in COMMAND_DICT) {
			if (c == COMMAND_DICT[COMMAND_DICT.NOT_VALID])
				continue
			let m =	GLOBALS.COMMAND_TIPS[c] ? GLOBALS.COMMAND_TIPS[c] : ""
			if(m) this.messages.push(COMMAND_DICT[c] + " => "+ m)
		}

	}
}