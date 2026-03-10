# isError

## Skildring

Sjekkar om ein gitt `value` er ein instans av `Error`.

### Brukstilfelle

Bruk `isError` når du får ein `unknown`-verdi (til dømes frå ein `catch`-blokk, ein callback eller eit eksternt
bibliotek) og du treng å avgjere på ein trygg måte om det er ein `Error` før du les `message`, `name` eller `stack`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isError` til å verne `unknown`-verdiar (t.d. frå `catch`) før du handsamar dei som ein `Error`.

### Fordelar

- Gjev ein enkel køyretidskontroll for om ein verdi er ein `Error`-instans.
- Hjelper med å snevre inn ukjende inndata før ein får tilgang til `Error`-eigenskapar som `message` eller `stack`.
- Reduserer risikoen for køyretidsunntak når ein handterer verdiar frå `catch`, eksterne API-ar eller utypte kjelder.

## Bruk

### Syntaks

Funksjon:

- `isError(value)`

Parameter:

- `value`: Verdien som skal sjekkast opp mot `Error`-typen.

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

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isError(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isError](../_analysis/isError.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 12:46:31 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>