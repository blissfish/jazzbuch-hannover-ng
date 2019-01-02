import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Box1Component } from "./box1/box1.component";
import { ZeitreiseComponent } from "./zeitreise/zeitreise.component";
import { LinksComponent } from "./links/links.component";
import { Galerie01Component } from "./galerie/galerie01.component";
import { Galerie02Component } from "./galerie/galerie02.component";
import { Galerie03Component } from "./galerie/galerie03.component";
import { AtillaZollerComponent } from "./projekte/atilla-zoller.component";
import { HeinzBothComponent } from "./projekte/heinz-both.component";

const routes: Routes = [
  { path: "", redirectTo: "/zeitreise", pathMatch: "full" },
  { path: "box1", component: Box1Component },
  { path: "zeitreise", component: ZeitreiseComponent },
  { path: "galerie01", component: Galerie01Component },
  { path: "galerie02", component: Galerie02Component },
  { path: "galerie03", component: Galerie03Component },
  { path: "atillazoller", component: AtillaZollerComponent },
  { path: "heinzboth", component: HeinzBothComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
