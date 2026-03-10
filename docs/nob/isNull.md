# isNull

## Beskrivelse

Avgjør om den oppgitte `value` er `null`.

### Brukstilfelle

Bruk `isNull` til å validere inndata eller felt i API-payload der `null` er en meningsfull sentinelverdi og må håndteres
annerledes enn `undefined` eller andre verdier.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isNull` når du må skille `null` fra `undefined` og andre falsy-verdier; den returnerer `true` kun for `null`.

### Fordeler

- Gir en presis sjekk for `null` uten å blande det sammen med `undefined`.
- Fungerer pålitelig for alle inndatatyper fordi den aksepterer `unknown`.
- Enkel, rask og uten bivirkninger; returnerer bare `true` eller `false`.

## Bruk

### Syntaks

Funksjon:

- `isNull(value)`

Parametere:

- `value`: Verdien som skal sjekkes for `null`.

### Lokal funksjonsimport

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // sann
console.log(isNull(b)); // usann

if (isNull(a)) {
  // a er null her
}
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isNull(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isNull](../_analysis/isNull.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 15:40:16 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>