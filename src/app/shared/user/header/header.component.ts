import { CommonModule, isPlatformBrowser } from '@angular/common';
import { afterNextRender, AfterRenderPhase, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHomePage = false;
  isMenuOpen = false;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      afterNextRender(() => this.initClientRouting(), { phase: AfterRenderPhase.Write });
    }
  }

  initClientRouting() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.isHomePage = this.router.url === '/';
        this.cdr.detectChanges();
      });
    this.isHomePage = this.router.url === '/';
    this.cdr.detectChanges();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
