import { NgModule,Component } from '@angular/core';
import { BoardComponent } from './board/board.component'
import { CommandComponent } from './command/command.component'
import { ManualComponent } from './manual/manual.component'
import {Command,GLOBALS} from './shared/globals'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    //directives: [BoardComponent, ManualComponent,CommandComponent]
})

@NgModule({
  declarations: [BoardComponent, ManualComponent,CommandComponent]
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
