# areDecimals

## Përshkrim

Kontrollon nëse të gjithë elementët në një varg janë numra dhjetorë dhe nëse vargu është i mbushur, duke kthyer `true`
ose `false`.

### Rast përdorimi

Valido lista të ofruara nga përdoruesi (p.sh., kolona CSV ose input-e formulari) për të siguruar që vargu nuk është bosh
dhe që çdo hyrje është një vlerë dhjetore përpara parsimit ose llogaritjeve.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areDecimals` kur të duhet një kontroll i shpejtë booleane që një `unknown[]` të mos jetë bosh dhe që çdo
> element të jetë një paraqitje dhjetore.

### Përparësi

- Siguron që hyrja është një varg i mbushur përpara se të validojë elementët, duke parandaluar pranimin aksidental të
  listave bosh.
- Validon çdo element me `isDecimal`, kështu që vlerat e përziera ose të pavlefshme shkaktojnë menjëherë një rezultat
  `false`.
- Ofron një përfundim të thjeshtë booleane (`true`/`false`) të përshtatshëm për guard-e dhe rrjedha validimi me kthim të
  hershëm.

## Përdorim

### Sintaksë

Funksion:

- `areDecimals(array)`

Parametra:

- `array`: Vargu që do të kontrollohet.

### Import lokal i funksionit

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // e vërtetë
console.log(areDecimals(b)); // e pavërtetë
console.log(areDecimals(c)); // e pavërtetë
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areDecimals(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 15:59:07 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>