# areEqual

## Përshkrim

`areEqual` kontrollon nëse të gjithë elementët në një varg janë të barabartë me një vlerë të dhënë të pritur, duke
kthyer `true` vetëm për vargje jo-bosh ku çdo element përputhet.

### Rast përdorimi

Vërteto që një listë përmban vetëm një vlerë të vetme të lejuar (p.sh., të gjitha flamujt e statusit janë `true`, të
gjitha rolet janë `"admin"`, ose të gjitha hyrjet numerike janë të barabarta me një konstante të kërkuar) duke e
trajtuar hyrjen bosh si të pavlefshme (`false`).

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areEqual` kur të duhet një kontroll i rreptë për të gjitha elementet; kthen `false` për vargje bosh dhe për
> çdo hyrje që nuk është varg ose nuk është e mbushur.

### Përparësi

- Kthen `true` vetëm kur çdo element përputhet me vlerën e pritur; përndryshe kthen `false`.
- Dështon shpejt: ndalon kontrollimin sapo gjendet një element që nuk përputhet.
- Mbron nga hyrjet e pavlefshme duke kthyer `false` kur hyrja nuk është një varg i mbushur.

## Përdorim

### Sintaksë

Funksion:

- `areEqual(value, expected)`

Parametra:

- `value`: Vargu që do të kontrollohet.
- `expected`: Elementi me të cilin do të krahasohet çdo element i vargut.

### Import lokal i funksionit

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areEqual(value, expected)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 23:52:14 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>