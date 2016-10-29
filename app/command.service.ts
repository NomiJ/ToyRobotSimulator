import {Injectable} from 'angular2/core';
import {COMMAND_DICT}  from './globals'; 

export class Command{
	cmd:COMMAND_DICT;
	args:string[];
}

interface ParserInterface {
	parse(inputCommand: string): Command;
}

@Injectable()
export class CommandService implements ParserInterface {

	private commandHistory: Command[];
	constructor() {
    }
	getCommandHistory(): Command[] {
		return this.commandHistory;
	}

	parse(inputCommand: string): Command {//This method is actuall public static
		let command: Command = new Command();
		let cmd:string = inputCommand.trim().split(' ')[0] //these are lot of if else
		command.cmd = COMMAND_DICT[cmd] || COMMAND_DICT.NOT_VALID
		return command;
	}

}