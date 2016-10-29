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
}
