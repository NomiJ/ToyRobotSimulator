import { Injectable } from '@angular/core';
import {COMMAND_DICT, Command}  from '../shared/globals'; 
import {IParser}  from '../shared/interface/iparser'; 


@Injectable()
export class CommandService implements IParser {

	private commandHistory: Command[];
	constructor() {
    }
	getCommandHistory(): Command[] {
		return this.commandHistory;
	}

	parse(inputCommand: string): Command {//This method is actuall public static
		let command: Command = new Command();
		let cmd:string = inputCommand.trim().split(' ')[0] //this is bad code :todo
		command.cmd = COMMAND_DICT[cmd] || COMMAND_DICT.NOT_VALID
		return command;
	}

}