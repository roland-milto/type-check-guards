# isWeakSet

## Beskrivelse

Avgjør om den gitte `value` er en `WeakSet` av objekter.

### Brukstilfelle

Bruk `isWeakSet` når du tar imot utypet inndata (f.eks. fra eksterne API-er, dynamisk konfigurasjon eller `unknown`
-verdier) og du må verifisere at det er en `WeakSet` før du bruker `WeakSet`-spesifikke operasjoner.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isWeakSet` til å snevre inn en `unknown`-verdi til `WeakSet<object>` ved kjøretid; merk at `WeakSet` bare kan
> inneholde objektreferanser.

### Fordeler

- Gir en enkel kjøretidssjekk for om en verdi er en `WeakSet`.
- Hjelper med å forhindre typefeil ved å sikre at bare `WeakSet`-instanser behandles som sådanne.
- Fungerer med enhver `unknown`-inndata og returnerer et tydelig boolsk resultat (`true`/`false`).

## Bruk

### Syntaks

Funksjon:

- `isWeakSet(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a er et WeakSet ved kjøring
}
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isWeakSet(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 14:18:34 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>