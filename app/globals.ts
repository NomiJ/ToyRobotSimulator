import { Injectable } from 'angular2/core';


export enum COMMAND_DICT {
	LEFT,
	RIGHT,
	PLACE,
	MOVE,
	REPORT,
	NOT_VALID
}


export enum DIRECTION {
	NORTH = 0,
	EAST = 1,
	SOUTH = 2,
	WEST = 3,
	COUNT = 4,
	NONE = -1
}

@Injectable()
export class GLOBALS {
	public static version: string = "1.0.9";
	public static SYS_MSG = {};
	public static PLACEMENT_CONSTRAINT = -100;
	public static VALIDATION_CONSTRAINT = -101;
	public static UNKNOWN_COMMAND = -102
	public static SUCCESS = 100;
	public static RIGHT = 1;
	public static LEFT = -1;
	


    public static get MAXROWS(): number { return 5; }
    public static get MAXCOLS(): number { return 5; }

	constructor() {
	}



}
GLOBALS.SYS_MSG[COMMAND_DICT.LEFT] = "Command Accepted, TURNING LEFT";
GLOBALS.SYS_MSG[COMMAND_DICT.RIGHT] = "Command Accepted, TURNING RIGHT";
GLOBALS.SYS_MSG[COMMAND_DICT.PLACE] = "Command Accepted, PLACING ";
GLOBALS.SYS_MSG[COMMAND_DICT.MOVE] = "Command Accepted, MOVING";
GLOBALS.SYS_MSG[COMMAND_DICT.NOT_VALID] = "Mike (wonder), This Robot is sensitive about its Command Manual. Look at Right For Commands";
GLOBALS.SYS_MSG[GLOBALS.PLACEMENT_CONSTRAINT] = "This ROBOT needs a placement first";
GLOBALS.SYS_MSG[GLOBALS.VALIDATION_CONSTRAINT] = "Something is wrong with the argument validation for Place Command. Look at Right For Commands ";
GLOBALS.SYS_MSG[GLOBALS.UNKNOWN_COMMAND] = "This command is unknown (wonder). Better report it to (nauman.qazi at systematicbytes dot com) ";


