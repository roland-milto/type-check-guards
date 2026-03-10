# areBigInts

## Opis

`areBigInts` določa, ali je vrednost neprazno polje, ki vsebuje samo vrednosti tipa `bigint`.

### Primer uporabe

Preverite neznan vhod (npr. razčlenjene JSON-podobne podatke, API payload-e ali parametre funkcij, tipizirane kot
`unknown`), da zagotovite, da gre za neprazno polje vrednosti `bigint` pred obdelavo; vrne `true` samo, ko so vsi
elementi `bigint`, sicer `false`.

> **Opomba za uporabnike TypeScripta:**
>
> `areBigInts` uporabite kot izvajalni varovalni pogoj (runtime guard), preden na neznanem vhodu izvajate operacije, ki
> so dovoljene samo za `bigint` (npr. aritmetika, primerjave).

### Prednosti

- Zagotovi, da je vsak element tipa `bigint`, in vrne `true` samo, ko se ujema celotno polje.
- Zasnovano zavrne vrednosti, ki niso polja, in prazna polja (prek `isFilledArray`), s čimer prepreči nenamerno
  sprejemanje neveljavnih vhodov.
- Hitro prekine: vrne `false` takoj, ko najde element, ki ni `bigint`.

## Uporaba

### Skladnja

Funkcija:

- `areBigInts(array)`

Parametri:

- `array`: Vrednost za preverjanje.

### Lokalni uvoz funkcije

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // res
console.log(areBigInts(b)); // napačno
console.log(areBigInts(c)); // napačno
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areBigInts(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 23:27:19 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>