import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, PrincipalComponent, NavbarComponent, MenuComponent]
})
export class AppComponent {
  title = 'FrontEnd1';
}
