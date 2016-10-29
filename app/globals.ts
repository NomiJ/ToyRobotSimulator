import { Injectable } from 'angular2/core';


export enum COMMAND_DICT {
	LEFT,
	RIGHT,
	PLACE,
	MOVE,
	REPORT,
	NOT_VALID
}


export const enum DIRECTION {
	NORTH,
	EAST,
	SOUTH,
	WEST
}

@Injectable()
export class Globals{
	public static version: string="0.0.9"; 
 	public static ERROR_MSG={};

	 constructor(){
	 }

	 

}
Globals.ERROR_MSG[COMMAND_DICT.NOT_VALID] = "Mike (wonder), This Robot is sensitive about its Command Manual.";

