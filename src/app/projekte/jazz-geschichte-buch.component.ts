import { Component } from "@angular/core";

@Component({
  selector: "jazzgeschichte",
  templateUrl: "./jazz-geschichte-buch.component.html",
  styleUrls: ["./projekte.component.css"]
})
export class JazzGeschichteComponent {
  title = "Hannover - Ein Stück Jazzgeschichte";
  sub =
    "Ein Streifzug durch die hannoversche Jazz-Szene der 40er- bis 60er-Jahre.";
  image = "image062.jpg";
  imgpath = "http://images.jazzbuch-hannover.de/";
}
