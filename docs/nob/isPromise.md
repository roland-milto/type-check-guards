# isPromise

## Beskrivelse

Avgjør om en gitt verdi er en `Promise`.

### Brukstilfelle

Bruk `isPromise` til å validere ukjente inndata før du behandler dem som en `Promise`, for eksempel når du håndterer
verdier returnert fra plugins, dynamiske importer eller løst typede API-er.

> **Merknad for TypeScript-brukere:**
>
> `isPromise` sjekker via `instanceof Promise`, så den returnerer bare `true` for ekte `Promise`-instanser (ikke
> generiske thenables).

### Fordeler

- Gir en enkel kjøretidssjekk for om en verdi er en `Promise`.
- Hjelper med å beskytte kodebaner som krever en ekte `Promise`-instans, og returnerer `true` eller `false` på en
  forutsigbar måte.
- Unngår falske positiver fra «thenable»-objekter (f.eks. `{ then() {} }`) ved å kreve en faktisk `Promise`-instans.

## Bruk

### Syntaks

Funksjon:

- `isPromise(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // sann
console.log(isPromise(b)); // usann
console.log(isPromise(123)); // usann
console.log(isPromise(null)); // usann

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isPromise(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 23:53:44 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>