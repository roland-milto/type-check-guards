# isFilledArray

## Opis

Preveri, ali je `value` polje z vsaj enim elementom, in vrne `true` ali `false`.

### Primer uporabe

Uporabite `isFilledArray` za validacijo vhodnih podatkov (npr. API payloads, vrednosti obrazcev, konfiguracija) pred
iteriranjem, dostopom do prvega elementa ali uporabo logike, ki zahteva vsaj en element.

> **Opomba za uporabnike TypeScripta:**
>
> `isFilledArray` je varovalo med izvajanjem, ki vrne logično vrednost; ne zoži tipov elementov onkraj potrditve, da je
> polje neprazno.

### Prednosti

- Preprost in hiter preverjanje nepraznega polja z uporabo `Array.isArray` in preverjanjem dolžine.
- Pomaga preprečiti napake med izvajanjem, ko koda predpostavlja, da ima polje vsaj en element.
- Jasen logični rezultat: vrne `true` za neprazna polja in `false` v nasprotnem primeru.

## Uporaba

### Skladnja

Funkcija:

- `isFilledArray(value)`

Parametri:

- `value`: Vrednost, ki jo preverimo, ali je neprazno polje.

### Lokalni uvoz funkcije

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input je med izvajanjem neprazen niz
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isFilledArray(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 11:48:45 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>