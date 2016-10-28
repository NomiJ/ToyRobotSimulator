import {
    it,
    describe,
    expect,
    beforeEach,
    beforeEachProviders
} from "angular2/testing";
import {CommandService, Command, COMMAND_DICT} from "./command.service";

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