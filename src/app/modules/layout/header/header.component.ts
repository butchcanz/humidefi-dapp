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
    },
    {
      name: "Bootstrap 4",
      filePaths: [
        {
          category: "Blue",
          lightThemeFilePath: "./assets/themes/bootstrap4-light-blue/theme",
          darkThemeFilePath: "./assets/themes/bootstrap4-dark-blue/theme"
        },
        {
          category: "Purple",
          lightThemeFilePath: "./assets/themes/bootstrap4-light-purple/theme",
          darkThemeFilePath: "./assets/themes/bootstrap4-dark-purple/theme"
        },
      ]
    },
    {
      name: "Material",
      filePaths: [
        {
          category: "Indigo",
          lightThemeFilePath: "./assets/themes/md-light-indigo/theme",
          darkThemeFilePath: "./assets/themes/md-dark-indigo/theme"
        },
        {
          category: "Deep Purple",
          lightThemeFilePath: "./assets/themes/md-light-deeppurple/theme",
          darkThemeFilePath: "./assets/themes/md-dark-deeppurple/theme"
        },
      ]
    },
    {
      name: "Other Themes",
      filePaths: [
        {
          category: "Soho",
          lightThemeFilePath: "./assets/themes/soho-light/theme",
          darkThemeFilePath: "./assets/themes/soho-dark/theme"
        },
      ]
    },
  ];
  selectedPrimeNGThemeCategory: PrimeNGThemeCategory | undefined;
  isDarkTheme = true;
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
      },
      {
        label: 'Bootstrap 4',
        items: [
          {
            label: 'Blue',
            command: () => { this.selectTheme("Bootstrap 4", "Blue"); }
          },
          {
            label: 'Purple',
            command: () => { this.selectTheme("Bootstrap 4", "Purple"); }
          },
        ]
      },
      {
        label: 'Material',
        items: [
          {
            label: 'Indigo',
            command: () => { this.selectTheme("Material", "Indigo"); }
          },
          {
            label: 'Deep Purple',
            command: () => { this.selectTheme("Material", "Deep Purple"); }
          },
        ]
      },
      {
        label: 'Other Themes',
        items: [
          {
            label: 'Soho',
            command: () => { this.selectTheme("Other Themes", "Soho"); }
          },
        ]
      },
    ]

    this.selectTheme("Lara", "Pink");
  }
}
