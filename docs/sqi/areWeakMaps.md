# areWeakMaps

## Përshkrim

`areWeakMaps` kontrollon nëse një vlerë është një varg jo bosh ku çdo element është një `WeakMap`, duke kthyer `true`
vetëm në atë rast dhe `false` përndryshe.

### Rast përdorimi

Valido të dhëna në kohë ekzekutimi (p.sh., JSON i parsuar, hyrje nga plugin-e, ose konfigurim me tipizim të lirshëm) për
të siguruar që është një varg jo bosh me instanca `WeakMap` përpara iterimit dhe thirrjes së metodave `WeakMap`; kthen
`false` kur ndonjë element nuk është `WeakMap` ose kur vargu është bosh.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areWeakMaps` për të validuar hyrje të panjohura përpara se t’i trajtosh si një `WeakMap[]` jo bosh; kthen
`false` për vargje bosh.

### Përparësi

- Siguron që çdo element në vargun e dhënë është një instancë `WeakMap`.
- Kthen `false` për vargje bosh, duke parandaluar pranimin aksidental të “pa të dhëna” si hyrje të vlefshme.
- E dobishme si një kontroll (guard) përpara kryerjes së operacioneve specifike për `WeakMap` mbi të gjithë elementët.

## Përdorim

### Sintaksë

Funksion:

- `areWeakMaps(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për instanca `WeakMap`.

### Import lokal i funksionit

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // lista është një varg jo bosh i instancave WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // jo një WeakMap[] jo bosh
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areWeakMaps(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 13:39:30 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>