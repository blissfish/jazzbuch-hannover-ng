import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { Box1Component } from "./box1/box1.component";
import { ZeitreiseComponent } from "./zeitreise/zeitreise.component";
import { LinksComponent } from "./links/links.component";
import { HeaderComponent } from "./header/header.component";
import { Galerie01Component } from "./galerie/galerie01.component";
import { Galerie02Component } from "./galerie/galerie02.component";
import { Galerie03Component } from "./galerie/galerie03.component";
import { AtillaZollerComponent } from "./projekte/atilla-zoller.component";
import { HeinzBothComponent } from "./projekte/heinz-both.component";
import { NSJFComponent } from "./projekte/nsjf.component";
import { GudrunBeckerComponent } from "./projekte/gudrun-becker.component";
import { JuttaHippComponent } from "./projekte/jutta-hipp.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Box1Component,
    AtillaZollerComponent,
    ZeitreiseComponent,
    LinksComponent,
    Galerie01Component,
    Galerie02Component,
    Galerie03Component,
    AtillaZollerComponent,
    HeinzBothComponent,
    GudrunBeckerComponent,
    JuttaHippComponent,
    NSJFComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
