enum NOSE_DIRECTION {
	NORTH,
	EAST,
	SOUTH,
	WEST
}

enum COMMAND_TYPE {
	LEFT,
	RIGHT,
	PLACE,
	MOVE,
	INIT,
	REPORT,
	NONE
}

interface ParserInterface {
	format: string;
	//setErrorHandler();
	parse(inputCommand: string): COMMAND_TYPE;
	//interpret(Map<String,Expression> variables) : number ;
}


export class CommandService implements ParserInterface {

	format: string;
	private commandHistory: string[];
	constructor() {
		this.format = "";
	}

	getCommandHistory(): string[] {
		return this.commandHistory;
	}

	parse(inputCommand: string): COMMAND_TYPE {
		return COMMAND_TYPE.NONE;
	}

}