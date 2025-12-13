import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { TranslationManager } from '@basis-ng/primitives';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideAppInitializer(() => inject(TranslationManager).setLanguage('en')),
  ],
};
