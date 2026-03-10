# getTypeOf

## Beskrivelse

`getTypeOf` returnerer en detaljert, menneskelesbar typeetikett for en gitt verdi, inkludert raffinerte numeriske typer
og spesifikke objektkategorier.

### Brukstilfelle

Bruk `getTypeOf` til å normalisere typedeteksjon i inputvalidering og diagnostikk—for eksempel for å avvise `nan`, kun
godta `integer`-ID-er, behandle numeriske strenger som `decimal` annerledes enn vanlig `string`, eller for å logge
presise objektkategorier som `date` og `regexp`.

> **Merknad for TypeScript-brukere:**
>
> Returtypen er `DataTypeAsString | string`. Behandle den som en beskrivende etikett; sammenlign mot kjente litteraler
> som `integer`, `float`, `nan`, `array`, `null` og `undefined` når du forgrener.

### Fordeler

- Returnerer en mer finmasket typestreng enn JavaScripts `typeof`, inkludert numeriske undertyper som `integer`, `float`
  og `nan`.
- Skiller `null` og `undefined` eksplisitt som `null` og `undefined`.
- Den oppdager vanlige formater for numeriske strenger og rapporterer dem som `binary`, `octal`, `decimal` eller
  `hexadecimal` i stedet for vanlig `string`.
- Identifiserer også arrayer som `array` og bruker `Object.prototype.toString` for å gi spesifikke objekttypenavn (
  f.eks. `date`, `regexp`, `map`, `set`).
- Den er svært nyttig for validering, logging og feilsøking der konsistente, menneskelesbare typeetiketter trengs.

## Bruk

### Syntaks

Funksjon:

- `getTypeOf(value)`

Parametere:

- `value`: Verdien som datatypen skal bestemmes for.

### Lokal funksjonsimport

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Diteko tša mohlala
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.getTypeOf(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 13:13:49 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>