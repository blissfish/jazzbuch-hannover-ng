import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { Box1Component } from "./box1/box1.component";
import { Box2Component } from "./box2/box2.component";
import { ZeitreiseComponent } from "./zeitreise/zeitreise.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Box1Component,
    Box2Component,
    ZeitreiseComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
