# isWeakMap

## Skildring

Avgjer om ein gitt `value` er ein `WeakMap`-instans.

### Brukstilfelle

Bruk `isWeakMap` når du tek imot ein `unknown`-verdi (t.d. frå eit offentleg API, eit plugin-system eller dynamisk
konfigurasjon) og må verifisere at han er ein `WeakMap` før du bruker `WeakMap`-spesifikk åtferd.

> **Merknad for TypeScript-brukarar:**
>
> `isWeakMap` utfører ein `instanceof WeakMap`-sjekk; det er ein køyretids-guard som returnerer `true` berre for
> faktiske `WeakMap`-instansar.

### Fordelar

- Enkel køyretidssjekk for om ein verdi er ein `WeakMap`.
- Hjelper med å hindre feilbruk av API-ar som krev ein `WeakMap` ved å returnere `true`/`false` i staden for å kaste
  feil.
- Fungerer med `unknown`-inndata, noko som gjer det praktisk ved modulgrenser (t.d. parsing, eksterne data eller utypet
  kode).

## Bruk

### Syntaks

Funksjon:

- `isWeakMap(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a er ein WeakMap ved køyretid
}

console.log(isWeakMap(a)); // sant
console.log(isWeakMap(b)); // usant
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isWeakMap(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 13:26:10 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>