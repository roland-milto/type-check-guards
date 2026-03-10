# isSet

## Beskrivelse

Avgjør om en gitt verdi er en `Set`.

### Brukstilfelle

Valider inndata fra eksterne kilder (f.eks. JSON-parsing, brukerinput eller tredjeparts-API-er) for å sikre at en verdi
er en `Set` før du utfører `Set`-operasjoner.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isSet` til å snevre inn `unknown`-verdier før du kaller `Set`-spesifikke API-er som `.add`, `.has` eller
`.size`.

### Fordeler

- Gir en enkel kjøretidssjekk for å bekrefte om en verdi er en `Set`.
- Hjelper med å forhindre typefeil ved å muliggjøre tidlig forgrening når en verdi ikke er en `Set`.
- Fungerer med hvilket som helst `Set`-innhold (tomt eller fylt) og returnerer `true`/`false` konsekvent.

## Bruk

### Syntaks

Funksjon:

- `isSet(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a ke Set ka nako ya go tsamaya
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isSet(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isSet](../_analysis/isSet.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 23:10:42 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>