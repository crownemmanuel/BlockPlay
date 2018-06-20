import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MinersComponent } from './miners/miners.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    LeftMenuComponent,
    MinersComponent
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
