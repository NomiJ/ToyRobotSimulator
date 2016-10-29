import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {CommService} from './comm.service';

bootstrap(AppComponent,[CommService]);