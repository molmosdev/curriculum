import { Component, signal } from '@angular/core';

@Component({
  selector: 'cv-root',
  imports: [],
  template: `
    <header
      class="flex gap-4 sticky top-0 left-0 w-full bg-neutral-50 dark:bg-neutral-950 z-10 py-5 border-b border-neutral-200 dark:border-neutral-800"
    >
      <img src="/images/profile.jpeg" class="h-25 w-25 rounded" alt="Profile picture" />
      <div class="flex flex-col justify-between max-w-[calc(100vw-10.5rem)]">
        <h1 class="text-2xl font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
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
    <main class="flex flex-col pb-40 max-w-3xl mx-auto gap-7 pt-7">
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
          <div class="flex flex-col">
            <span>Senior Frontend Developer</span>
            <span class="text-sm opacity-60">Circontrol (05/2023 - now)</span>
          </div>
          <div class="flex flex-col">
            <span>Fullstack Developer</span>
            <span class="text-sm opacity-60">Deloitte (11/2021 - 05/2023)</span>
          </div>
          <div class="flex flex-col">
            <span>Frontend Developer</span>
            <span class="text-sm opacity-60">Fun Sport Express SL (03/2021 - 10/2021)</span>
          </div>
          <div class="flex flex-col">
            <span>Freelance Front-End Developer</span>
            <span class="text-sm opacity-60">Autónomo (05/2020 - 10/2021)</span>
          </div>
          <div class="flex flex-col">
            <span>IT Risk Advisory Assistant (Trainee)</span>
            <span class="text-sm opacity-60">Deloitte (12/2019 - 04/2020)</span>
          </div>
        </div>
      </section>

      <!-- Certificates -->
      <section class="flex flex-col gap-2">
        <h1 class="text-lg font-semibold sticky bg-neutral-50 dark:bg-neutral-950 z-9">
          Certificates
        </h1>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <span>Cambridge English Level 2 Certificate in ESOL International</span>
            <span class="text-sm opacity-60">Cambridge English (2020)</span>
          </div>
          <div class="flex flex-col">
            <span>Introduction to Meteor.js Development</span>
            <span class="text-sm opacity-60">University of London (2020)</span>
          </div>
          <div class="flex flex-col">
            <span>Responsive Web Design</span>
            <span class="text-sm opacity-60">University of London (2020)</span>
          </div>
          <div class="flex flex-col">
            <span>Responsive Website Basics: Code with HTML, CSS and JavaScript</span>
            <span class="text-sm opacity-60">University of London (Coursera) (2020)</span>
          </div>
          <div class="flex flex-col">
            <span>Web Application Development with JavaScript and MongoDB</span>
            <span class="text-sm opacity-60">University of London (2020)</span>
          </div>
          <div class="flex flex-col">
            <span>Introducción a la programación en Python I</span>
            <span class="text-sm opacity-60">Pontificia Universidad Católica de Chile (2019)</span>
          </div>
          <div class="flex flex-col">
            <span>Curso de Desarrollo de Apps Móviles</span>
            <span class="text-sm opacity-60">Google Actívate (2018)</span>
          </div>
          <div class="flex flex-col">
            <span>Curso de Marketing Digital</span>
            <span class="text-sm opacity-60">Google Actívate (2018)</span>
          </div>
          <div class="flex flex-col">
            <span>Cambridge English Level 1 Certificate in ESOL International</span>
            <span class="text-sm opacity-60">Cambridge English (2015)</span>
          </div>
        </div>
      </section>
    </main>
  `,
  host: {
    class: 'flex flex-col justify-center',
  },
})
export class App {}
