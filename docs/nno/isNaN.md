# isNaN

## Skildring

Avgjer om den oppgjevne `value` er ein `NaN` av typen `number` utan å konvertere strengar.

### Brukstilfelle

Valider utrygge eller laust typa inndata (t.d. API-payloadar, skjemaverdiar, tolka JSON) for å oppdage den spesielle
`NaN`-verdien og handtere han eksplisitt, medan inndata som ikkje er tal blir behandla som ikkje `NaN`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isNaN` når du treng å oppdage den spesielle numeriske verdien `NaN`, samstundes som du sikrar at inndata faktisk
> er ein `number` (inga streng-til-tal-konvertering).

### Fordelar

- Sjekkar om ein verdi er `NaN` utan å tvinge ikkje-tal (t.d. strengar) til å bli tal.
- Returnerer `true` berre for verdiar som både er av typen `number` og `NaN`.
- Trygt for `unknown`-inndata og unngår falske positive frå implisitte konverteringar.

## Bruk

### Syntaks

Funksjon:

- `isNaN(value)`

Parameter:

- `value`: Verdien som skal sjekkast om han er ein `NaN` av typen `number`.

### Lokal funksjonsimport

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // sann
console.log(isNaN(b)); // usann
console.log(isNaN(c)); // usann

if (isNaN(a)) {
  // a er eit tal og spesifikt NaN
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isNaN(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 15:47:19 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>