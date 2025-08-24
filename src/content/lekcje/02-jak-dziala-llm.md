---
title: "Jak działają duże modele językowe"
description: "Poznaj podstawy działania LLM-ów: sieci neuronowe, tokeny, embeddingi i parametry sterujące"
order: 2
duration: "15 min"
tags: ["LLM", "sieci-neuronowe", "tokeny", "embedding", "parametry"]
published: true
---

# Jak działają duże modele językowe

## Czym są duże modele językowe (LLM)?

Duże modele językowe (LLM), takie jak GPT-4, to rodzaj sztucznej inteligencji, który potrafi generować i przetwarzać tekst w sposób podobny do ludzkiego.

Działają na zasadzie **przewidywania kolejnego słowa** (lub fragmentu słowa) w zdaniu, bazując na ogromnych ilościach danych tekstowych, na których były trenowane. Dzięki temu mogą:
- Prowadzić konwersacje
- Pisać eseje
- Tłumaczyć teksty
- Tworzyć kod programistyczny

---

## Sieci neuronowe: mózg LLM-ów

U podstaw działania LLM-ów leżą **sieci neuronowe**. Można je porównać do uproszczonej wersji ludzkiego mózgu.

Składają się z połączonych ze sobą "neuronów", które przetwarzają informacje. Każde połączenie ma przypisaną "wagę", która decyduje o tym, jak silny jest wpływ jednego neuronu na drugi.

W procesie trenowania sieć neuronowa uczy się, jak dostosowywać te wagi, aby dla danego wejścia (np. fragmentu tekstu) uzyskać pożądane wyjście (np. kolejny fragment tekstu). 

> **Analogia**: To trochę jak nauka gry na pianinie - na początku twoje palce poruszają się chaotycznie, ale z czasem, dzięki powtórzeniom i korektom, zaczynasz grać melodię.

---

## Tokeny: alfabet LLM-ów

Aby LLM mógł "przeczytać" i przetworzyć tekst, musi zamienić go na format, który rozumie - czyli **liczby**. Proces ten nazywa się **tokenizacją**.

### Jak działa tokenizacja?

Tekst jest dzielony na mniejsze jednostki zwane **tokenami**. Tokeny mogą być:
- Całymi słowami
- Częściami słów
- Pojedynczymi znakami interpunkcyjnymi

**Przykład**: Zdanie "To jest pies" może zostać podzielone na trzy tokeny: `"To"`, `" jest"`, `" pies"`.

### Specyfika języka polskiego

W języku polskim, z powodu jego złożoności (odmiany słów, przypadki), tokenizacja może wyglądać inaczej niż w angielskim. 

**Przykład**: Słowo "samochodem" może być rozbite na dwa tokeny: `"samochód"` i `"em"`.

Dzieje się tak, ponieważ modele GPT były trenowane głównie na danych w języku angielskim, co sprawia, że polskie słowa mogą wymagać większej liczby tokenów do reprezentacji.

---

## Embedding: znaczenie w liczbach

Po tokenizacji każdy token jest zamieniany na **wektor liczb**, który nazywamy **embeddingiem**.

### Czym jest embedding?

Wektor ten reprezentuje znaczenie i kontekst słowa. Słowa o podobnym znaczeniu mają wektory, które są do siebie "blisko" w wielowymiarowej przestrzeni.

### Wizualizacja

Wyobraź sobie, że słowa są punktami na mapie:
- Słowa takie jak "król" i "królowa" byłyby blisko siebie
- Podobnie jak "Paryż" i "Francja"

Dzięki embeddingom model "rozumie" nie tylko to, co słowa znaczą, ale także ich wzajemne relacje.

---

## Tajemnice działania LLM-ów

Mimo że znamy ogólne zasady działania LLM-ów, **nie wiemy dokładnie, co dzieje się wewnątrz** sieci neuronowej w danym momencie.

> **Analogia**: To trochę jak oglądanie, jak dziecko uczy się rysować. Widzimy, jak stopniowo poprawia swoje kreski, ale nie wiemy dokładnie, co myśli w danej chwili.

Podobnie jest z LLM-ami: wiemy, że ciągłe dostrajanie parametrów prowadzi do coraz lepszych wyników, ale nie jesteśmy w stanie precyzyjnie śledzić, jak ten proces przebiega dla każdej pojedynczej interakcji.

---

## Parametry sterujące

Podczas pracy z LLM-ami możesz kontrolować ich zachowanie za pomocą kilku kluczowych parametrów:

### Temperature (Temperatura)
- **Kontroluje**: Losowość i kreatywność odpowiedzi
- **Niska wartość** (np. 0.2): Bardziej przewidywalne, spójne odpowiedzi (idealne do kodu)
- **Wysoka wartość** (np. 0.8): Większa kreatywność (idealne do wierszy, opowiadań)

### Max Length (Maksymalna długość)
- **Kontroluje**: Maksymalną liczbę tokenów w odpowiedzi
- **Uwaga**: To limit, nie gwarancja długości

### Stop Sequences (Sekwencje stop)
- **Kontroluje**: Automatyczne przerywanie generowania przy określonych frazach
- **Zastosowanie**: Gdy chcesz, aby odpowiedź kończyła się na konkretnym słowie

### Top P
- **Kontroluje**: Losowość w inny sposób niż temperatura
- **Wysokie Top P** (np. 0.9): Większa swoboda w wyborze słów
- **Niskie Top P** (np. 0.1): Zawężenie do najbardziej prawdopodobnych tokenów

### Frequency Penalty (Kara za częstotliwość)
- **Kontroluje**: Redukcję powtórzeń na podstawie częstotliwości występowania
- **Efekt**: Zmniejsza szanse na ponowne użycie często występujących tokenów

### Presence Penalty (Kara za obecność)
- **Kontroluje**: Redukcję powtórzeń niezależnie od częstotliwości
- **Efekt**: Bardziej agresywny sposób na zapobieganie powtórzeniom

---

## Komunikacja z LLM-ami: wprowadzenie do promptów

Interakcja z LLM-ami odbywa się za pomocą **promptów** - instrukcji tekstowych, które wysyłamy do modelu.

To właśnie poprzez prompty przekazujemy modelowi informacje o tym, czego od niego oczekujemy. Jakość naszej komunikacji z modelem w dużej mierze zależy od umiejętności konstruowania skutecznych promptów.

### Dlaczego sposób komunikacji ma znaczenie?

LLM-y działają na zasadzie prawdopodobieństwa - starają się przewidzieć najlepszą odpowiedź na podstawie otrzymanej instrukcji. Im lepiej sformułujemy nasze zapytanie, tym większa szansa na otrzymanie satysfakcjonującej odpowiedzi.

### Co dalej?

Sztuka tworzenia skutecznych promptów to osobny, rozległy temat, któremu poświęcimy całą kolejną lekcję. Poznasz tam praktyczne techniki komunikacji z AI, które pozwolą Ci maksymalnie wykorzystać potencjał modeli językowych.

### Ważna uwaga o niedeterminizmie

Pamiętaj, że **odpowiedzi LLM-ów są niedeterministyczne**. To oznacza, że to samo zapytanie może za każdym razem dać nieco inną odpowiedź.

Wynika to z mechanizmu losowego doboru tokenów - to cecha, nie błąd systemu!