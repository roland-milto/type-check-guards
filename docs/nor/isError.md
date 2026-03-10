# isError

## Beskrivelse

Sjekker om en gitt `value` er en instans av `Error`.

### Brukstilfelle

Bruk `isError` når du mottar en `unknown`-verdi (for eksempel fra en `catch`-blokk, en callback eller et eksternt
bibliotek) og du må trygt avgjøre om den er en `Error` før du leser `message`, `name` eller `stack`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isError` til å beskytte `unknown`-verdier (f.eks. fra `catch`) før du behandler dem som en `Error`.

### Fordeler

- Gir en enkel kjøretidssjekk for om en verdi er en `Error`-instans.
- Hjelper med å snevre inn ukjente inndata før du får tilgang til `Error`-egenskaper som `message` eller `stack`.
- Reduserer risikoen for kjøretidsunntak når du håndterer verdier fra `catch`, eksterne API-er eller utypede kilder.

## Bruk

### Syntaks

Funksjon:

- `isError(value)`

Parametere:

- `value`: Verdien som skal sjekkes opp mot `Error`-typen.

### Lokal funksjonsimport

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isError(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isError](../_analysis/isError.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 12:46:34 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>