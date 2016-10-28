import { Component } from 'angular2/core';
import { BoardComponent } from './board.component'
import { CommandComponent } from './command.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [BoardComponent, CommandComponent],

})
export class AppComponent {
    title = 'Toy Robot Simulator!';
}
