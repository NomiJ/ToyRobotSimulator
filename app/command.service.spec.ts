import {
    it,
    describe,
    expect,
    beforeEach,
    beforeEachProviders
} from "angular2/testing";
import {CommandService, Command} from "./command.service";
import {COMMAND_DICT}  from  './globals'; 

describe('CommandService', () => {

	let  commandService : CommandService;
	beforeEach(() => {
        commandService = new CommandService();
    });

   	describe('#parse', () => {
        it('should parse the MOVE command', () => {
            let result:Command  = commandService.parse("MOVE");
			expect(result.cmd).toEqual(COMMAND_DICT.MOVE)
            
        });
    });
});