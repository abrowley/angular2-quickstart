import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { TempDisplay } from './temp-display.component';


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent , TempDisplay],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
