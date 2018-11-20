import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Software Solutions';

  constructor(private authService:AuthService){}

  
  logout():boolean{
    this.authService.logout();
    return false;
  }
  


}
