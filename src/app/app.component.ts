import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelQouteComponent } from './panel-qoute/panel-qoute.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PanelQouteComponent,
    HttpClientModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qoute-randomizer';
}
