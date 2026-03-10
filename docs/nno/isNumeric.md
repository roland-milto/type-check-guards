# isNumeric

## Skildring

`isNumeric` avgjer om ein gitt `value` blir rekna som numerisk ved å sjekka den oppløyste typen opp mot `NUMERIC_TYPES`.

### Brukstilfelle

Bruk `isNumeric` til å validera input (t.d. API-payloadar, skjemaverdiar, konfigurasjon) før du utfører numeriske
operasjonar, og til konsekvent å godta numerisk-liknande typar (som `BigInt`) i tråd med `NUMERIC_TYPES`.

> **Merknad for TypeScript-brukarar:**
>
> `isNumeric` er eit predikat som returnerer ein boolsk verdi; handsam det som ein køyretidssjekk for om ein verdi
> høyrer til det bibliotekdefinerte settet av numeriske typar.

### Fordelar

- Brukar `getTypeOf` saman med `NUMERIC_TYPES` for å sentralisera logikken for å oppdaga numeriske typar og halda
  sjekkane konsistente på tvers av ein kodebase.
- Returnerer ein enkel boolsk verdi (`true`/`false`) for enkel forgreining og bruk i vakt-/guard-stil.
- Støttar fleire numeriske representasjonar (t.d. `number`, `BigInt`) slik dei er definerte av `NUMERIC_TYPES`.

## Bruk

### Syntaks

Funksjon:

- `isNumeric(value)`

Parameter:

- `value`: Verdien som skal sjekkast for numerisk type.

### Lokal funksjonsimport

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v blir rekna som numerisk etter typereglane til biblioteket
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isNumeric(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 15:53:48 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>