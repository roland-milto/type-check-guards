# isFinite

## Përshkrim

Përcakton nëse një `value` e dhënë është një `number` i fundshëm.

### Rast përdorimi

Përdor `isFinite` për të validuar hyrje të panjohura (p.sh., nga JSON, formularë ose API) përpara se të kryesh
llogaritje numerike, duke siguruar që vlera është një numër real, i fundshëm.

> **Shënim për përdoruesit e TypeScript:**
>
> `isFinite` kthen `true` vetëm për numra të fundshëm; kthen `false` për `NaN`, `Infinity` dhe çdo vlerë që nuk është
> numër.

### Përparësi

- Përdor `Number.isFinite` të integruar për një kontroll të besueshëm të fundshmërisë.
- Kthen `true` vetëm për numra të fundshëm; kthen `false` për `NaN`, `Infinity` dhe hyrje që nuk janë numra.
- Predikat i thjeshtë, pa efekte anësore, i përshtatshëm për validim dhe logjikë mbrojtëse.

## Përdorim

### Sintaksë

Funksion:

- `isFinite(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar për fundshmëri.

### Import lokal i funksionit

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers është: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value është një numër i fundëm këtu
  const doubled = value * 2;
  console.log(doubled);
}
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isFinite(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 16:31:42 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>