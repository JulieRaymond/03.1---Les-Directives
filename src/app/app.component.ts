import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminSwitchComponent } from "./admin-switch/admin-switch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, AdminSwitchComponent]
})
export class AppComponent {
  title = 'myFristDirectives';
}
