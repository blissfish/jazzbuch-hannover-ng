import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { KontaktComponent } from "./kontakt/kontakt.component";

import { ZeitreiseComponent } from "./zeitreise/zeitreise.component";
import { NjghComponent } from "./njgh/njgh.component";
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
import { AllThatJazzComponent } from "./projekte/allthatjazz.component";
import { JazzGeschichteComponent } from "./projekte/jazz-geschichte-buch.component";
import { JazzGeschichteCDComponent } from "./projekte/jazz-geschichte-cd.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KontaktComponent,
    AtillaZollerComponent,
    ZeitreiseComponent,
    NjghComponent,
    LinksComponent,
    Galerie01Component,
    Galerie02Component,
    Galerie03Component,
    AtillaZollerComponent,
    HeinzBothComponent,
    GudrunBeckerComponent,
    JuttaHippComponent,
    AllThatJazzComponent,
    JazzGeschichteComponent,
    JazzGeschichteCDComponent,
    NSJFComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule {}
