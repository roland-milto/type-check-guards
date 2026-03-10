# areFinite

## Përshkrim

`areFinite` kontrollon nëse një vlerë është një varg jo-bosh, elementet e të cilit janë të gjithë numra të fundëm, duke
kthyer `true` nëse po dhe `false` përndryshe.

### Rast përdorimi

Valido vargje hyrëse numerike (p.sh., seri grafiku, lista koordinatash, mostra matjesh) përpara kryerjes së
llogaritjeve, duke siguruar që rezultati të jetë `true` vetëm kur të gjitha vlerat janë numra të fundëm.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areFinite` kur duhet të sigurohesh që një varg është jo-bosh dhe përmban vetëm numra të fundëm; kthen `false`
> për vargje bosh dhe për vargje që përmbajnë `NaN` ose pafundësi.

### Përparësi

- Kthen `true` vetëm kur hyrja është një varg jo-bosh dhe çdo element është një numër i fundëm.
- Refuzon `Infinity`, `-Infinity` dhe `NaN` duke u mbështetur te kontrollet `isFinite` për secilin element.
- Ofron një rezultat të thjeshtë boole (`true`/`false`) i përshtatshëm për guard-e dhe rrjedha validimi.

## Përdorim

### Sintaksë

Funksion:

- `areFinite(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për fundshmërinë e të gjithë elementeve të tij.

### Import lokal i funksionit

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // e vërtetë
console.log(areFinite(b)); // e rreme
console.log(areFinite(c)); // e rreme

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areFinite(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 16:37:17 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>