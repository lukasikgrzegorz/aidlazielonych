# Plan Aplikacji - AI DLA ZIELONYCH

## 1. Architektura techniczna

### Stack technologiczny
- **Framework**: Astro 4.x (zgodnie z instrukcjami Copilot)
- **Styling**: Tailwind CSS (zgodnie z instrukcjami)
- **Dostępność**: ARIA landmarks i semantyczny HTML
- **Generowanie PDF**: jsPDF lub Puppeteer (server-side generation)
- **Markdown**: Astro's built-in markdown support + remark/rehype plugins
- **TypeScript**: Pełne wsparcie dla type safety
- **Deployment**: CDN-ready (Netlify/Vercel/CloudFlare Pages)

### Kluczowe założenia architektoniczne
- **Clean Architecture** - separacja warstw zgodnie z instrukcjami
- **Zero dependencies na outer layers** w logice biznesowej
- **Static Generation** - w pełni statyczna aplikacja
- **Zero tracking** - brak cookies, localStorage, session storage

## 2. Struktura folderów

```
src/
├── components/           # Komponenty Astro + React (tylko gdy interaktywność)
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   └── Layout.astro
│   ├── lesson/
│   │   ├── LessonCard.astro
│   │   ├── LessonNavigation.astro
│   │   └── LessonContent.astro
│   ├── quiz/
│   │   ├── QuizContainer.tsx    # React - interaktywność
│   │   ├── QuestionCard.tsx     # React - interaktywność
│   │   └── ResultDisplay.tsx    # React - interaktywność
│   ├── certificate/
│   │   ├── CertificateForm.tsx  # React - formularz
│   │   └── CertificatePreview.astro
│   └── ui/
│       ├── Button.astro
│       ├── Card.astro
│       └── Badge.astro
├── content/              # Astro Content Collections
│   ├── config.ts         # Content collections schema
│   ├── lessons/
│   │   ├── 01-wprowadzenie-do-ai.md
│   │   ├── 02-historia-sztucznej-inteligencji.md
│   │   ├── 03-rodzaje-ai.md
│   │   ├── 04-ml-vs-ai.md
│   │   ├── 05-llm-i-chat-gpt.md
│   │   ├── 06-etyka-ai.md
│   │   └── 07-przyszlosc-ai.md
│   └── quiz/
│       └── final-quiz.json      # Pytania do testu końcowego
├── domain/               # Clean Architecture - Domain Layer
│   ├── entities/
│   │   ├── Lesson.ts
│   │   ├── Quiz.ts
│   │   ├── Question.ts
│   │   ├── Answer.ts
│   │   └── Certificate.ts
│   ├── usecases/
│   │   ├── GetLessons.ts
│   │   ├── EvaluateQuiz.ts
│   │   └── GenerateCertificate.ts
│   └── repositories/
│       ├── LessonRepository.ts  # Interface
│       └── QuizRepository.ts    # Interface
├── infrastructure/      # Clean Architecture - Infrastructure Layer
│   ├── repositories/
│   │   ├── StaticLessonRepository.ts
│   │   └── StaticQuizRepository.ts
│   ├── services/
│   │   ├── PDFGenerator.ts
│   │   └── ContentParser.ts
│   └── adapters/
│       └── AstroContentAdapter.ts
├── pages/               # Astro Pages
│   ├── index.astro      # Strona główna
│   ├── lessons/
│   │   ├── index.astro  # Lista lekcji
│   │   └── [slug].astro # Dynamiczne strony lekcji
│   ├── quiz/
│   │   └── index.astro  # Test końcowy
│   └── api/             # Server Endpoints
│       ├── generate-certificate.ts  # PDF generation
│       └── quiz-result.ts           # Quiz evaluation
├── styles/              # Global styles
│   ├── base.css         # @layer base
│   ├── components.css   # @layer components
│   └── utilities.css    # @layer utilities
└── utils/               # Utilities
    ├── constants.ts
    ├── types.ts
    └── validators.ts

public/
├── images/
│   ├── lessons/         # Obrazki do lekcji
│   ├── certificate-template.png
│   └── logo.svg
├── icons/
└── fonts/

astro.config.mjs         # Konfiguracja Astro
tailwind.config.mjs      # Konfiguracja Tailwind
tsconfig.json           # TypeScript config
package.json
```

