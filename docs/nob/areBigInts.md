# areBigInts

## Beskrivelse

`areBigInts` avgjør om en verdi er et ikke-tomt array som kun inneholder `bigint`-verdier.

### Brukstilfelle

Valider ukjent inndata (f.eks. parsede JSON-lignende data, API-payloads eller funksjonsparametere typet som `unknown`)
for å sikre at det er et ikke-tomt array av `bigint`-verdier før behandling; returnerer `true` bare når alle elementer
er `bigint`, ellers `false`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areBigInts` som en runtime-guard før du utfører operasjoner som kun gjelder `bigint` (f.eks. aritmetikk,
> sammenligninger) på ukjent inndata.

### Fordeler

- Sikrer at hvert element er en `bigint`, og returnerer `true` bare når hele arrayet samsvarer.
- Avviser ikke-arrays og tomme arrays med vilje (via `isFilledArray`), noe som forhindrer utilsiktet godkjenning av
  ugyldige inndata.
- Rask avbryt: returnerer `false` så snart et ikke-`bigint`-element blir funnet.

## Bruk

### Syntaks

Funksjon:

- `areBigInts(array)`

Parametere:

- `array`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // sant
console.log(areBigInts(b)); // usant
console.log(areBigInts(c)); // usant
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areBigInts(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 23:26:54 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>