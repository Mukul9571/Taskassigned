import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EvaluateComponent } from './evaluate/evaluate.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,FooterComponent,EvaluateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EvaluatorVD';
}
