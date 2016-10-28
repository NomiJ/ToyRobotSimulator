import { Component } from 'angular2/core'
import { CommandService } from './command.service'
import { AutoGrowDirective } from './auto-grow.directive'

@Component({
	selector: 'command',
	template: `<h2> {{title}} </h2>
				<input type="text" placeholder="Press Enter to Execute the Command" id="command" autoGrow />
				`,
	providers: [CommandService],
	directives: [AutoGrowDirective]
})

//Angular would know that this is a component class, by lokking into meta data
export class CommandComponent {
	title: string = 'Command Panel'
	commandHistory: string[];

	constructor(commandService: CommandService) {
		//new CommandService() would not let you unit test this
		//this.commandHistory = commandService.getCommandHistory();
	}
}