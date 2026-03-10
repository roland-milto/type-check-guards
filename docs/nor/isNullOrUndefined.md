# isNullOrUndefined

## Beskrivelse

Sjekker om en gitt verdi er `null` eller `undefined`.

### Brukstilfelle

Bruk `isNullOrUndefined` når du trenger å behandle både `null` og `undefined` som «ingen verdi», for eksempel ved
validering av valgfrie inndata, normalisering av API-payloads, eller for å beskytte kodebaner før du derefererer en
verdi som potensielt mangler.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isNullOrUndefined` for å beskytte mot manglende verdier før du aksesserer egenskaper eller kaller metoder; den
> returnerer `true` kun for `null` og `undefined`.

### Fordeler

- Gir en tydelig, gjenbrukbar guard for å oppdage `null` og `undefined` på ett sted.
- Returnerer en enkel boolsk verdi (`true`/`false`) som er lett å kombinere i betingelser og valideringer.
- Hjelper med å unngå vanlige kjøretidsfeil ved å sjekke for manglende verdier før du aksesserer egenskaper eller kaller
  metoder.

## Bruk

### Syntaks

Funksjon:

- `isNullOrUndefined(value)`

Parametere:

- `value`: Verdien som skal sjekkes for `null` eller `undefined`.

### Lokal funksjonsimport

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // handter manglande verdi
}

console.log(isNullOrUndefined(b)); // sann
console.log(isNullOrUndefined(c)); // usann

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isNullOrUndefined(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 00:34:48 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>