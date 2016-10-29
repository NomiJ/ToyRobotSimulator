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
	@Input() command:Command;
	@Output() commandReceived = new EventEmitter<Command>();

	title: string = 'Command Panel'
	uilog:string = '';

	constructor(public commandService: CommandService, public comBus: CommService) {
		this.uilog = comBus.message;
	}

	onCommand(cmd: string) {
		if(cmd){
			this.command = this.commandService.parse(cmd);
			if(this.command.cmd == COMMAND_DICT.NOT_VALID){
				this.uilog = GLOBALS.SYS_MSG[COMMAND_DICT.NOT_VALID]
			}else{
				//this.uilog = GLOBALS.SYS_MSG[command.cmd]
				if(this.command.cmd == COMMAND_DICT.PLACE){
					this.command.args = cmd.trim().split(' ').splice(0, 1);//this is such a bad code:todo
				}
				//this.commandReceived.emit(this.command)
				this.comBus.sendCommand(this.command)
				this.uilog = this.comBus.message;
			}
		}
	}
}