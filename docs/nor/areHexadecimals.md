# areHexadecimals

## Beskrivelse

Sjekker om alle elementer i en array er heksadesimale strenger, og returnerer `true` bare for ikke-tomme arrayer der
hvert element er gyldig.

### Brukstilfelle

Bruk `areHexadecimals` til å validere brukerinput eller eksterne data (f.eks. ID-er, sjekksummer, fargekoder uten en
innledende '#') før du utfører heksadesimal parsing eller videre behandling.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areHexadecimals` til å validere ukjent input før du parser eller konverterer verdier (for eksempel før
`parseInt(value, 16)` eller BigInt-konverteringer).

### Fordeler

- Validerer at hvert element er en heksadesimal streng og returnerer `true` bare når alle elementer samsvarer.
- Avviser tomme arrayer etter design, og returnerer `false` ved manglende inndata.
- Gir et enkelt boolsk resultat (`true`/`false`) som passer for guards og tidlig-retur-validering.

## Bruk

### Syntaks

Funksjon:

- `areHexadecimals(array)`

Parametere:

- `array`: Arrayen som skal sjekkes for heksadesimale streng-elementer.

### Lokal funksjonsimport

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areHexadecimals(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 23:07:18 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>