# isWeakMap

## Përshkrim

Përcakton nëse një `value` i dhënë është një instancë `WeakMap`.

### Rast përdorimi

Përdorni `isWeakMap` kur pranoni një vlerë `unknown` (p.sh., nga një API publik, sistem plugin-esh, ose konfigurim
dinamik) dhe duhet të verifikoni se është një `WeakMap` përpara se të përdorni sjellje specifike të `WeakMap`.

> **Shënim për përdoruesit e TypeScript:**
>
> `isWeakMap` kryen një kontroll `instanceof WeakMap`; është një guard në kohë ekzekutimi që kthen `true` vetëm për
> instanca reale `WeakMap`.

### Përparësi

- Kontroll i thjeshtë në kohë ekzekutimi për të përcaktuar nëse një vlerë është një `WeakMap`.
- Ndihmon të parandalohet keqpërdorimi i API-ve që kërkojnë një `WeakMap` duke kthyer `true`/`false` në vend që të hedhë
  përjashtim.
- Funksionon me hyrje `unknown`, duke e bërë të përshtatshëm në kufijtë e moduleve (p.sh., analizim, të dhëna të
  jashtme, ose kod pa tipizim).

## Përdorim

### Sintaksë

Funksion:

- `isWeakMap(value)`

Parametra:

- `value`: Vlera për t'u kontrolluar.

### Import lokal i funksionit

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a është një WeakMap në kohën e ekzekutimit
}

console.log(isWeakMap(a)); // e vërtetë
console.log(isWeakMap(b)); // e rreme
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isWeakMap(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 13:26:59 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>