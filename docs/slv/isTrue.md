# isTrue

## Opis

`isTrue` določi, ali je dana vrednost strogo enaka `true`.

### Primer uporabe

Uporabite `isTrue` za validacijo zastavic, preklopnikov funkcionalnosti ali konfiguracijskih vrednosti, kjer je treba
sprejeti samo dobesedni `true`, vse ostalo pa obravnavati kot `false`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isTrue`, ko morate sprejeti samo logično konstanto `true`, ne zgolj »truthy« vrednosti.

### Prednosti

- Omogoča strogo preverjanje logične konstante `true` (brez prisilne pretvorbe).
- Pomaga razlikovati `true` od »truthy« vrednosti, kot so `1`, `"true"` ali `{}`.
- Preprosto, predvidljivo vedenje, primerno za varovala (guards) in validacijske cevovode.

## Uporaba

### Skladnja

Funkcija:

- `isTrue(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // res
const b = isTrue(1);         // napačno
const c = isTrue("true");   // napačno

if (isTrue(a)) {
  // a je tukaj res
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isTrue(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 13:46:09 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>