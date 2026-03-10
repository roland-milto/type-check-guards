# areNullOrUndefined

## Përshkrim

Kontrollon nëse të gjithë elementët në vargun e dhënë janë `null` ose `undefined`.

### Rast përdorimi

Valido që një listë fushash opsionale nuk përmban asnjë vlerë reale (vetëm `null`/`undefined`) përpara se të vendosësh
të anashkalosh përpunimin ose të shfaqësh një gjendje “nuk u dhanë vlera”.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areNullOrUndefined` kur duhet të verifikosh që një varg përmban vetëm vlera që mungojnë (`null`/`undefined`).
> Vëre se kthen `false` për një varg bosh.

### Përparësi

- Kthen `true` vetëm kur çdo element është `null` ose `undefined`.
- Kthen `false` për vargje bosh, duke ndihmuar të dallohet “pa të dhëna” nga “të gjitha vlerat mungojnë”.
- Punon me `unknown[]`, duke e bërë të sigurt për t’u përdorur përpara ngushtimit të tipeve.

## Përdorim

### Sintaksë

Funksion:

- `areNullOrUndefined(array)`

Parametra:

- `array`: Vargu për t’u kontrolluar.

### Import lokal i funksionit

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areNullOrUndefined(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 00:31:27 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>