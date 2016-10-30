import { Injectable } from '@angular/core';

export enum COMMAND_DICT {
	NOT_VALID,
	LEFT,
	RIGHT,
	PLACE,
	MOVE,
	REPORT
}

export enum DIRECTION {
	NORTH = 0,
	EAST = 1,
	SOUTH = 2,
	WEST = 3,
	COUNT = 4,
	NONE = -1
}

export class Command {
	cmd: COMMAND_DICT;
	args: string[];
}


@Injectable()
export class GLOBALS {
	public static APP_NAME = 'Toy Robot Simulator!'
	public static VERSION: string = "2.2.5"; //Unit Test and End to End Test cases Added
	public static SYS_MSG = {};
	public static COMMAND_TIPS = {}
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
GLOBALS.COMMAND_TIPS[COMMAND_DICT.LEFT] = "This command only change the direction of the Robot to anti clockwise";
GLOBALS.COMMAND_TIPS[COMMAND_DICT.RIGHT] = "This command only change the direction of the Robot to  clockwise";
GLOBALS.COMMAND_TIPS[COMMAND_DICT.PLACE] = "This command is must before any other Command. It places the Robot on board ";
GLOBALS.COMMAND_TIPS[COMMAND_DICT.MOVE] = "This command only move the position, if possible to next cell as per its current direction";
GLOBALS.COMMAND_TIPS[COMMAND_DICT.REPORT] = "This will report the current position and direction of Robot";


GLOBALS.SYS_MSG[COMMAND_DICT.LEFT] = "Command Accepted, TURNING LEFT";
GLOBALS.SYS_MSG[COMMAND_DICT.RIGHT] = "Command Accepted, TURNING RIGHT";
GLOBALS.SYS_MSG[COMMAND_DICT.PLACE] = "Command Accepted, PLACING ";
GLOBALS.SYS_MSG[COMMAND_DICT.MOVE] = "Command Accepted, MOVING";
GLOBALS.SYS_MSG[COMMAND_DICT.NOT_VALID] = "Mike (wonder), This Robot is sensitive about its Command Manual. Look at Right For Commands";
GLOBALS.SYS_MSG[GLOBALS.PLACEMENT_CONSTRAINT] = "This ROBOT needs a placement first";
GLOBALS.SYS_MSG[GLOBALS.VALIDATION_CONSTRAINT] = "Something is wrong with the argument validation for Place Command. Look at Right For Commands ";
GLOBALS.SYS_MSG[GLOBALS.UNKNOWN_COMMAND] = "This command is unknown (wonder). Better report it to (nauman.qazi at systematicbytes dot com) ";


