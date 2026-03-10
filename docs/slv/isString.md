# isString

## Opis

`isString` določi, ali je podana vrednost niz.

### Primer uporabe

Preverite uporabniški vnos, polja v API payloadu ali konfiguracijske vrednosti med izvajanjem, da zagotovite, da je
vrednost niz, preden uporabite operacije nad nizi (npr. obrezovanje, deljenje, pretvorba velikosti črk).

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isString` za preverjanje vrednosti tipa `unknown` ali ohlapno tipiziranih vrednosti, preden kličete metode
> za nize; vrne `true` samo, ko `typeof value === "string"`.

### Prednosti

- Preverjanje je preprosto in hitro z uporabo `typeof`.
- Vrne predvidljiv logični rezultat: `true` za nize, sicer `false`.
- Deluje tako za prazne kot neprazne nize.
- Uporabno kot lahka zaščita med izvajanjem pred izvajanjem operacij, specifičnih za nize.

## Uporaba

### Skladnja

Funkcija:

- `isString(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti, ali je tipa niz.

### Lokalni uvoz funkcije

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input je tukaj niz
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isString(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isString](../_analysis/isString.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 13:15:33 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>