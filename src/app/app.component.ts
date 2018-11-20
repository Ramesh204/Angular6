import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Page';

  constructor(private authService:AuthService){}

  
  logout():boolean{
    this.authService.logout();
    return false;
  }
  


}
