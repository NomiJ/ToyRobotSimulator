import {Component, Injectable,Input,Output,EventEmitter} from 'angular2/core'
import {Command} from './command.service'

@Injectable()
export class CommService {
  command: Command;
  message:string;
  sendCommand(cmd:Command){
    this.command = cmd;
  }
  sendMessage(message:string){
    this.message = message;
  }
} 

/*
@Injectable()
export class NameService {  
  name: any;
  @Output() nameChange: EventEmitter = new EventEmitter();
  constructor() {
    this.name = "Jack";
  }
  change(){
    console.log("Change function started");
    this.name = "Jane";
    this.nameChange.emit('Angular2');
  }
 
  
}
*/