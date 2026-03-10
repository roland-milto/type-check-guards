# areOfType

## Beskrivning

Kontrollerar om alla element i den givna `array` är av den angivna `type`.

### Användningsfall

Använd `areOfType` för att validera okänd indata (t.ex. parsad JSON, API-payloads, användarinmatning) innan du utför
typspecifika operationer på varje element i en array.

> **Notis för TypeScript-användare:**
>
> Eftersom `areOfType` är en typvakt snävar TypeScript in arrayen inuti ett `if (areOfType(...)) {}`-block till
`Array<DataTypeOf<T>>`.

### Fördelar

- Tillhandahåller en TypeScript-typvakt: när den returnerar `true` snävas indata in till `Array<DataTypeOf<T>>`.
- Validerar varje element mot den begärda körtidstypen, vilket förhindrar att arrayer med blandade typer passerar.
- Misslyckas snabbt: returnerar `false` så snart ett element som inte matchar hittas.
- Avvisar icke-arrayer och tomma arrayer av design (beror på `isFilledArray`).

## Användning

### Syntax

Funktion:

- `areOfType(array, type)`

Parametrar:

- `array`: Arrayen som ska kontrolleras.
- `type`: Typen som ska kontrolleras mot varje element i arrayen.

### Lokal funktionsimport

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values är nu number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areOfType(array, type)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Filen skapades 30 January 2026 at 17:11:33 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>