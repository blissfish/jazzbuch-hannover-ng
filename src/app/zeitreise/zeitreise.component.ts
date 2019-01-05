import { Component } from "@angular/core";

@Component({
  selector: "zeitreise",
  templateUrl: "./zeitreise.component.html",
  styleUrls: ["./zeitreise.component.css"]
})
export class ZeitreiseComponent {
  title = "Eine Zeitreise ...";
  sub =
    "Erlebnisse meiner Zeit als Musiker und zu jazzhistorischen Projekte ab 1997.";
  imgpath = "http://images.jazzbuch-hannover.de/";
}
