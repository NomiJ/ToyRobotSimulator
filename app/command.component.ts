import {  Component, EventEmitter, Input, Output } from 'angular2/core'
import { CommandService, Command } from './command.service'
import { AutoGrowDirective } from './auto-grow.directive'
import {GLOBALS,COMMAND_DICT}  from './globals'; 

@Component({
	selector: 'command',
	template: `<h2> {{title}} </h2>
				<input  #cmd (keyup.enter)="onCommand(cmd.value); cmd.value=''"
				 placeholder="Press Enter to Execute the Command" autoGrow />
				  <p>{{uilog}}</p>

				`,
	providers: [CommandService, GLOBALS],
	directives: [AutoGrowDirective]
})

//Angular would know that this is a component class, by looking into meta data
export class CommandComponent {
	  @Output() onVoted = new EventEmitter<boolean>();

	title: string = 'Command Panel'
	commandService: CommandService;
	uilog:string = '';

	constructor(commandService: CommandService) {
		this.commandService = commandService;
	}

	onCommand(cmd: string) {
		if(cmd){
			let command:Command = this.commandService.parse(cmd);
			if(command.cmd == COMMAND_DICT.NOT_VALID){
				this.uilog = GLOBALS.SYS_MSG[COMMAND_DICT.NOT_VALID]
			}else
			this.uilog = GLOBALS.SYS_MSG[command.cmd]
		}
	}
}