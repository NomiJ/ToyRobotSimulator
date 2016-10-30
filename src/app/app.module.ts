import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CommandComponent } from './command/command.component';
import { ManualComponent } from './manual/manual.component';
import { AutoGrowDirective } from './directive/auto-grow.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CommandComponent,
    ManualComponent,
    AutoGrowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
