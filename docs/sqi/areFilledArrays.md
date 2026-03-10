# areFilledArrays

## Përshkrim

`areFilledArrays` kontrollon nëse një varg dy-dimensional nuk është bosh dhe nëse të gjitha nënvargjet e tij nuk janë
bosh.

### Rast përdorimi

Përdor `areFilledArrays` për të validuar hyrje tabelare ose të ngjashme me matricë (p.sh., rreshta CSV, të dhëna rrjeti,
rezultate të grupuara) në mënyrë që të mund të supozosh me siguri se ka të paktën një nënvarg dhe se asnjë nga
nënvargjet nuk është bosh.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areFilledArrays` kur duhet të sigurohesh që një varg 2D ka të paktën një rresht dhe që çdo rresht ka të paktën
> një element përpara se të iterosh ose të indeksosh brenda tij.

### Përparësi

- Verifikon që vargu i jashtëm nuk është bosh dhe që çdo nënvarg është gjithashtu jo bosh, duke kthyer `true` vetëm kur
  plotësohen të dyja kushtet.
- Funksionon me çdo lloj elementi brenda nënvargjeve (p.sh., numra, vargje, objekte, vargje të folezuara) sepse
  kontrollon vetëm nëse vargjet janë “të mbushura”, jo përmbajtjen e elementeve.
- Ofron një rezultat të thjeshtë boolean (`true`/`false`) të përshtatshëm si kontroll paraprak përpara përpunimit të të
  dhënave dy-dimensionale.

## Përdorim

### Sintaksë

Funksion:

- `areFilledArrays(array)`

Parametra:

- `array`: Vargu dy-dimensional për t'u kontrolluar.

### Import lokal i funksionit

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // e vërtetë
console.log(areFilledArrays(b)); // e vërtetë
console.log(areFilledArrays(c)); // e vërtetë
console.log(areFilledArrays(d)); // e rreme
console.log(areFilledArrays(e)); // e rreme
console.log(areFilledArrays(f)); // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areFilledArrays(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 11:59:02 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>