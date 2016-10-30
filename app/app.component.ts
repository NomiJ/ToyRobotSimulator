import { Component } from 'angular2/core';
import { BoardComponent } from './board.component'
import { CommandComponent } from './command.component'
import { ManualComponent } from './manual.component'
import {Command} from './command.service';
import {GLOBALS} from './globals'


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [BoardComponent, ManualComponent,CommandComponent],


})
export class AppComponent {
    title = 'Toy Robot Simulator!';
    version = GLOBALS.version
    uilog:string = '';

    command: Command;

    onCommandReceived(event: any) {
        if(event.msg){
            this.uilog = event.msg
        }
        if(event.value){
            this.command = event.value
        }
    }

}
