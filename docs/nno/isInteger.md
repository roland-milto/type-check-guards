# isInteger

## Skildring

Avgjer om ein gitt `value` er eit trygt heiltalstal.

### Brukstilfelle

Valider input du ikkje stolar på (t.d. query-parametrar, JSON-payloadar, miljøvariablar) før du bruker han som eit
heiltal for tabellindeksar, paginering, teljarar eller database-ID-ar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isInteger` til å validere ukjend input før du handsamar han som eit numerisk heiltal; han returnerer `true`
> berre for verdiar der `typeof value === "number"` og `Number.isSafeInteger(value)`.

### Fordelar

- Sjekkar både type- og numerisk tryggleik: returnerer `true` berre når inputen er eit tal og eit trygt heiltal.
- Forhindrar vanlege fallgruver med numerisk tvangskonvertering: strengar som "5" returnerer korrekt `false`.
- Avviser ikkje-heiltal og utrygge heiltal, noko som gjer han eigna for ID-ar, teljarar og indeksering i tabellar.

## Bruk

### Syntaks

Funksjon:

- `isInteger(value)`

Parameter:

- `value`: Verdien som skal sjekkast for heiltalsstatus.

### Lokal funksjonsimport

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // sann
const b = isInteger(-100);   // sann
const c = isInteger("5");    // usann
const d = isInteger(5.5);    // usann
const e = isInteger(null);   // usann

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isInteger(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 00:50:51 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>