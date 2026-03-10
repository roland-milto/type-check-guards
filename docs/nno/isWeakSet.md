# isWeakSet

## Skildring

Avgjer om den gjevne `value` er ein `WeakSet` av objekt.

### Brukstilfelle

Bruk `isWeakSet` når du tek imot utypte inndata (t.d. frå eksterne API-ar, dynamisk konfigurasjon eller `unknown`
-verdiar) og du må stadfeste at det er ein `WeakSet` før du bruker `WeakSet`-spesifikke operasjonar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isWeakSet` til å snevre inn ein `unknown`-verdi til `WeakSet<object>` ved køyretid; merk at `WeakSet` berre kan
> innehalde objektreferansar.

### Fordelar

- Gjev ein enkel køyretidskontroll for om ein verdi er ein `WeakSet`.
- Hjelper med å førebyggje typefeil ved å sikre at berre `WeakSet`-instansar blir handsama som slike.
- Fungerer med alle `unknown`-inndata og returnerer eit tydeleg boolsk resultat (`true`/`false`).

## Bruk

### Syntaks

Funksjon:

- `isWeakSet(value)`

Parameter:

- `value`: Verdien som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // sann
console.log(isWeakSet(b)); // usann

if (isWeakSet(a)) {
  // a er eit WeakSet ved køyretid
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isWeakSet(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 14:18:31 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>