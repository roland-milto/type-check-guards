# areValidDates

## Opis

Ugotovi, ali je polje neprazno in je v celoti sestavljeno iz veljavnih objektov `Date`.

### Primer uporabe

Uporabite `areValidDates` za validacijo polj, ki jih posreduje uporabnik ali API, preden izvedete operacije na podlagi
datumov (razvrščanje, preverjanje obsega, oblikovanje), s čimer zagotovite, da so vsi vnosi resnični, veljavni objekti
`Date` in da seznam ni prazen.

> **Opomba za uporabnike TypeScripta:**
>
> `areValidDates` vrne `false` za prazno polje; prepričajte se, da je polje namenoma neprazno, preden se nanj zanesete
> kot na korak validacije.

### Prednosti

- Vrne `true` samo, ko je vsak element veljaven primerek `Date` (brez neveljavnih datumov, kot je
  `new Date('invalid')`).
- Zavrne prazen vnos tako, da vrne `false`, kar zagotavlja, da sprejmete le smiselne, neprazne sezname datumov.
- Nudi preprosto logično preverjanje v slogu varovala (guard), ki ga je enostavno kombinirati z drugimi validacijami.

## Uporaba

### Skladnja

Funkcija:

- `areValidDates(array)`

Parametri:

- `array`: Polje za preverjanje, ki lahko vsebuje objekte `Date`.

### Lokalni uvoz funkcije

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // res
console.log(areValidDates(b)); // napačno
console.log(areValidDates(c)); // napačno
console.log(areValidDates(d)); // napačno

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areValidDates(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 14:33:47 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>