import { Component } from 'angular2/core';
import { BoardComponent } from './board.component'
import { CommandComponent } from './command.component'
import {CommService} from './comm.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [BoardComponent, CommandComponent],
      providers: [CommService],


})
export class AppComponent {
    title = 'Toy Robot Simulator!';
    uilog:string = '';

    onCommandReceived(event: any) {
        if(event.err){
            this.uilog = event.err
        }else if(event.info){
            this.uilog = event.info
            //pass event.value
        
        }
    }

}
