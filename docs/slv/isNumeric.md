# isNumeric

## Opis

`isNumeric` določi, ali se dani `value` šteje za številski, tako da preveri njegov razrešeni tip glede na
`NUMERIC_TYPES`.

### Primer uporabe

Uporabite `isNumeric` za validacijo vhodnih podatkov (npr. API payloadov, vrednosti obrazcev, konfiguracije) pred
izvajanjem številskih operacij ter za dosledno sprejemanje številskih tipov (kot je `BigInt`) v skladu z
`NUMERIC_TYPES`.

> **Opomba za uporabnike TypeScripta:**
>
> `isNumeric` je predikat, ki vrača boolean; obravnavajte ga kot preverjanje v času izvajanja, ali vrednost spada v
> nabor številskih tipov, definiranih v knjižnici.

### Prednosti

- Uporablja `getTypeOf` skupaj z `NUMERIC_TYPES` za centralizacijo logike zaznavanja številskih tipov in ohranjanje
  doslednih preverjanj po celotni kodni bazi.
- Vrne preprost boolean (`true`/`false`) za enostavno razvejanje in uporabo v slogu varoval (guard).
- Podpira več številskih predstavitev (npr. `number`, `BigInt`), kot jih določa `NUMERIC_TYPES`.

## Uporaba

### Skladnja

Funkcija:

- `isNumeric(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti glede številskega tipa.

### Lokalni uvoz funkcije

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v se po pravilih tipov knjižnice šteje za numerično
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isNumeric(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 15:54:30 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>