# areRegExes

## Skildring

`areRegExes` sjekkar om ein verdi er ein fylt matrise som berre inneheld `RegExp`-objekt.

### Brukstilfelle

Valider at eit konfigurasjonsval (t.d. ei liste med tillat/nekt-mønster) er ein ikkje-tom matrise av regulære uttrykk
før du bruker det til matching.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areRegExes` til å snevre inn `unknown` til `RegExp[]` før du itererer eller set saman mønster.

### Fordelar

- Sikrar at ein verdi er ein ikkje-tom matrise der kvart element er ein `RegExp`-instans.
- Gjev ein enkel boolsk vakt (`true`/`false`) for å validere brukarinput eller konfigurasjon.
- Hjelper med å hindre køyretidsfeil når seinare kode føreset at alle element støttar operasjonar med regulære uttrykk.

## Bruk

### Syntaks

Funksjon:

- `areRegExes(array)`

Parameter:

- `array`: Verdien som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns er ein matrise av RegExp her
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areRegExes(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 23:20:26 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>