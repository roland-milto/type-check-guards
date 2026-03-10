# areFloats

## Përshkrim

`areFloats` kontrollon nëse një varg i dhënë është i mbushur dhe të gjithë elementët e tij janë float.

### Rast përdorimi

Përdor `areFloats` kur merr një `unknown[]` (p.sh., nga JSON, parametrat e query, ose API të jashtme) dhe duhet të
sigurohesh që është një varg i mbushur ku çdo element është float përpara se të ekzekutosh logjikë numerike si
mesatarizimi, interpolimi, ose llogaritje statistikore.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areFloats` për të ruajtur `unknown[]` përpara se ta trajtosh si `number[]` që përmban vetëm float; kthen
`false` për vargje bosh dhe për çdo element që nuk është float.

### Përparësi

- Kthen `true` vetëm kur hyrja është një varg jo bosh dhe çdo element është një numër me presje dhjetore (float).
- Dështon shpejt: kthen `false` sapo të gjendet një element që nuk është float.
- Ndihmon të validohet hyrja e panjohur përpara se të kryhen llogaritje specifike për float.

## Përdorim

### Sintaksë

Funksion:

- `areFloats(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente float.

### Import lokal i funksionit

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // e vërtetë
console.log(areFloats(b)); // e rreme
console.log(areFloats(c)); // e rreme

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areFloats(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 15:59:38 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>