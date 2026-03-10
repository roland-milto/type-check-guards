# isDecimal

## Opis

`isDecimal` preveri, ali je vrednost decimalna predstavitev v obliki niza brez začetnih/končnih presledkov in z
veljavnim decimalnim formatom.

### Primer uporabe

Validirajte polja obrazcev, API payload-e ali konfiguracijske vrednosti, ki morajo biti podane kot decimalni niz (po
želji s predznakom) brez kakršnihkoli okoliških presledkov, preden jih razčlenite ali shranite.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isDecimal` za validacijo uporabniškega vnosa, preden ga pretvorite (npr. z `Number(value)`), še posebej
> kadar je treba presledke zavrniti.

### Prednosti

- Strogo preveri, da je vhod niz in da se ujema z vzorcem decimalnega literala.
- Zavrne začetne in končne presledke (vključno s kontrolnimi znaki), da se izogne dvoumnemu razčlenjevanju.
- Hitri predpreverjanji (preverjanje tipa ter prvega/zadnjega znaka) pred zagonom regularnega izraza.
- Vrne preprost logični rezultat (`true`/`false`), primeren za varovala in validacijo vnosa.

## Uporaba

### Skladnja

Funkcija:

- `isDecimal(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti glede formata decimalnega niza.

### Lokalni uvoz funkcije

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v je tukaj niz (preverjeno med izvajanjem)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isDecimal(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 15:54:29 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>