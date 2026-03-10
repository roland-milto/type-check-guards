# isNull

## Opis

Ugotovi, ali je podana `value` enaka `null`.

### Primer uporabe

`isNull` uporabite za validacijo vhodov ali polj v API payloadu, kjer je `null` smiseln označevalni (sentinel) podatek
in ga je treba obravnavati drugače kot `undefined` ali druge vrednosti.

> **Opomba za uporabnike TypeScripta:**
>
> `isNull` uporabite, ko morate razlikovati `null` od `undefined` in drugih lažnih (falsy) vrednosti; `true` vrne samo
> za `null`.

### Prednosti

- Zagotavlja natančno preverjanje za `null`, ne da bi ga zamenjeval z `undefined`.
- Zanesljivo deluje za katero koli vrsto vnosa, ker sprejme `unknown`.
- Preprosto, hitro in brez stranskih učinkov; vrne samo `true` ali `false`.

## Uporaba

### Skladnja

Funkcija:

- `isNull(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti za `null`.

### Lokalni uvoz funkcije

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a je tukaj null
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isNull(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isNull](../_analysis/isNull.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 15:40:44 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>