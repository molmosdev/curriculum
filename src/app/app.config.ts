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
    provideAppInitializer(() => {
      if (typeof window === 'undefined') {
        return;
      }

      return inject(TranslationManager).setLanguage('ca');
    }),
  ],
};