## 3. Biblioteki i dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "astro": "^4.15.0",
    "@astrojs/react": "^3.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "@astrojs/typescript": "^1.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.4.0"
  }
}
```

### PDF Generation
```json
{
  "dependencies": {
    "jspdf": "^2.5.1",
    "@types/jspdf": "^2.3.0"
  }
}
```

### Content Processing
```json
{
  "dependencies": {
    "@astrojs/markdown-remark": "^3.0.0",
    "remark-gfm": "^3.0.1",
    "rehype-pretty-code": "^0.10.0",
    "shiki": "^0.14.0"
  }
}
```

### Development Dependencies
```json
{
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.45.0",
    "eslint-plugin-astro": "^0.28.0",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "prettier": "^3.0.0",
    "prettier-plugin-astro": "^0.11.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

## 4. Domain Entities (Clean Architecture)

### Lesson Entity
```typescript
export class Lesson {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly slug: string,
    public readonly content: string,
    public readonly order: number,
    public readonly estimatedReadingTime: number
  ) {}
}
```

### Quiz Entity
```typescript
export class Quiz {
  constructor(
    public readonly id: string,
    public readonly questions: Question[],
    public readonly passingScore: number = 100
  ) {}

  evaluate(answers: Answer[]): QuizResult {
    // Business logic for quiz evaluation
  }
}
```

### Certificate Entity
```typescript
export class Certificate {
  constructor(
    public readonly studentName: string,
    public readonly courseName: string,
    public readonly completionDate: Date,
    public readonly courseContent: string[]
  ) {}
}
```

## 5. Use Cases

### GetLessons Use Case
```typescript
export class GetLessons {
  constructor(private lessonRepository: LessonRepository) {}

  async execute(): Promise<Lesson[]> {
    return await this.lessonRepository.findAll();
  }
}
```

### EvaluateQuiz Use Case
```typescript
export class EvaluateQuiz {
  constructor(private quizRepository: QuizRepository) {}

  async execute(answers: Answer[]): Promise<QuizResult> {
    const quiz = await this.quizRepository.findFinalQuiz();
    return quiz.evaluate(answers);
  }
}
```

### GenerateCertificate Use Case
```typescript
export class GenerateCertificate {
  constructor(private pdfGenerator: PDFGenerator) {}

  async execute(certificate: Certificate): Promise<ArrayBuffer> {
    return await this.pdfGenerator.generate(certificate);
  }
}
```

## 6. Accessibility & ARIA Implementation

### ARIA Landmarks
- `<main>` - główna treść aplikacji
- `<nav>` - nawigacja między lekcjami
- `<section>` - poszczególne sekcje kursu
- `role="banner"` - header z logo i tytułem
- `role="contentinfo"` - footer

### ARIA States
- `aria-current="page"` - aktywna lekcja w nawigacji
- `aria-expanded` - rozwijane menu/accordiony
- `aria-live="polite"` - wyniki quizu
- `aria-describedby` - opisy dla pól formularza

### Keyboard Navigation
- Tab order dla wszystkich interaktywnych elementów
- Enter/Space dla buttonów
- Arrow keys dla nawigacji w quizie

## 7. Content Collections Schema

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const lessonsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    estimatedReadingTime: z.number(),
    tags: z.array(z.string()).optional(),
    description: z.string(),
  }),
});

const quizCollection = defineCollection({
  type: 'data',
  schema: z.object({
    questions: z.array(z.object({
      id: z.string(),
      question: z.string(),
      options: z.array(z.string()),
      correctAnswer: z.number(),
      explanation: z.string().optional(),
    })),
  }),
});

export const collections = {
  'lessons': lessonsCollection,
  'quiz': quizCollection,
};
```

## 8. Tailwind Configuration

```javascript
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          500: '#22c55e',
          900: '#14532d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
```

## 9. Performance Optimizations

### Astro Optimizations
- View Transitions API dla smooth navigation
- Image optimization z @astrojs/image
- Code splitting automatycznie przez Astro
- Selective hydration tylko dla interaktywnych komponentów

### CDN Ready
- Wszystkie assety statyczne
- Optimized bundle size
- Prefetch dla kluczowych zasobów
- Service Worker dla offline experience (opcjonalnie)

## 10. Security & Privacy

### Zero Tracking
- Brak Google Analytics
- Brak cookies
- Brak localStorage/sessionStorage
- Brak external scripts które mogłyby trackować

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'">
```

## 11. Development Workflow

### Scripts Package.json
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "lint": "eslint . --ext .astro,.ts,.tsx",
    "lint:fix": "eslint . --ext .astro,.ts,.tsx --fix",
    "format": "prettier --write .",
    "type-check": "astro check"
  }
}
```

### GitHub Actions CI/CD
```yaml
# .github/workflows/deploy.yml
name: Deploy to CDN
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --dir=dist --prod
```

## 12. Metryki i Analytics (Privacy-First)

### Server-side Metrics
- Logi serwera/CDN dla traffic analysis
- Download counts dla certyfikatów PDF
- Page views bez identyfikacji użytkownika

### Opcjonalna ankieta zewnętrzna
- Google Forms lub TypeForm
- Link po ukończeniu kursu
- Dobrowolna i anonimowa

## 13. Timeline Implementation

### Faza 1 (Tydzień 1-2): Setup i Architektura
- [ ] Setup Astro projektu z TypeScript
- [ ] Konfiguracja Tailwind CSS
- [ ] Setup Clean Architecture struktur
- [ ] Content Collections schema

### Faza 2 (Tydzień 3-4): Content i Layout
- [ ] Layout komponentów (Header, Footer, Navigation)
- [ ] System lekcji z markdown
- [ ] Responsive design
- [ ] ARIA accessibility

### Faza 3 (Tydzień 5-6): Quiz i Interaktywność
- [ ] Quiz komponenty w React
- [ ] Logika oceniania
- [ ] Results display

### Faza 4 (Tydzień 7): PDF i Certyfikaty
- [ ] PDF generation service
- [ ] Certificate design
- [ ] Download functionality

### Faza 5 (Tydzień 8): Testy i Deploy
- [ ] End-to-end testing
- [ ] Performance optimization
- [ ] CDN deployment
- [ ] Final testing

Ten plan zapewnia stworzenie w pełni statycznej, dostępnej i wydajnej aplikacji zgodnej z wymaganiami PRD oraz najlepszymi praktykami określonymi w instrukcjach Copilot.
