# isTrue

## Skildring

`isTrue` avgjer om ein gitt verdi er strengt lik `true`.

### Brukstilfelle

Bruk `isTrue` til å validere flagg, feature toggles eller konfigurasjonsverdiar der berre den bokstavlege `true` skal
godtakast, og alt anna må behandlast som `false`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isTrue` når du berre vil godta den boolske litteralen `true`, ikkje berre «truthy»-verdiar.

### Fordelar

- Gjev ein streng sjekk for den boolske litteralen `true` (inga typekonvertering).
- Hjelper med å skilje `true` frå «truthy»-verdiar som `1`, `"true"` eller `{}`.
- Enkel og føreseieleg åtferd som passar for guards og valideringspipelines.

## Bruk

### Syntaks

Funksjon:

- `isTrue(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // sann
const b = isTrue(1);         // usann
const c = isTrue("true");   // usann

if (isTrue(a)) {
  // a er sann her
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isTrue(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 13:45:40 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>