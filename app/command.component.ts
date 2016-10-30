import {  Component, EventEmitter, Input, Output } from 'angular2/core'
import { CommandService, Command } from './command.service'
import { AutoGrowDirective } from './auto-grow.directive'
import {GLOBALS,COMMAND_DICT}  from './globals'; 
import {CommService} from './comm.service'

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
	
	@Output() commandReceived = new EventEmitter();

	title: string = 'Command Panel'

	constructor(public commandService: CommandService, public comBus: CommService) {
	}

	onCommand(cmd: string) {
		if(cmd){
			let command:Command;
			command = this.commandService.parse(cmd);
			if(command.cmd == COMMAND_DICT.NOT_VALID){
				this.commandReceived.emit({msg:GLOBALS.SYS_MSG[COMMAND_DICT.NOT_VALID]})
			}else{
				if(command.cmd == COMMAND_DICT.PLACE){
					 let [, ...args] = cmd.trim().split(" ");
					 command.args = args;
				}
				this.commandReceived.emit({value:command, msg: GLOBALS.SYS_MSG[command.cmd]})
				//this.comBus.sendCommand(this.command)
				//this.uilog = this.comBus.message;
			}
		}
	}
}