import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public router: Router
  ) {}

  ngAfterViewInit() {
    // this is hack, because otherwise content still not available
    // TODO: think of a better solution
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        //this.navigation.scrollToFragmentAfterViewInit();
      }, 10);
    }
    const navEndEvent$ = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        if (isPlatformBrowser(this.platformId)) {
          // custom tracking might go here,
          // currently all tracking enabled through google analytics
          // including full stroy
        }
      });
  }
}
