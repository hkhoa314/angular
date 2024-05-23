import { Component } from '@angular/core';
import { DetailComponent } from '../../pages/admin/products/detail/detail.component';

@Component({
  selector: 'app-clientlayout',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './clientlayout.component.html',
  styleUrl: './clientlayout.component.css'
})
export class ClientlayoutComponent {

}
