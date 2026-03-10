# isInteger

## Beskrivelse

Avgjør om en gitt `value` er et sikkert heltall.

### Brukstilfelle

Valider upålitelig input (f.eks. query-parametre, JSON-payloads, miljøvariabler) før du bruker det som et heltall for
array-indekser, paginering, tellere eller database-ID-er.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isInteger` til å validere ukjent input før du behandler det som et numerisk heltall; den returnerer `true` bare
> for verdier der `typeof value === "number"` og `Number.isSafeInteger(value)`.

### Fordeler

- Sjekker både type og numerisk sikkerhet: returnerer `true` bare når inndata er et tall og et sikkert heltall.
- Forhindrer vanlige fallgruver med numerisk typekonvertering: strenger som "5" returnerer korrekt `false`.
- Avviser ikke-heltall og usikre heltall, noe som gjør den egnet for ID-er, tellere og array-indeksering.

## Bruk

### Syntaks

Funksjon:

- `isInteger(value)`

Parametere:

- `value`: Verdien som skal sjekkes for heltallsstatus.

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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isInteger(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 00:50:52 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>