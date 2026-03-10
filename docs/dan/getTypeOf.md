# getTypeOf

## Beskrivelse

`getTypeOf` returnerer en detaljeret, menneskeligt læsbar typemærkat for en given værdi, inklusive forfinede numeriske
typer og specifikke objektkategorier.

### Anvendelsestilfælde

Brug `getTypeOf` til at normalisere typedetektion i inputvalidering og diagnostik—for eksempel til at afvise `nan`,
acceptere kun `integer`-ID'er, behandle numeriske strenge som `decimal` anderledes end almindelig `string`, eller til at
logge præcise objektkategorier som `date` og `regexp`.

> **Bemærkning til TypeScript-brugere:**
>
> Returtypen er `DataTypeAsString | string`. Behandl den som en beskrivende etiket; sammenlign med kendte litteraler som
`integer`, `float`, `nan`, `array`, `null` og `undefined`, når du forgrener.

### Fordele

- Returnerer en mere detaljeret typestreng end JavaScripts `typeof`, inklusive numeriske undertyper som `integer`,
  `float` og `nan`.
- Skelner eksplicit mellem `null` og `undefined` som `null` og `undefined`.
- Registrerer almindelige formater for numeriske strenge og rapporterer dem som `binary`, `octal`, `decimal` eller
  `hexadecimal` i stedet for blot `string`.
- Identificerer arrays som `array` og bruger `Object.prototype.toString` til at give specifikke objekttypenavne (f.eks.
  `date`, `regexp`, `map`, `set`).
- Nyttig til validering, logning og fejlfinding, hvor der er behov for konsistente, menneskeligt læsbare typemærkater.

## Brug

### Syntaks

Funktion:

- `getTypeOf(value)`

Parametre:

- `value`: Værdien, som datatypen skal bestemmes for.

### Lokal import af funktion

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

// Eksempelkontroller
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.getTypeOf(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 13:06:01 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>