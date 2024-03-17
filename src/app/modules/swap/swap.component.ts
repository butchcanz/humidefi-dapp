import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrl: './swap.component.scss'
})
export class SwapComponent {
  breadcrumbHome: MenuItem | undefined;
  breadcrumbItems: MenuItem[] | undefined;

  ngOnInit() {
    this.breadcrumbHome = { icon: 'pi pi-home', routerLink: '/app/dashboard' };
    this.breadcrumbItems = [
      { label: 'Portfolio' },
      { label: 'Swap' }
    ];
  }
}
