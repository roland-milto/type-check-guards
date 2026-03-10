# areWeakSets

## Beskrivelse

Sjekker om en inndata er en ikke-tom array der hvert element er en `WeakSet`, og returnerer `true` kun i det tilfellet.

### Brukstilfelle

Valider runtime-input (f.eks. fra API-er, konfigurasjon eller brukerleverte data) for å sikre at du har en ikke-tom
liste med `WeakSet`-instanser før du fortsetter med logikk som avhenger av `WeakSet`-oppførsel.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areWeakSets` til å validere ukjent input før du behandler det som `WeakSet[]`. Den returnerer `false` for tomme
> arrayer og ikke-arrayer.

### Fordeler

- Sikrer at hvert element i inndata-arrayet er en `WeakSet`.
- Returnerer `false` for tomme arrayer, noe som forhindrer utilsiktede «alle gyldige»-resultater ved manglende data.
- Feiler trygt ved å returnere `false` når inndata ikke er en fylt array (inkludert `null`).
- Nyttig som en guard før du utfører operasjoner som krever `WeakSet`-instanser.

## Bruk

### Syntaks

Funksjon:

- `areWeakSets(array)`

Parametere:

- `array`: Arrayet som skal sjekkes for `WeakSet`-objekter.

### Lokal funksjonsimport

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a er en ikke-tom matrise av WeakSet-instanser
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areWeakSets(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 14:10:04 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>