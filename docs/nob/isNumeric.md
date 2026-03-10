# isNumeric

## Beskrivelse

`isNumeric` avgjør om en gitt `value` regnes som numerisk ved å sjekke den resolverte typen opp mot `NUMERIC_TYPES`.

### Brukstilfelle

Bruk `isNumeric` til å validere input (f.eks. API-payloads, skjemaverdier, konfigurasjon) før du utfører numeriske
operasjoner, og til konsekvent å akseptere numerisk-lignende typer (som `BigInt`) i tråd med `NUMERIC_TYPES`.

> **Merknad for TypeScript-brukere:**
>
> `isNumeric` er et predikat som returnerer en boolsk verdi; behandle det som en runtime-sjekk for om en verdi tilhører
> bibliotekets definerte sett av numeriske typer.

### Fordeler

- Bruker `getTypeOf` sammen med `NUMERIC_TYPES` for å sentralisere logikken for numerisk deteksjon og holde sjekker
  konsistente på tvers av en kodebase.
- Returnerer en enkel boolsk verdi (`true`/`false`) for enkel forgrening og bruk i guard-stil.
- Støtter flere numeriske representasjoner (f.eks. `number`, `BigInt`) slik det er definert av `NUMERIC_TYPES`.

## Bruk

### Syntaks

Funksjon:

- `isNumeric(value)`

Parametere:

- `value`: Verdien som skal sjekkes for numerisk type.

### Lokal funksjonsimport

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v regnes som numerisk av bibliotekets typeregler
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isNumeric(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 15:53:49 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>