# areBigInts

## Përshkrim

`areBigInts` përcakton nëse një vlerë është një varg jo-bosh që përmban vetëm vlera `bigint`.

### Rast përdorimi

Vlerëso hyrje të panjohura (p.sh., të dhëna të ngjashme me JSON të parsuar, payload-e API, ose parametra funksioni të
tipizuar si `unknown`) për të siguruar që është një varg jo-bosh me vlera `bigint` përpara përpunimit; kthen `true`
vetëm kur të gjithë elementët janë `bigint`, përndryshe `false`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areBigInts` si një guard në kohë ekzekutimi përpara se të kryesh operacione vetëm me `bigint` (p.sh.,
> aritmetikë, krahasime) mbi hyrje të panjohura.

### Përparësi

- Siguron që çdo element është një `bigint`, duke kthyer `true` vetëm kur i gjithë vargu përputhet.
- Refuzon jo-vargjet dhe vargjet bosh sipas dizajnit (përmes `isFilledArray`), duke parandaluar pranimin aksidental të
  hyrjeve të pavlefshme.
- Dështim i shpejtë: kthen `false` sapo të gjendet një element jo-`bigint`.

## Përdorim

### Sintaksë

Funksion:

- `areBigInts(array)`

Parametra:

- `array`: Vlera për t'u kontrolluar.

### Import lokal i funksionit

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // e vërtetë
console.log(areBigInts(b)); // e rreme
console.log(areBigInts(c)); // e rreme
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areBigInts(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 23:27:26 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>