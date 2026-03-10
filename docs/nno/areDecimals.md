# areDecimals

## Skildring

Sjekkar om alle element i ein tabell er desimaltal og at tabellen er fylt, og returnerer `true` eller `false`.

### Brukstilfelle

Valider brukargjevne lister (t.d. CSV-kolonnar eller skjemainndata) for å sikre at tabellen ikkje er tom og at kvar
oppføring er ein desimalverdi før tolking eller utrekningar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areDecimals` når du treng ein rask boolsk sjekk på at ein `unknown[]` ikkje er tom og at kvart element er ei
> desimalrepresentasjon.

### Fordelar

- Sikrar at inndata er ein fylt tabell før elementa blir validerte, og hindrar utilsikta godkjenning av tomme lister.
- Validerer kvart element med `isDecimal`, så blanda eller ugyldige verdiar gir umiddelbart resultatet `false`.
- Gjev eit enkelt boolsk utfall (`true`/`false`) som passar for guards og valideringsflytar med tidleg retur.

## Bruk

### Syntaks

Funksjon:

- `areDecimals(array)`

Parameter:

- `array`: Tabellen som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // sann
console.log(areDecimals(b)); // usann
console.log(areDecimals(c)); // usann
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areDecimals(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 15:58:24 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>