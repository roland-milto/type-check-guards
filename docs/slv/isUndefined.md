# isUndefined

## Opis

Preveri, ali je dana vrednost `undefined`.

### Primer uporabe

Uporabite `isUndefined` za varovanje neobveznih vhodov, zaznavanje manjkajočih lastnosti ali razlikovanje med »ni
podano« (`undefined`) in »izrecno prazno« (`null`).

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isUndefined`, ko morate posebej zaznati `undefined` (ne `null`). Varno je, ker se opira na
`typeof value === "undefined"`.

### Prednosti

- Zagotavlja jasno, eksplicitno preverjanje za `undefined` z uporabo `typeof`, s čimer se izogne robnim primerom pri
  nedeklariranih spremenljivkah.
- Vrne preprost logični rezultat (`true`/`false`), primeren za varovala, razvejanje in validacijsko logiko.
- Pomaga razlikovati `undefined` od drugih »praznih« vrednosti, kot so `null`, `0`, `""` ali `NaN`.

## Uporaba

### Skladnja

Funkcija:

- `isUndefined(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x je tukaj undefined
} else {
  // x tukaj ni undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isUndefined(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 14:04:18 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>