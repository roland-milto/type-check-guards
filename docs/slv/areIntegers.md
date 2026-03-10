# areIntegers

## Opis

`areIntegers` določi, ali so vsi elementi v danem polju cela števila, in vrne `true`, če so, sicer pa `false`.

### Primer uporabe

Uporabite `areIntegers` za preverjanje podatkov, ki jih posreduje uporabnik ali zunanji vir (npr. parametri poizvedbe,
JSON payloadi, vrstice CSV), kadar vaša logika zahteva zapolnjen seznam celih števil, kot so ID-ji, števci, odmiki za
paginacijo ali indeksi polja.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areIntegers` kot izvajalni varovalni pogoj (runtime guard) za vnose `unknown[]`, preden jih obravnavate kot
`number[]`, ki vsebuje samo cela števila. Če vrne `false`, vnos bodisi ni zapolnjeno polje bodisi vsebuje vsaj eno
> vrednost, ki ni celo število.

### Prednosti

- Vrne `true` samo, ko je vsak element celo število; sicer vrne `false`.
- Pomaga preveriti neznan vnos, preden izvedete operacije, ki so dovoljene le za cela števila (npr. indeksiranje,
  štetja, ID-ji).
- Hitro odpove: preneha preverjati takoj, ko najde element, ki ni celo število.

## Uporaba

### Skladnja

Funkcija:

- `areIntegers(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede elementov, ki so cela števila.

### Lokalni uvoz funkcije

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // res
console.log(areIntegers(b)); // res
console.log(areIntegers(c)); // napačno

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areIntegers(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 01:00:22 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>