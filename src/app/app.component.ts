import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private categories=['SALES', 'INVENTORY', 'PURCHASE', 'CRM', 'REPORTS', 'AMC'];
}
