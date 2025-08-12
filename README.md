# AI DLA ZIELONYCH

Darmowy kurs sztucznej inteligencji dla początkujących.

## 🚀 Szybki start

```bash
npm install
npm run dev
```

## � Struktura projektu

```
src/
├── components/          # Komponenty wielokrotnego użytku
├── content/
│   └── lekcje/         # Lekcje w formacie Markdown
├── layouts/            # Layouty stron
├── pages/              # Strony aplikacji
│   ├── index.astro     # Strona główna
│   ├── lekcje/         # Strony lekcji
│   └── test.astro      # Test końcowy
└── styles/             # Style globalne
```

## 🎯 Funkcjonalności

- ✅ **Statyczne lekcje** w formacie Markdown
- ✅ **Test końcowy** z natychmiastową oceną
- ✅ **Generowanie certyfikatu PDF** po zaliczeniu
- ✅ **Zero cookies** - brak śledzenia użytkowników
- ✅ **Responsywny design** z Tailwind CSS
- ✅ **Optymalizacja SEO**

## 🛠️ Technologie

- **[Astro](https://astro.build/)** - Framework do statycznych stron
- **[Tailwind CSS](https://tailwindcss.com/)** - Style
- **[TypeScript](https://www.typescriptlang.org/)** - Typowanie
- **Markdown** - Treści lekcji

## 📝 Dodawanie nowych lekcji

1. Utwórz nowy plik `.md` w katalogu `src/content/lekcje/`
2. Dodaj wymagane metadane w sekcji frontmatter:

```markdown
---
title: "Tytuł lekcji"
description: "Opis lekcji"
order: 4
duration: "10 min"
tags: ["tag1", "tag2"]
published: true
---

# Treść lekcji w Markdown
```

3. Lekcja automatycznie pojawi się na liście

## 🎯 Zgodność z PRD

Projekt jest w pełni zgodny z dokumentem PRD:

- ✅ Brak logowania i rejestracji
- ✅ Brak cookies i LocalStorage
- ✅ Statyczne generowanie treści
- ✅ Test końcowy z wymogiem 100% poprawnych odpowiedzi
- ✅ Certyfikat PDF po zaliczeniu
- ✅ CDN ready

## � Deployment

Projekt jest gotowy do wdrożenia na dowolnej platformie obsługującej statyczne strony:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

```bash
npm run build
```

## 📄 Licencja

MIT License - zobacz plik LICENSE
