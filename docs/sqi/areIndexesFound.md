# areIndexesFound

## Përshkrim

`areIndexesFound` kontrollon nëse një vlerë është një varg jo bosh, elementet e të cilit janë të gjithë indekse të
vlefshme, duke kthyer `true` nëse janë dhe `false` përndryshe.

### Rast përdorimi

Vërteto të dhëna të ofruara nga përdoruesi ose të jashtme (p.sh., JSON i analizuar) që pritet të jenë një listë
indeksesh përpara se t’i përdorësh për të aksesuar ose për të prerë vargje.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areIndexesFound` për të vërtetuar hyrje të panjohura përpara se t’i trajtosh elementet e saj si indekse vargu;
> kthen `false` për vargje bosh dhe për vargje që përmbajnë vlera që nuk janë indekse.

### Përparësi

- Kthen `true` vetëm kur hyrja është një varg i mbushur dhe çdo element është një indeks i vlefshëm.
- Dështon shpejt: kthen `false` sapo të haset një element që nuk është indeks.
- I dobishëm si një kontroll paraprak përpara se vlerat të përdoren si pozicione ose zhvendosje në varg.

## Përdorim

### Sintaksë

Funksion:

- `areIndexesFound(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për përputhshmëri me indekset.

### Import lokal i funksionit

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Këtu, `a` konfirmohet se është një varg i mbushur indeksesh.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areIndexesFound(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 01:04:15 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>