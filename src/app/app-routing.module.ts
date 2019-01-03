import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { KontaktComponent } from "./kontakt/kontakt.component";
import { ZeitreiseComponent } from "./zeitreise/zeitreise.component";
import { NjghComponent } from "./njgh/njgh.component";
import { LinksComponent } from "./links/links.component";
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

const routes: Routes = [
  { path: "", redirectTo: "/zeitreise", pathMatch: "full" },
  { path: "kontakt", component: KontaktComponent },
  { path: "zeitreise", component: ZeitreiseComponent },
  { path: "njgh", component: NjghComponent },
  { path: "galerie01", component: Galerie01Component },
  { path: "galerie02", component: Galerie02Component },
  { path: "galerie03", component: Galerie03Component },
  { path: "atillazoller", component: AtillaZollerComponent },
  { path: "heinzboth", component: HeinzBothComponent },
  { path: "nsjf", component: NSJFComponent },
  { path: "gudrunbecker", component: GudrunBeckerComponent },
  { path: "juttahipp", component: JuttaHippComponent },
  { path: "jazzgeschichte", component: JazzGeschichteComponent },
  { path: "jazzgeschichte-cd", component: JazzGeschichteCDComponent },
  { path: "allthatjazz", component: AllThatJazzComponent },
  { path: "links", component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
