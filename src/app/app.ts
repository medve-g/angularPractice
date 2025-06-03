import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogInPage } from './pages/log-in-page/log-in-page';
import { AuthService } from './services/auth-service';
import { LoadingService } from './services/loading-service';
import { LoadingAnimation } from './components/loading-animation/loading-animation';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbModule,LogInPage,LoadingAnimation, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /**
   *
   */
  constructor(public authService:AuthService,public loadingService:LoadingService) {
  
    
  }
  protected title = 'gyak';
}
