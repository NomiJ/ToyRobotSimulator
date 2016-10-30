/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommandService } from './command.service';
import { COMMAND_DICT,Command } from '../shared/globals';
describe('Service: Command', () => {
  let commandService: CommandService;
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [CommandService]
    });
    commandService = new CommandService();
  });

  it('should ...', inject([CommandService], (service: CommandService) => {
    expect(service).toBeTruthy();
  }));
  describe('#parse', () => {
    it('should parse the MOVE command', () => {

      let result: Command = commandService.parse("MOVE");
      expect(result.cmd).toEqual(COMMAND_DICT.MOVE)

    });
  });
});
