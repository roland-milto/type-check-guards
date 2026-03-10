# isWeakMap

## Beskrivelse

Avgjør om en gitt `value` er en `WeakMap`-instans.

### Brukstilfelle

Bruk `isWeakMap` når du tar imot en `unknown`-verdi (f.eks. fra et offentlig API, et plugin-system eller dynamisk
konfigurasjon) og må verifisere at den er en `WeakMap` før du bruker `WeakMap`-spesifikk funksjonalitet.

> **Merknad for TypeScript-brukere:**
>
> `isWeakMap` utfører en `instanceof WeakMap`-sjekk; det er en kjøretids-guard som returnerer `true` kun for faktiske
`WeakMap`-instanser.

### Fordeler

- Enkel kjøretidssjekk for om en verdi er en `WeakMap`.
- Hjelper med å forhindre feilbruk av API-er som krever en `WeakMap` ved å returnere `true`/`false` i stedet for å kaste
  en feil.
- Fungerer med `unknown`-inndata, noe som gjør den praktisk ved modulgrenser (f.eks. parsing, eksterne data eller utypet
  kode).

## Bruk

### Syntaks

Funksjon:

- `isWeakMap(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a er en WeakMap ved kjøring
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isWeakMap(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 13:26:13 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>