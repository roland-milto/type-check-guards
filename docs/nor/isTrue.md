# isTrue

## Beskrivelse

`isTrue` avgjør om en gitt verdi er strengt lik `true`.

### Brukstilfelle

Bruk `isTrue` til å validere flagg, feature toggles eller konfigurasjonsverdier der kun literalverdien `true` skal
godtas, og alt annet må behandles som `false`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isTrue` når du bare trenger å godta den boolske literalverdien `true`, ikke bare truthy-verdier.

### Fordeler

- Gir en streng sjekk for den boolske literalverdien `true` (ingen typekonvertering).
- Hjelper med å skille `true` fra truthy-verdier som `1`, `"true"` eller `{}`.
- Enkel og forutsigbar oppførsel som passer for guards og valideringspipelines.

## Bruk

### Syntaks

Funksjon:

- `isTrue(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // true
const b = isTrue(1);         // false
const c = isTrue("true");   // false

if (isTrue(a)) {
  // a er true her
}
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isTrue(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 13:45:42 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>