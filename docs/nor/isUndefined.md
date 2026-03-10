# isUndefined

## Beskrivelse

Sjekker om en gitt verdi er `undefined`.

### Brukstilfelle

Bruk `isUndefined` for å beskytte valgfrie inndata, oppdage manglende egenskaper, eller skille mellom «ikke oppgitt» (
`undefined`) og «eksplisitt tom» (`null`).

> **Merknad for TypeScript-brukere:**
>
> Bruk `isUndefined` når du spesifikt trenger å oppdage `undefined` (ikke `null`). Det er trygt fordi det baserer seg på
`typeof value === "undefined"`.

### Fordeler

- Gir en tydelig, eksplisitt sjekk for `undefined` ved å bruke `typeof`, og unngår kanttilfeller med udeklarerte
  variabler.
- Returnerer et enkelt boolsk resultat (`true`/`false`) som passer for guards, branching og valideringslogikk.
- Hjelper med å skille `undefined` fra andre «tomme» verdier som `null`, `0`, `""` eller `NaN`.

## Bruk

### Syntaks

Funksjon:

- `isUndefined(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x er udefinert her
} else {
  // x er ikkje udefinert her
}

const a = isUndefined(undefined); // sann
const b = isUndefined(null);      // falsk
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isUndefined(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 14:03:49 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>