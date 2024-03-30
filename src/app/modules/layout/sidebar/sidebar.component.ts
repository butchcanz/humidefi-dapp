import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isCollapsed: boolean = false;

  items: MenuItem[] = [
    // {
    //   label: 'Portfolio',
    //   icon: 'pi pi-fw pi-briefcase',
    //   routerLink: '/app/portfolio'
    // },
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      routerLink: '/app/dashboard'
    },
    {
      label: 'Liquidity',
      icon: 'pi pi-fw pi-database',
      routerLink: '/app/liquidity'
    },
    {
      label: 'Swap',
      icon: 'pi pi-fw pi-arrow-right-arrow-left',
      routerLink: '/app/swap'
    },
    {
      label: 'Transfer',
      icon: 'pi pi-fw pi-reply',
      routerLink: '/app/transfer'
    },
  ];

  ngOnInit() {

  }
}
