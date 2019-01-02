import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Box1Component } from "./box1/box1.component";
import { Box2Component } from "./box2/box2.component";
import { ZeitreiseComponent } from "./zeitreise/zeitreise.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "box1", component: Box1Component },
  { path: "box2", component: Box2Component },
  { path: "zeitreise", component: ZeitreiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
