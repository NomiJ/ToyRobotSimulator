/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommandService } from './command.service';
import { COMMAND_DICT, Command } from '../shared/globals';
describe('Service: Command', () => {
  
  beforeEach(() => {
  TestBed.configureTestingModule({
      providers: [CommandService]
    });
  });

  it('should ...', inject([CommandService], (service: CommandService) => {
    expect(service).toBeTruthy();
  }));

  it('parse method', inject([CommandService], (commandService: CommandService)  => {
    it('should parse the MOVE', () => {

      let result: Command = commandService.parse("MOVE");
      expect(result.cmd).toEqual(COMMAND_DICT.MOVE)
    });
    it('should parse the  LEFT', () => {
      let result: Command = commandService.parse("LEFT");
      expect(result.cmd).toEqual(COMMAND_DICT.LEFT)
    });
    it('should parse the MOVE RIGHT', () => {
      let result: Command = commandService.parse("RIGHT");
      expect(result.cmd).toEqual(COMMAND_DICT.RIGHT)
    });
    it('should parse the REPORT', () => {
      let result: Command = commandService.parse("REPORT");
      expect(result.cmd).toEqual(COMMAND_DICT.REPORT)
    });
    it('should parse the PLACE ', () => {
      let result: Command = commandService.parse("PLACE 0 0 NORTH");
      expect(result.cmd).toEqual(COMMAND_DICT.PLACE)

    });
  }));
});
