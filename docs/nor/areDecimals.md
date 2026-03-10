# areDecimals

## Beskrivelse

Sjekker om alle elementer i en matrise er desimaltall og at matrisen er utfylt, og returnerer `true` eller `false`.

### Brukstilfelle

Valider brukeroppgitte lister (f.eks. CSV-kolonner eller skjemainndata) for å sikre at matrisen ikke er tom og at hver
oppføring er en desimalverdi før parsing eller beregninger.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areDecimals` når du trenger en rask boolsk sjekk på at en `unknown[]` ikke er tom og at hvert element er en
> desimalrepresentasjon.

### Fordeler

- Sikrer at inndata er en utfylt matrise før elementene valideres, og forhindrer utilsiktet aksept av tomme lister.
- Validerer hvert element med `isDecimal`, slik at blandede eller ugyldige verdier gir et umiddelbart `false`-resultat.
- Gir et enkelt boolsk utfall (`true`/`false`) som passer for guards og valideringsflyter med tidlig retur.

## Bruk

### Syntaks

Funksjon:

- `areDecimals(array)`

Parametere:

- `array`: Matrisen som skal sjekkes.

### Lokal funksjonsimport

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // sant
console.log(areDecimals(b)); // falsk
console.log(areDecimals(c)); // falsk
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areDecimals(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 15:58:33 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>