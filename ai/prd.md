# Dokument wymagań produktu (PRD) – Kurs "AI DLA ZIELONYCH"

## 1. Przegląd produktu

**"AI DLA ZIELONYCH"** to statyczny kurs e-learningowy stworzony w technologii Astro, skierowany do osób początkujących w temacie sztucznej inteligencji.

### Główne funkcjonalności:
- Seria lekcji zapisanych w formacie Markdown (`.md`)
- Jeden test końcowy sprawdzający wiedzę z całego kursu
- Automatyczne generowanie certyfikatu ukończenia w formacie PDF po zdaniu testu

### Kluczowe założenia techniczne:
- ✅ **W pełni statyczna** – bez bazy danych, logowania, zapisywania postępów
- ✅ **Zero cookies** – brak LocalStorage ani innych mechanizmów śledzenia
- ✅ **Brak śladów** – strona nie pozostawia żadnych danych w przeglądarce po zamknięciu
- ✅ **CDN ready** – wszystkie treści serwowane bezpośrednio z serwera lub CDN

## 2. Problem użytkownika

### Zidentyfikowane wyzwania:
- 🎯 Osoby stawiające pierwsze kroki w AI często **nie wiedzą, od czego zacząć**
- 📚 **Nadmiar rozproszonych informacji** w Internecie
- 🔒 Dostępne kursy są często **zbyt techniczne** lub wymagają **rejestracji i logowania**

### Nasza odpowiedź:
**"AI DLA ZIELONYCH"** ma być **prosty, otwarty i interaktywny**, umożliwiając:
- ⚡ **Natychmiastowy dostęp** do lekcji
- 🚀 **Szybką weryfikację wiedzy** bez zbędnych formalności

## 3. Wymagania funkcjonalne

### 3.1 System lekcji
- ✅ Lekcje w formacie `.md`, renderowane w przeglądarce
- ✅ Możliwość przeglądania lekcji w **dowolnej kolejności**
- ✅ **Brak zapisywania** danych o postępie (zero cookies, zero LocalStorage)

### 3.2 Test końcowy
- ✅ Jeden test **jednokrotnego wyboru** obejmujący treść całego kursu
- ✅ Użytkownik musi uzyskać **100% poprawnych odpowiedzi**, aby zaliczyć kurs
- ✅ **Brak limitu** podejść
- ✅ Wynik widoczny **natychmiast** po zakończeniu testu

### 3.3 Certyfikat
- ✅ Generowany **automatycznie** po zaliczeniu testu końcowego
- ✅ **Format PDF** z:
  - Tytułem kursu
  - Zakresem materiału
  - Imieniem (podanym ręcznie w formularzu przed wygenerowaniem)
- ✅ **Plik do pobrania** bezpośrednio po wygenerowaniu

## 4. Granice produktu (MVP)

### ❌ Poza zakresem:
- Rejestracja i logowanie użytkowników
- Przechowywanie postępów
- Pasek postępu
- Walidacja promptów przez LLM
- Integracja z płatnościami
- Aplikacja mobilna *(na start tylko wersja web)*

## 5. Historyjki użytkowników

### 📖 US-001 – Przeglądanie lekcji
1. Użytkownik otwiera kurs i widzi **listę lekcji**
2. Kliknięcie lekcji otwiera jej **treść (Markdown)**

### 📝 US-002 – Rozwiązywanie testu końcowego
1. Po ukończeniu wszystkich lekcji *(nieobowiązkowe weryfikowane przez system)* użytkownik przechodzi do **testu końcowego**
2. System **natychmiast pokazuje wynik**
3. **Brak ograniczeń** liczby podejść

### 🏆 US-003 – Uzyskanie certyfikatu
1. Po zaliczeniu testu końcowego użytkownik wprowadza swoje **imię i nazwisko**
2. System **generuje certyfikat PDF** i umożliwia jego **pobranie**

## 6. Metryki sukcesu
*(realne do zmierzenia przy braku cookies)*

### 🎯 Cele ilościowe:
- **≥ 5 000** unikalnych wejść na stronę kursu w ciągu pierwszych 6 miesięcy  
  *(mierzone w logach serwera/CDN)*

- **≥ 1 000** pobrań certyfikatu PDF w ciągu pierwszych 6 miesięcy  
  *(mierzone w logach serwera/CDN)*

- **≥ 60%** ukończeń testu końcowego względem liczby jego rozpoczęć  
  *(mierzone w logach serwera/CDN – wejście na stronę z wynikiem)*

### 🎯 Cele jakościowe:
- **≥ 4/5** średnia ocena w ankiecie zbieranej po ukończeniu kursu  
  *(formularz zewnętrzny, dobrowolny)*

- **100%** zgodności z założeniem **"zero śladów"**  
  *(brak jakichkolwiek mechanizmów śledzenia po stronie przeglądarki)*