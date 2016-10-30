import { NgModule,Component } from '@angular/core';
import { BoardComponent } from './board/board.component'
import { CommandComponent } from './command/command.component'
import { ManualComponent } from './manual/manual.component'
import {Command,GLOBALS} from './shared/globals'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

@NgModule({
  declarations: [BoardComponent, ManualComponent,CommandComponent]
})

export class AppComponent {
    title = GLOBALS.APP_NAME
    version = GLOBALS.VERSION
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
