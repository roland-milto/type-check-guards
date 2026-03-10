# getTypeOf

## Beskrivning

`getTypeOf` returnerar en detaljerad, människoläsbar typetikett för ett givet värde, inklusive förfinade numeriska typer
och specifika objektslag.

### Användningsfall

Använd `getTypeOf` för att normalisera typdetektering vid indata­validering och diagnostik—till exempel för att avvisa
`nan`, acceptera endast `integer`-ID:n, behandla numeriska strängar som `decimal` annorlunda än vanlig `string`, eller
för att logga exakta objektslag som `date` och `regexp`.

> **Notis för TypeScript-användare:**
>
> Returtypen är `DataTypeAsString | string`. Behandla den som en beskrivande etikett; jämför mot kända litteraler som
`integer`, `float`, `nan`, `array`, `null` och `undefined` när du förgrenar.

### Fördelar

- Returnerar en mer detaljerad typsträng än JavaScripts `typeof`, inklusive numeriska undertyper som `integer`, `float`
  och `nan`.
- Skiljer uttryckligen på `null` och `undefined` som `null` respektive `undefined`.
- Den upptäcker vanliga format för numeriska strängar och rapporterar dem som `binary`, `octal`, `decimal` eller
  `hexadecimal` i stället för enbart `string`.
- Identifierar även arrayer som `array` och använder `Object.prototype.toString` för att ge specifika objekttypsnamn (
  t.ex. `date`, `regexp`, `map`, `set`).
- Den är mycket användbar för validering, loggning och felsökning där konsekventa, människoläsbara typetiketter behövs.

## Användning

### Syntax

Funktion:

- `getTypeOf(value)`

Parametrar:

- `value`: Värdet vars datatyp ska fastställas.

### Lokal funktionsimport

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

// Exempelkontroller
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.getTypeOf(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Filen skapades 6 February 2026 at 13:14:57 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>