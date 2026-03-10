# isNull

## Skildring

Avgjer om den oppgjevne `value` er `null`.

### Brukstilfelle

Bruk `isNull` til å validere inndata eller felt i API-nyttelast der `null` er ein meiningsfull sentinelverdi og må
handterast annleis enn `undefined` eller andre verdiar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isNull` når du treng å skilje `null` frå `undefined` og andre falske verdiar; han returnerer `true` berre for
`null`.

### Fordelar

- Gjev ein presis sjekk for `null` utan å blande det saman med `undefined`.
- Fungerer påliteleg for alle inndatatypar fordi han godtek `unknown`.
- Enkel, rask og utan sideeffektar; returnerer berre `true` eller `false`.

## Bruk

### Syntaks

Funksjon:

- `isNull(value)`

Parameter:

- `value`: Verdien som skal sjekkast for `null`.

### Lokal funksjonsimport

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // sann
console.log(isNull(b)); // usann

if (isNull(a)) {
  // a er null her
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isNull(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isNull](../_analysis/isNull.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 15:40:14 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>