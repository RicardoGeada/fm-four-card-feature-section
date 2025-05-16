import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { CardComponent } from "../../shared/components/card/card.component";

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
