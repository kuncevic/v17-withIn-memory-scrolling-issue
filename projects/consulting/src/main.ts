import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { register } from 'swiper/element/bundle';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

import '@shoelace-style/shoelace/dist/components/tab/tab';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel';
import '@shoelace-style/shoelace/dist/components/details/details';
import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/option/option';

import 'hammerjs';

import { appConfig } from './app/app.config';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  register();
  setBasePath(
    'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/'
  );

  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
});
