# areMaps

## Përshkrim

`areMaps` përcakton nëse një varg i dhënë është jo-bosh dhe nëse të gjithë elementët e tij janë instanca `Map`.

### Rast përdorimi

Vërtetoni hyrje të panjohura (p.sh., nga analizimi i JSON-it, API-të e jashtme, ose burime dinamike) përpara se t’i
trajtoni si një listë jo-bosh objektesh `Map`.

> **Shënim për përdoruesit e TypeScript:**
>
> Kthen `false` për një varg bosh; kthen `true` vetëm kur vargu është i mbushur dhe çdo element është një `Map`.

### Përparësi

- Siguron që çdo element është një instancë `Map`, duke kthyer `true` vetëm kur i gjithë vargu e kalon kontrollin.
- Refuzon vargjet bosh sipas dizajnit, duke parandaluar pranimin aksidental të “pa të dhëna” si hyrje të vlefshme.
- E dobishme si një mbrojtës përpara kryerjes së operacioneve specifike për `Map` (p.sh., `.get()`, `.set()`, iterimi)
  nëpër një koleksion.

## Përdorim

### Sintaksë

Funksion:

- `areMaps(array)`

Parametra:

- `array`: Vargu për t’u kontrolluar.

### Import lokal i funksionit

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items garantohet të jetë një varg jo bosh i instancave Map gjatë ekzekutimit
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false për: vargje bosh, ose vargje që përmbajnë ndonjë vlerë që nuk është Map
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areMaps(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 16:14:37 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>