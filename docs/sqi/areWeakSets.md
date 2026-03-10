# areWeakSets

## Përshkrim

Kontrollon nëse një hyrje është një varg jo bosh ku çdo element është një `WeakSet`, duke kthyer `true` vetëm në atë
rast.

### Rast përdorimi

Vërteto hyrjen në kohë ekzekutimi (p.sh., nga API-t, konfigurimi, ose të dhëna të ofruara nga përdoruesi) për të
siguruar që ke një listë jo bosh instancash `WeakSet` përpara se të vazhdosh me logjikë që varet nga sjellja e
`WeakSet`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areWeakSets` për të vërtetuar hyrje të panjohura përpara se ta trajtosh si `WeakSet[]`. Kthen `false` për
> vargje bosh dhe për jo-vargje.

### Përparësi

- Siguron që çdo element në vargun hyrës është një `WeakSet`.
- Kthen `false` për vargje bosh, duke parandaluar rezultate aksidentale “të gjitha të vlefshme” kur mungojnë të dhënat.
- Dështon në mënyrë të sigurt duke kthyer `false` kur hyrja nuk është një varg i mbushur (përfshirë `null`).
- I dobishëm si një kontroll paraprak përpara kryerjes së operacioneve që kërkojnë instanca `WeakSet`.

## Përdorim

### Sintaksë

Funksion:

- `areWeakSets(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për objekte `WeakSet`.

### Import lokal i funksionit

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a është një varg jo bosh i instancave WeakSet
}

console.log(areWeakSets(a)); // e vërtetë
console.log(areWeakSets(b)); // e rreme
console.log(areWeakSets(c)); // e rreme
console.log(areWeakSets(null as unknown)); // e rreme
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areWeakSets(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 14:10:59 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>