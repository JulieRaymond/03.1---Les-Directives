import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-switch.component.html',
  styleUrl: './admin-switch.component.scss'
})
export class AdminSwitchComponent {
  isAdmin: boolean = false;

  toggleAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
