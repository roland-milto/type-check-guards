# areUndefined

## Përshkrim

`areUndefined` kontrollon nëse çdo element në një varg të dhënë është `undefined`.

### Rast përdorimi

Valido që një listë rezultatesh opsionale nuk përmban vlera reale (vetëm `undefined`), p.sh., pas hartimit të kërkimeve
ku hyrjet që mungojnë përfaqësohen si `undefined`, dhe dëshiron të konfirmosh që të gjitha kërkimet dështuan.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areUndefined` kur duhet të pohosh se një `unknown[]` përmban vetëm vlera `undefined`; kthen `false` për vargje
> bosh dhe për hyrje jo-vargje/të pavlefshme për shkak të kontrollit të brendshëm `isFilledArray`.

### Përparësi

- Kthen `false` për jo-vargje dhe vargje bosh duke kërkuar një varg të mbushur përmes `isFilledArray`.
- Siguron që çdo element është `undefined`, jo vetëm disa, duke e bërë qëllimin të qartë.
- E dobishme si një predikat në stil roje gjatë validimit të koleksioneve të panjohura të hyrjes.

## Përdorim

### Sintaksë

Funksion:

- `areUndefined(array)`

Parametra:

- `array`: Vargu që duhet kontrolluar për elemente `undefined`.

### Import lokal i funksionit

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Shënim: kthen false për vargje bosh
const r4 = areUndefined([]); // false

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areUndefined(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 13:57:55 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>