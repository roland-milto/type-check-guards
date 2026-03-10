# areFloats

## Beskrivelse

`areFloats` sjekker om en gitt matrise er fylt og om alle elementene er flyttall.

### Brukstilfelle

Bruk `areFloats` når du mottar en `unknown[]` (f.eks. fra JSON, spørringsparametere eller eksterne API-er) og du må
sikre at det er en fylt matrise der hvert element er et flyttall før du kjører numerisk logikk som
gjennomsnittsberegning, interpolasjon eller statistiske beregninger.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areFloats` til å beskytte `unknown[]` før du behandler det som `number[]` som kun inneholder flyttall; den
> returnerer `false` for tomme matriser og for ethvert ikke-flyttallselement.

### Fordeler

- Returnerer `true` bare når inndata er en ikke-tom matrise og hvert element er et flyttall.
- Feiler raskt: returnerer `false` så snart et ikke-flyttallselement blir funnet.
- Hjelper med å validere ukjent inndata før du utfører flyttallspesifikke beregninger.

## Bruk

### Syntaks

Funksjon:

- `areFloats(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for flyttallselementer.

### Lokal funksjonsimport

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // sant
console.log(areFloats(b)); // usant
console.log(areFloats(c)); // usant

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1,75
console.log(sumFloats([1, 2])); // null
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areFloats(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 15:58:49 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>