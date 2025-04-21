import { Component } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "App",
	standalone: true,
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	imports: [RouterOutlet, MatSlideToggleModule],
})
export class AppComponent {}
