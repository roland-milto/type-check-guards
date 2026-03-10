# isUndefined

## Skildring

Sjekkar om ein gitt verdi er `undefined`.

### Brukstilfelle

Bruk `isUndefined` for å vakte valfrie inndata, oppdage manglande eigenskapar, eller skilje mellom «ikkje oppgjeve» (
`undefined`) og «uttrykkeleg tomt» (`null`).

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isUndefined` når du spesifikt treng å oppdage `undefined` (ikkje `null`). Det er trygt fordi det baserer seg på
`typeof value === "undefined"`.

### Fordelar

- Gjev ein tydeleg, eksplisitt sjekk for `undefined` ved å bruke `typeof`, og unngår kanttilfelle med udeklarerte
  variablar.
- Returnerer eit enkelt boolsk resultat (`true`/`false`) som passar for vaktar, forgreining og valideringslogikk.
- Hjelper med å skilje `undefined` frå andre «tomme» verdiar som `null`, `0`, `""` eller `NaN`.

## Bruk

### Syntaks

Funksjon:

- `isUndefined(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x er undefined her
} else {
  // x er ikkje undefined her
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isUndefined(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 14:03:47 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>