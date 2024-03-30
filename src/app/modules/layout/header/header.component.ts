import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme/theme.service';

interface PrimeNGThemeCategory {
  category: string,
  lightThemeFilePath: string;
  darkThemeFilePath: string;
}

interface PrimeNGThemes {
  name: string;
  filePaths: PrimeNGThemeCategory[]
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) { }

  headerMenuItems: MenuItem[] | undefined;
  networkMenuItems: MenuItem[] | undefined;
  themeMenuItems: MenuItem[] | undefined;

  walletName = localStorage.getItem("wallet-meta-name") || "";
  address = localStorage.getItem("wallet-address") || "";
  keypair = localStorage.getItem("wallet-keypair") || "";

  isSidebarCollapsed = false;
  showWalletModal: boolean = false;

  primeNGThemes: PrimeNGThemes[] = [
    {
      name: "Lara",
      filePaths: [
        {
          category: "Pink",
          lightThemeFilePath: "./assets/themes/lara-light-pink/theme",
          darkThemeFilePath: "./assets/themes/lara-dark-pink/theme"
        },
        {
          category: "Amber",
          lightThemeFilePath: "./assets/themes/lara-light-amber/theme",
          darkThemeFilePath: "./assets/themes/lara-dark-amber/theme"
        },
        {
          category: "Blue",
          lightThemeFilePath: "./assets/themes/lara-light-blue/theme",
          darkThemeFilePath: "./assets/themes/lara-dark-blue/theme"
        },
        {
          category: "Cyan",
          lightThemeFilePath: "./assets/themes/lara-light-cyan/theme",
          darkThemeFilePath: "./assets/themes/lara-dark-cyan/theme"
        },
      ]
    }
  ];
  selectedPrimeNGThemeCategory: PrimeNGThemeCategory | undefined;
  isDarkTheme = false;
  iconDarkOrLightSelection = "pi pi-moon"

  public toggleSidebarOnclick(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.toggleSidebar.emit(this.isSidebarCollapsed);
  }

  public openWalletModal(): void {
    this.showWalletModal = true;
  }

  public changeDarkOrLight(): void {
    if (this.isDarkTheme == true) {
      this.isDarkTheme = false;
      this.iconDarkOrLightSelection = "pi pi-sun";
    } else {
      this.isDarkTheme = true;
      this.iconDarkOrLightSelection = "pi pi-moon";
    }

    this.changeTheme();
  }

  public changeTheme(): void {
    if (this.selectedPrimeNGThemeCategory != null || this.selectedPrimeNGThemeCategory != undefined) {
      if (this.isDarkTheme == true) {
        this.themeService.switchTheme(this.selectedPrimeNGThemeCategory.darkThemeFilePath);
      } else {
        this.themeService.switchTheme(this.selectedPrimeNGThemeCategory.lightThemeFilePath);
      }
    }
  }

  public selectTheme(name: string, category: string): void {
    this.selectedPrimeNGThemeCategory = this.primeNGThemes.filter(d => d.name == name)[0].filePaths
      .filter(d => d.category == category)[0];

    this.changeTheme();
  }

  ngOnInit() {
    this.networkMenuItems = [
      {
        label: 'Development'
      },
      {
        label: 'Test Net'
      },
      {
        label: 'Main Net'
      }
    ];

    this.themeMenuItems = [
      {
        label: 'Lara',
        items: [
          {
            label: 'Pink',
            command: () => { this.selectTheme("Lara", "Pink"); }
          },
          {
            label: 'Amber',
            command: () => { this.selectTheme("Lara", "Amber"); }
          },
          {
            label: 'Blue',
            command: () => { this.selectTheme("Lara", "Blue"); }
          },
          {
            label: 'Cyan',
            command: () => { this.selectTheme("Lara", "Cyan"); }
          },
        ]
      }
    ]

    this.selectTheme("Lara", "Pink");
  }
}
