# isSet

## Skildring

Avgjer om ein gitt verdi er ein `Set`.

### Brukstilfelle

Valider inndata frå eksterne kjelder (t.d. JSON-parsing, brukarinnputt eller tredjeparts-API-ar) for å sikre at ein
verdi er ein `Set` før du utfører `Set`-operasjonar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isSet` til å snevre inn `unknown`-verdiar før du kallar `Set`-spesifikke API-ar som `.add`, `.has` eller
`.size`.

### Fordelar

- Gjev ein enkel køyretidskontroll for å stadfeste om ein verdi er ein `Set`.
- Hjelper med å førebyggje typefeil ved å gjere det mogleg å forgreine tidleg når ein verdi ikkje er ein `Set`.
- Fungerer med alt innhald i ein `Set` (tom eller med element) og returnerer `true`/`false` konsekvent.

## Bruk

### Syntaks

Funksjon:

- `isSet(value)`

Parameter:

- `value`: Verdien som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a er eit Set ved køyretid
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isSet(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isSet](../_analysis/isSet.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 23:10:42 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>