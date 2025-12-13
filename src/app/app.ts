import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';

@Component({
  selector: 'cv-root',
  imports: [NgIcon],
  template: `
    <header
      class="flex gap-4 sticky top-0 left-0 w-full bg-neutral-50 dark:bg-neutral-950 z-10 py-5 border-b border-neutral-200 dark:border-neutral-800"
    >
      <img src="/images/profile.jpeg" class="h-27 w-27 rounded" alt="Profile picture" />
      <div class="flex flex-col justify-between max-w-[calc(100vw-10.5rem)]">
        <h1 class="text-xl font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
          Marc Olmos Cabezas
        </h1>
        <span class="text-sm opacity-60 overflow-hidden text-ellipsis whitespace-nowrap">
          Senior Frontend Developer</span
        >
        <span class="text-sm opacity-60 overflow-hidden text-ellipsis whitespace-nowrap">
          Mollet del Vallés, Barcelona
        </span>
        <a
          class="text-sm opacity-60 underline overflow-hidden text-ellipsis"
          href="mailto:olmoscabezasmarc@gmail.com"
        >
          olmoscabezasmarc@gmail.com
        </a>
        <a class="text-sm opacity-60 underline" href="tel:+34606872046">606872046</a>
      </div>
    </header>
    <main class="flex flex-col pb-40 w-full max-w-xl mx-auto gap-7 pt-7">
      <!-- Academic Background -->
      <section class="flex flex-col gap-2">
        <h1 class="text-lg font-semibold sticky bg-neutral-50 dark:bg-neutral-950 z-9">
          Academic Background
        </h1>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <span>Master in High Performance Web Programming</span>
            <span class="text-sm opacity-60">URL (2020 - 2022)</span>
          </div>
          <div class="flex flex-col">
            <span>Degree in Business and Technology</span>
            <span class="text-sm opacity-60">UAB (2016 - 2020)</span>
          </div>
        </div>
      </section>

      <!-- Professional Experience -->
      <section class="flex flex-col gap-2">
        <h1 class="text-lg font-semibold sticky bg-neutral-50 dark:bg-neutral-950 z-9">
          Professional Experience
        </h1>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <div
              class="flex justify-between items-center cursor-pointer"
              (click)="professionalExperienceOpen.set(professionalExperienceOpen() === 0 ? -1 : 0)"
            >
              <div class="flex flex-col">
                <span class="font-medium">Senior Frontend Developer</span>
                <span class="text-sm opacity-60">Circontrol (05/2023 - now)</span>
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
                <span>Tasks</span>
                <div class="text-sm opacity-60">
                  Conduct technical analysis and provide accurate effort estimations. Define
                  architecture improvements focused on scalability and maintainability, establish
                  team-wide best practices, and introduce automated linting and formatting workflows
                  using ESLint and Prettier. Manage progressive Angular upgrades from v17 through
                  v20, coordinating updates to LTS releases.
                </div>
              </div>

              <div class="py-2">
                <span>Projects</span>
                <div class="text-sm opacity-60">
                  Contributed to internal initiatives including: WebSetup — a web dashboard for
                  configuring EV chargers; a touch-screen web application deployed on company
                  chargers to manage user charging workflows; a middleware service integrating the
                  backend with charger UI applications; and a Circutor migration project to replace
                  SCADA with a Grafana-based web solution for charger data management.
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>Methodologies</span>
                  <div class="text-sm opacity-60">Agile, Scrum</div>
                </div>
                <div class="p-2 pr-0">
                  <span>Stack</span>
                  <div class="text-sm opacity-60">
                    Angular (up to v20 LTS), RxJS, Signals, NestJS, ESLint, Prettier, HTML5, CSS3,
                    JavaScript, TypeScript, PrimeNG, Git, Jest
                  </div>
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
                <span class="font-medium">Fullstack Developer</span>
                <span class="text-sm opacity-60">Deloitte (11/2021 - 05/2023)</span>
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
                <span>Tasks</span>
                <div class="text-sm opacity-60">
                  Hold client meetings, Create and maintain Angular projects, Technical analysis,
                  Development time estimation, Testing
                </div>
              </div>

              <div class="py-2">
                <span>Projects</span>
                <div class="text-sm opacity-60">
                  OVT (Virtual Procedures Office) for Barcelona City Council
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>Methodologies</span>
                  <div class="text-sm opacity-60">Agile, Scrum</div>
                </div>
                <div class="p-2 pr-0">
                  <span>Stack</span>
                  <div class="text-sm opacity-60">
                    Angular, HTML5, CSS3, JavaScript, TypeScript, Material, Bootstrap, Java, Spring
                    Boot, SQL, GSAP
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
                <span class="font-medium">Frontend Developer</span>
                <span class="text-sm opacity-60">Fun Sport Express SL (03/2021 - 10/2021)</span>
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
                <span>Tasks</span>
                <div class="text-sm opacity-60">
                  Hold client meetings, Create and maintain Angular projects, Technical analysis,
                  Development time estimation, Testing
                </div>
              </div>

              <div class="py-2">
                <span>Projects</span>
                <div class="text-sm opacity-60">
                  Internal Angular application for product stock management, Full redesign of one of
                  the company's websites
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>Methodologies</span>
                  <div class="text-sm opacity-60">Agile, Scrum</div>
                </div>
                <div class="p-2 pr-0">
                  <span>Stack</span>
                  <div class="text-sm opacity-60">
                    Angular, HTML5, CSS3, JavaScript, TypeScript, Material, Jira, GSAP
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
                <span class="font-medium">Freelance Front-End Developer</span>
                <span class="text-sm opacity-60">Freelance (05/2020 - 10/2021)</span>
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
                <span>Tasks</span>
                <div class="text-sm opacity-60">
                  Hold client meetings, Create and maintain Angular projects, Technical analysis,
                  Development time estimation, Testing
                </div>
              </div>

              <div class="py-2">
                <span>Projects</span>
                <div class="text-sm opacity-60">
                  Ahead Careers — Public marketing website to showcase company services and an
                  internal job dashboard to publish job offers and allow users to apply. Implemented
                  with Angular and Sanity.
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>Methodologies</span>
                  <div class="text-sm opacity-60">Agile, Scrum</div>
                </div>
                <div class="p-2 pr-0">
                  <span>Stack</span>
                  <div class="text-sm opacity-60">
                    Angular, Sanity, HTML5, CSS3, JavaScript, TypeScript, Bootstrap, GSAP
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
                <span class="font-medium">IT Risk Advisory Assistant (Trainee)</span>
                <span class="text-sm opacity-60">Deloitte (12/2019 - 04/2020)</span>
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
                <span>Tasks</span>
                <div class="text-sm opacity-60">
                  Technological risks analysis, Hold client meetings, Prepare PowerPoint
                  presentations, Create Excel documents with macros
                </div>
              </div>

              <div class="py-2">
                <span>Projects</span>
                <div class="text-sm opacity-60">
                  Analysis of Banco Sabadell's main technological risks
                </div>
              </div>

              <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div class="p-2 pl-0">
                  <span>Methodologies</span>
                  <div class="text-sm opacity-60">Agile, Scrum</div>
                </div>
                <div class="p-2 pr-0">
                  <span>Stack</span>
                  <div class="text-sm opacity-60">Excel, PowerPoint</div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </section>

      <!-- Languages -->
      <section class="flex flex-col gap-2">
        <h1 class="text-lg font-semibold sticky bg-neutral-50 dark:bg-neutral-950 z-9">
          Languages
        </h1>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <span>Spanish</span>
            <span class="text-sm opacity-60">Native</span>
          </div>
          <div class="flex flex-col">
            <span>Catalan</span>
            <span class="text-sm opacity-60">Native</span>
          </div>
          <div class="flex flex-col">
            <span>English</span>
            <span class="text-sm opacity-60">C1 (Cambridge English Advanced)</span>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="flex flex-col">
        <h1 class="text-lg font-semibold sticky bg-neutral-50 dark:bg-neutral-950 z-9">Stack</h1>
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <div class="py-2">
            <span>Frontend</span>
            <div class="text-sm opacity-60">
              Angular (up to v20 LTS), RxJS, Signals, PrimeNG, HTML5, CSS3, JavaScript, TypeScript
            </div>
          </div>

          <div class="py-2">
            <span>Backend / Tools</span>
            <div class="text-sm opacity-60">
              NestJS, Node.js, Express, Hono, SQL, Git, ESLint, Prettier
            </div>
          </div>

          <div class="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
            <div class="p-2 pl-0">
              <span>Testing / QA</span>
              <div class="text-sm opacity-60">Jest, Playwright</div>
            </div>
            <div class="p-2 pr-0">
              <span>DevOps / Monitoring</span>
              <div class="text-sm opacity-60">Docker, CI/CD, Grafana</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  host: {
    class: 'flex flex-col justify-center',
  },
  providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
})
export class App {
  professionalExperienceOpen = signal(-1);
}
