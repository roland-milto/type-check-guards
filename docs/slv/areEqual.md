# areEqual

## Opis

`areEqual` preveri, ali so vsi elementi v polju enaki dani pričakovani vrednosti, in vrne `true` samo za neprazna polja,
kjer se vsak element ujema.

### Primer uporabe

Preverite, da seznam vsebuje samo eno dovoljeno vrednost (npr. vse statusne zastavice so `true`, vse vloge so `"admin"`
ali vsi številski vnosi so enaki zahtevani konstanti), pri čemer se prazen vnos obravnava kot neveljaven (`false`).

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areEqual`, ko potrebujete strogo preverjanje vseh elementov; vrne `false` za prazna polja ter za vsak vnos,
> ki ni polje ali ni zapolnjen.

### Prednosti

- Vrne `true` samo, ko se vsak element ujema s pričakovano vrednostjo; sicer vrne `false`.
- Hitro odpove: preneha preverjati takoj, ko najde element, ki se ne ujema.
- Ščiti pred neveljavnim vnosom tako, da vrne `false`, kadar vnos ni zapolnjeno polje.

## Uporaba

### Skladnja

Funkcija:

- `areEqual(value, expected)`

Parametri:

- `value`: Polje, ki ga je treba preveriti.
- `expected`: Element, s katerim se primerja vsak element polja.

### Lokalni uvoz funkcije

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areEqual(value, expected)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 23:52:06 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>