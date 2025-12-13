import { Component, signal, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { TranslatePipe, TranslationManager } from '@basis-ng/primitives';

@Component({
  selector: 'cv-root',
  imports: [NgIcon, TranslatePipe],
  template: `
    <header
      class="flex gap-4 sticky top-0 left-0 w-full bg-neutral-50 dark:bg-neutral-950 z-10 py-5 border-b border-neutral-200 dark:border-neutral-800"
    >
      <img
        src="/images/profile.jpeg"
        class="h-27 w-27 rounded"
        alt="{{ 'alt.profile' | translate }}"
      />
      <div class="flex flex-col justify-between max-w-[calc(100vw-10.5rem)]">
        <h1 class="text-xl font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
          {{ 'header.name' | translate }}
        </h1>
        <span class="text-sm opacity-60 overflow-hidden text-ellipsis whitespace-nowrap">
          {{ 'header.role' | translate }}</span
        >
        <span class="text-sm opacity-60 overflow-hidden text-ellipsis whitespace-nowrap">
          {{ 'header.location' | translate }}
        </span>
        <a
          class="text-sm opacity-60 underline overflow-hidden text-ellipsis"
          href="mailto:{{ 'header.email' | translate }}"
        >
          {{ 'header.email' | translate }}
        </a>
        <a class="text-sm opacity-60 underline" href="tel:+34{{ 'header.phone' | translate }}">{{
          'header.phone' | translate
        }}</a>
      </div>
    </header>
    <main class="flex flex-col pb-40 w-full max-w-xl mx-auto gap-7 pt-7">
      <!-- Academic Background -->
      <section class="flex flex-col gap-2">
        <h1 class="text-lg font-semibold">{{ 'academic.title' | translate }}</h1>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <span>{{ 'academic.masters' | translate }}</span>
            <span class="text-sm opacity-60">{{ 'academic.masters_institution' | translate }}</span>
          </div>
          <div class="flex flex-col">
            <span>{{ 'academic.degree' | translate }}</span>
            <span class="text-sm opacity-60">{{ 'academic.degree_institution' | translate }}</span>
          </div>
        </div>
      </section>

      <!-- Professional Experience -->
      <section class="flex flex-col gap-2">
        <h1 class="text-lg font-semibold">{{ 'experience.title' | translate }}</h1>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <div
              class="flex justify-between items-center cursor-pointer"
              (click)="professionalExperienceOpen.set(professionalExperienceOpen() === 0 ? -1 : 0)"
            >
              <div class="flex flex-col">
                <span class="font-medium">{{ 'experience.senior_title' | translate }}</span>
                <span class="text-sm opacity-60">{{
                  'experience.senior_company' | translate
                }}</span>
              </div>
              <ng-icon
                [name]="
                  professionalExperienceOpen() === 0 ? 'lucideChevronUp' : 'lucideChevronDown'
                "
                size="22"
              />
            </div>

            @if (professionalExperienceOpen() === 0) {
            <div
              class="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800"
            >
              <div class="py-2">
                <span>{{ 'experience.tasks' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.senior_tasks' | translate }}
                </div>
              </div>

              <div class="py-2">
                <span>{{ 'experience.projects' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.senior_projects' | translate }}
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>{{ 'experience.methodologies' | translate }}</span>
                  <div class="text-sm opacity-60">
                    {{ 'experience.common_methods' | translate }}
                  </div>
                </div>
                <div class="p-2 pr-0">
                  <span>{{ 'experience.stack' | translate }}</span>
                  <div class="text-sm opacity-60">{{ 'experience.senior_stack' | translate }}</div>
                </div>
              </div>
            </div>
            }
          </div>
          <div class="flex flex-col gap-2">
            <div
              class="flex justify-between items-center cursor-pointer"
              (click)="professionalExperienceOpen.set(professionalExperienceOpen() === 1 ? -1 : 1)"
            >
              <div class="flex flex-col">
                <span class="font-medium">{{ 'experience.fullstack_title' | translate }}</span>
                <span class="text-sm opacity-60">{{
                  'experience.fullstack_company' | translate
                }}</span>
              </div>
              <ng-icon
                [name]="
                  professionalExperienceOpen() === 1 ? 'lucideChevronUp' : 'lucideChevronDown'
                "
                size="22"
              />
            </div>

            @if (professionalExperienceOpen() === 1) {
            <div
              class="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800"
            >
              <div class="py-2">
                <span>{{ 'experience.tasks' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.fullstack_tasks' | translate }}
                </div>
              </div>

              <div class="py-2">
                <span>{{ 'experience.projects' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.fullstack_projects' | translate }}
                </div>
                <div class="text-sm opacity-60">
                  {{ 'experience_extra.fullstack_seat_extra' | translate }}
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>{{ 'experience.methodologies' | translate }}</span>
                  <div class="text-sm opacity-60">
                    {{ 'experience.common_methods' | translate }}
                  </div>
                </div>
                <div class="p-2 pr-0">
                  <span>{{ 'experience.stack' | translate }}</span>
                  <div class="text-sm opacity-60">
                    {{ 'experience.fullstack_stack' | translate }}
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
          <div class="flex flex-col gap-2">
            <div
              class="flex justify-between items-center cursor-pointer"
              (click)="professionalExperienceOpen.set(professionalExperienceOpen() === 2 ? -1 : 2)"
            >
              <div class="flex flex-col">
                <span class="font-medium">{{ 'experience.frontend_title' | translate }}</span>
                <span class="text-sm opacity-60">{{
                  'experience.frontend_company' | translate
                }}</span>
              </div>
              <ng-icon
                [name]="
                  professionalExperienceOpen() === 2 ? 'lucideChevronUp' : 'lucideChevronDown'
                "
                size="22"
              />
            </div>

            @if (professionalExperienceOpen() === 2) {
            <div
              class="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800"
            >
              <div class="py-2">
                <span>{{ 'experience.tasks' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.fullstack_tasks' | translate }}
                </div>
              </div>

              <div class="py-2">
                <span>{{ 'experience.projects' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.frontend_projects' | translate }}
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>{{ 'experience.methodologies' | translate }}</span>
                  <div class="text-sm opacity-60">
                    {{ 'experience.common_methods' | translate }}
                  </div>
                </div>
                <div class="p-2 pr-0">
                  <span>{{ 'experience.stack' | translate }}</span>
                  <div class="text-sm opacity-60">
                    {{ 'experience.frontend_stack' | translate }}
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
          <div class="flex flex-col gap-2">
            <div
              class="flex justify-between items-center cursor-pointer"
              (click)="professionalExperienceOpen.set(professionalExperienceOpen() === 3 ? -1 : 3)"
            >
              <div class="flex flex-col">
                <span class="font-medium">{{ 'experience.freelance_title' | translate }}</span>
                <span class="text-sm opacity-60">{{
                  'experience.freelance_company' | translate
                }}</span>
              </div>
              <ng-icon
                [name]="
                  professionalExperienceOpen() === 3 ? 'lucideChevronUp' : 'lucideChevronDown'
                "
                size="22"
              />
            </div>

            @if (professionalExperienceOpen() === 3) {
            <div
              class="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800"
            >
              <div class="py-2">
                <span>{{ 'experience.tasks' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.fullstack_tasks' | translate }}
                </div>
              </div>

              <div class="py-2">
                <span>{{ 'experience.projects' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.freelance_projects' | translate }}
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>{{ 'experience.methodologies' | translate }}</span>
                  <div class="text-sm opacity-60">
                    {{ 'experience.common_methods' | translate }}
                  </div>
                </div>
                <div class="p-2 pr-0">
                  <span>{{ 'experience.stack' | translate }}</span>
                  <div class="text-sm opacity-60">
                    {{ 'experience.freelance_stack' | translate }}
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
          <div class="flex flex-col gap-2">
            <div
              class="flex justify-between items-center cursor-pointer"
              (click)="professionalExperienceOpen.set(professionalExperienceOpen() === 4 ? -1 : 4)"
            >
              <div class="flex flex-col">
                <span class="font-medium">{{ 'experience.trainee_title' | translate }}</span>
                <span class="text-sm opacity-60">{{
                  'experience.trainee_company' | translate
                }}</span>
              </div>
              <ng-icon
                [name]="
                  professionalExperienceOpen() === 4 ? 'lucideChevronUp' : 'lucideChevronDown'
                "
                size="22"
              />
            </div>

            @if (professionalExperienceOpen() === 4) {
            <div
              class="border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800"
            >
              <div class="py-2">
                <span>{{ 'experience.tasks' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.trainee_tasks' | translate }}
                </div>
              </div>

              <div class="py-2">
                <span>{{ 'experience.projects' | translate }}</span>
                <div class="text-sm opacity-60">
                  {{ 'experience.trainee_projects' | translate }}
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>{{ 'experience.methodologies' | translate }}</span>
                  <div class="text-sm opacity-60">
                    {{ 'experience.common_methods' | translate }}
                  </div>
                </div>
                <div class="p-2 pr-0">
                  <span>{{ 'experience.stack' | translate }}</span>
                  <div class="text-sm opacity-60">
                    {{ 'experience_extra.trainee_tools' | translate }}
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </section>

      <!-- Languages -->
      <section class="flex flex-col gap-2">
        <h1 class="text-lg font-semibold">{{ 'languages.title' | translate }}</h1>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <span>{{ 'languages.spanish' | translate }}</span>
            <span class="text-sm opacity-60">{{ 'languages.native' | translate }}</span>
          </div>
          <div class="flex flex-col">
            <span>{{ 'languages.catalan' | translate }}</span>
            <span class="text-sm opacity-60">{{ 'languages.native' | translate }}</span>
          </div>
          <div class="flex flex-col">
            <span>{{ 'languages.english' | translate }}</span>
            <span class="text-sm opacity-60">{{ 'languages.english_level' | translate }}</span>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="flex flex-col">
        <h1 class="text-lg font-semibold">{{ 'stack.title' | translate }}</h1>
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <div class="py-2">
            <span>{{ 'stack.frontend' | translate }}</span>
            <div class="text-sm opacity-60">{{ 'stack.frontend_list' | translate }}</div>
          </div>

          <div class="py-2">
            <span>{{ 'stack.backend' | translate }}</span>
            <div class="text-sm opacity-60">{{ 'stack.backend_list' | translate }}</div>
          </div>

          <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
            <div class="p-2 pl-0">
              <span>{{ 'stack.testing' | translate }}</span>
              <div class="text-sm opacity-60">{{ 'stack.testing_list' | translate }}</div>
            </div>
            <div class="p-2 pr-0">
              <span>{{ 'stack.devops' | translate }}</span>
              <div class="text-sm opacity-60">{{ 'stack.devops_list' | translate }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Last Public Projects -->
      <section class="flex flex-col gap-2">
        <h1 class="text-lg font-semibold">{{ 'projects.title' | translate }}</h1>
        <div class="flex flex-col gap-2">
          <a class="block" href="https://sunio.app" target="_blank" rel="noopener noreferrer">
            <div
              class="flex flex-col bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 py-2 px-4 rounded-lg transition-colors"
            >
              <div class="flex flex-col">
                <span class="font-medium">{{ 'projects.sunio.title' | translate }}</span>
                <span class="text-sm opacity-60 mt-1">{{ 'projects.sunio.desc' | translate }}</span>
              </div>
            </div>
          </a>
          <a class="block" href="https://basis.ng" target="_blank" rel="noopener noreferrer">
            <div
              class="flex flex-col bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 py-2 px-4 rounded-lg transition-colors"
            >
              <div class="flex flex-col">
                <span class="font-medium">{{ 'projects.basis.title' | translate }}</span>
                <span class="text-sm opacity-60 mt-1">{{ 'projects.basis.desc' | translate }}</span>
              </div>
            </div>
          </a>
          <a
            class="block"
            href="https://aheadcareers.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="flex flex-col bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 py-2 px-4 rounded-lg transition-colors"
            >
              <div class="flex flex-col">
                <span class="font-medium">{{ 'projects.ahead.title' | translate }}</span>
                <span class="text-sm opacity-60 mt-1">{{ 'projects.ahead.desc' | translate }}</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </main>
    <footer
      class="sticky bottom-0 flex items-center justify-between w-full bg-neutral-50 dark:bg-neutral-950 z-10 py-5 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div
        class="flex"
        (mouseenter)="hoveringLang.set(true)"
        (mouseleave)="hoveringLang.set(false)"
      >
        <button
          class="px-3 text-sm bg-neutral-200 dark:bg-neutral-900 text-center py-2 rounded-l-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
          (click)="setLanguage('en')"
          [class]="
            !hoveringLang() && translationManager.language() === 'en'
              ? 'bg-neutral-300 dark:bg-neutral-700'
              : ''
          "
          [attr.aria-label]="'aria.lang_en' | translate"
        >
          EN
        </button>
        <button
          class="px-3 text-sm text-center bg-neutral-200 dark:bg-neutral-900 py-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
          (click)="setLanguage('es')"
          [class]="
            !hoveringLang() && translationManager.language() === 'es'
              ? 'bg-neutral-300 dark:bg-neutral-700'
              : ''
          "
          [attr.aria-label]="'aria.lang_es' | translate"
        >
          ES
        </button>
        <button
          class="px-3 text-sm text-center bg-neutral-200 dark:bg-neutral-900 py-2 rounded-r-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
          (click)="setLanguage('ca')"
          [class]="
            !hoveringLang() && translationManager.language() === 'ca'
              ? 'bg-neutral-300 dark:bg-neutral-700'
              : ''
          "
          [attr.aria-label]="'aria.lang_ca' | translate"
        >
          CA
        </button>
      </div>

      <a
        class="px-4 text-sm bg-neutral-200 dark:bg-neutral-800 text-center py-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
        href="/pdf/Marc%20Olmos%20Cabezas%20-%20CV.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        [attr.aria-label]="'aria.download' | translate"
      >
        {{ 'footer.download' | translate }}
      </a>
    </footer>
  `,
  host: {
    class: 'flex flex-col justify-center',
  },
  providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
})
export class App {
  professionalExperienceOpen = signal(-1);
  translationManager = inject(TranslationManager);
  hoveringLang = signal(false);

  setLanguage(lang: string) {
    this.translationManager.setLanguage(lang);
  }
}
