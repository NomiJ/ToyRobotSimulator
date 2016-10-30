import { Component, OnInit, NgModule, EventEmitter, Input, Output } from '@angular/core';
import { CommandService } from './command.service'
import { AutoGrowDirective } from '../directive/auto-grow.directive'
import { GLOBALS, COMMAND_DICT,Command } from '../shared/globals';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css'],
  providers: [CommandService, GLOBALS],
})


@NgModule({
  declarations: [AutoGrowDirective]
})


export class CommandComponent implements OnInit {
  @Output() commandReceived = new EventEmitter();

  title: string = 'Command Panel'

  constructor(public commandService: CommandService) {
  }

  ngOnInit() {
  }

  onCommand(cmd: string) {
    if (cmd) {
      let command: Command;
      command = this.commandService.parse(cmd);
      if (command.cmd == COMMAND_DICT.NOT_VALID) {
        this.commandReceived.emit({ msg: GLOBALS.SYS_MSG[COMMAND_DICT.NOT_VALID] })
      } else {
        if (command.cmd == COMMAND_DICT.PLACE) {
          let [, ...args] = cmd.trim().split(" ");
          command.args = args;
        }
        this.commandReceived.emit({ value: command, msg: GLOBALS.SYS_MSG[command.cmd] })

      }
    }
  }
}
