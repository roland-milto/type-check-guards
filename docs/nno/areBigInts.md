# areBigInts

## Skildring

`areBigInts` avgjer om ein verdi er eit ikkje-tomt array som berre inneheld `bigint`-verdiar.

### Brukstilfelle

Valider ukjend input (t.d. tolka JSON-liknande data, API-payloadar eller funksjonsparameterar typa som `unknown`) for å
sikre at det er eit ikkje-tomt array av `bigint`-verdiar før vidare handsaming; returnerer `true` berre når alle element
er `bigint`, elles `false`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areBigInts` som ein runtime-guard før du utfører operasjonar som berre gjeld `bigint` (t.d. aritmetikk,
> samanlikningar) på ukjend input.

### Fordelar

- Sikrar at kvart element er ein `bigint`, og returnerer `true` berre når heile arrayet samsvarar.
- Avviser verdiar som ikkje er array og tomme array som standard (via `isFilledArray`), og hindrar utilsikta godkjenning
  av ugyldige input.
- Rask avbryting: returnerer `false` så snart eit element som ikkje er `bigint` blir funne.

## Bruk

### Syntaks

Funksjon:

- `areBigInts(array)`

Parameter:

- `array`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // sann
console.log(areBigInts(b)); // usann
console.log(areBigInts(c)); // usann
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areBigInts(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 23:26:52 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>