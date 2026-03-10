# isNaN

## Beskrivelse

Avgjør om den angitte `value` er en `NaN` av typen `number` uten å konvertere strenger.

### Brukstilfelle

Valider upålitelig eller løst typet inndata (f.eks. API-payloads, skjemaverdier, parsede JSON-data) for å oppdage den
spesielle `NaN`-verdien og håndtere den eksplisitt, samtidig som ikke-tall-inndata behandles som ikke `NaN`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isNaN` når du må oppdage den spesielle numeriske verdien `NaN` samtidig som du sikrer at inndata faktisk er en
`number` (ingen streng-til-tall-konvertering).

### Fordeler

- Sjekker om en verdi er `NaN` uten å tvinge ikke-tall (f.eks. strenger) til å bli tall.
- Returnerer `true` kun for verdier som både er av typen `number` og `NaN`.
- Trygg for `unknown`-inndata og unngår falske positiver fra implisitte konverteringer.

## Bruk

### Syntaks

Funksjon:

- `isNaN(value)`

Parametere:

- `value`: Verdien som skal sjekkes om den er en `NaN` av typen `number`.

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
  // a er et tall og spesifikt NaN
}
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isNaN(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 15:47:19 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>