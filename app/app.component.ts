import { Component } from 'angular2/core';
import { BoardComponent } from './board.component'
import { CommandComponent } from './command.component'
import {Command} from './command.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [BoardComponent, CommandComponent],
    //  providers: [CommService],


})
export class AppComponent {
    title = 'Toy Robot Simulator!';
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
