# areValidDates

## Përshkrim

Përcakton nëse një varg nuk është bosh dhe përbëhet tërësisht nga objekte `Date` të vlefshme.

### Rast përdorimi

Përdorni `areValidDates` për të validuar vargje të ofruara nga përdoruesi ose nga API përpara se të kryeni operacione të
bazuara në data (renditje, kontrolle intervali, formatim), duke siguruar që të gjitha hyrjet janë objekte `Date` reale
dhe të vlefshme dhe që lista nuk është bosh.

> **Shënim për përdoruesit e TypeScript:**
>
> `areValidDates` kthen `false` për një varg bosh; sigurohuni që vargu synohet të mos jetë bosh përpara se të
> mbështeteni te ai si hap validimi.

### Përparësi

- Kthen `true` vetëm kur çdo element është një instancë e vlefshme `Date` (pa data të pavlefshme si
  `new Date('invalid')`).
- Refuzon hyrjen bosh duke kthyer `false`, duke siguruar që të pranoni vetëm lista datash kuptimplota, jo bosh.
- Ofron një kontroll të thjeshtë booleane në stilin e guard-it që është i lehtë për t’u kombinuar me validime të tjera.

## Përdorim

### Sintaksë

Funksion:

- `areValidDates(array)`

Parametra:

- `array`: Vargu për t’u kontrolluar, që mund të përmbajë objekte `Date`.

### Import lokal i funksionit

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // e vërtetë
console.log(areValidDates(b)); // e rreme
console.log(areValidDates(c)); // e rreme
console.log(areValidDates(d)); // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areValidDates(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 14:33:54 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>