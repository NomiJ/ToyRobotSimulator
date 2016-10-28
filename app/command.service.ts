import {Injectable} from 'angular2/core';

const enum DIRECTION {
	NORTH,
	EAST,
	SOUTH,
	WEST
}

export enum COMMAND_DICT {
	LEFT,
	RIGHT,
	PLACE,
	MOVE,
	REPORT,
	INVALID
}

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

	parse(inputCommand: string): Command {
		let command: Command = new Command();
		let cmd:string = inputCommand.trim().split(' ')[0]
		command.cmd = COMMAND_DICT[cmd] || COMMAND_DICT.INVALID
		return command;
	}

}