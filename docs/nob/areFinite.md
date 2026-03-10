# areFinite

## Beskrivelse

`areFinite` sjekker om en verdi er en ikke-tom matrise der elementene alle er endelige tall, og returnerer `true` hvis
det er tilfelle og `false` ellers.

### Brukstilfelle

Valider numeriske inndatamatriser (f.eks. diagramserier, koordinatlister, måleprøver) før du utfører beregninger, og
sikre at resultatet er `true` bare når alle verdier er endelige tall.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areFinite` når du må sikre at en matrise ikke er tom og bare inneholder endelige tall; den returnerer `false`
> for tomme matriser og for matriser som inneholder `NaN` eller uendeligheter.

### Fordeler

- Returnerer `true` bare når inndata er en ikke-tom matrise og hvert element er et endelig tall.
- Avviser `Infinity`, `-Infinity` og `NaN` ved å basere seg på `isFinite`-sjekker for hvert element.
- Gir et enkelt boolsk resultat (`true`/`false`) som passer for guards og valideringsflyter.

## Bruk

### Syntaks

Funksjon:

- `areFinite(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for om alle elementene er endelige.

### Lokal funksjonsimport

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // sann
console.log(areFinite(b)); // usann
console.log(areFinite(c)); // usann

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areFinite(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 16:36:24 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>