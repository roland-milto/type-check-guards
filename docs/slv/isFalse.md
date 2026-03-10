# isFalse

## Opis

`isFalse` preveri, ali je dana vrednost strogo enaka logični literali `false`.

### Primer uporabe

Preverjanje neznanih podatkov (npr. iz JSON, parametrov poizvedbe ali uporabniškega vnosa), kjer naj se kot veljavna
zastavica obravnava samo eksplicitna logična vrednost `false`, vse ostalo pa naj bo zavrnjeno.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isFalse`, ko morate sprejeti samo literalo `false` in zavrniti vse druge lažne (falsy) vrednosti; vrne
`true` samo za `value === false`.

### Prednosti

- Omogoča strogo preverjanje logične literale `false` brez prisilne pretvorbe.
- Pomaga razlikovati `false` od drugih lažnih (falsy) vrednosti, kot so `0`, `""`, `null` in `undefined`.
- Izboljša berljivost, saj pri preverjanju neznanega vnosa jasno izrazi namen.

## Uporaba

### Skladnja

Funkcija:

- `isFalse(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input je tukaj natanko false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isFalse(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 16:44:25 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>