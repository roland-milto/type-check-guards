# areNaNs

## Përshkrim

`areNaNs` kontrollon nëse të gjithë elementët në një varg janë `NaN` dhe kthen `true` vetëm nëse çdo element është
`NaN`.

### Rast përdorimi

Validoni të dhëna hyrëse ku `NaN` përdoret si vlerë sinjalizuese dhe duhet të siguroheni që i gjithë vargu përbëhet
ekskluzivisht nga `NaN` (p.sh., duke zbuluar një seri numerike ku të gjitha vlerat mungojnë).

> **Shënim për përdoruesit e TypeScript:**
>
> Përdorni `areNaNs` kur duhet të validoni që një varg përmban vetëm vlerën numerike `NaN` (pa konvertim nga varg në
> numër).

### Përparësi

- Kthen `true` vetëm kur çdo element është `NaN` (kontroll i rreptë për të gjithë elementët).
- Nuk i konverton vargjet në numra; vlera si "NaN" mbeten jo-`NaN` dhe e bëjnë rezultatin `false`.
- Kthen `false` për vargje të pambushura, duke parandaluar `true` aksidental në hyrje bosh.

## Përdorim

### Sintaksë

Funksion:

- `areNaNs(array)`

Parametra:

- `array`: Vargu për t'u kontrolluar për vlera `NaN`.

### Import lokal i funksionit

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // e vërtetë
const b = areNaNs([NaN, 1, NaN]); // e rreme
const c = areNaNs([NaN, "NaN", NaN]); // e rreme
const d = areNaNs([NaN, null, NaN]); // e rreme
const e = areNaNs([] as unknown[]); // e rreme
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areNaNs(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 15:53:29 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>