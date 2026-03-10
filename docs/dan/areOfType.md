# areOfType

## Beskrivelse

Kontrollerer, om alle elementer i det givne `array` er af den angivne `type`.

### Anvendelsestilfælde

Brug `areOfType` til at validere ukendt input (f.eks. parsed JSON, API-payloads, brugerinput), før du udfører
typespecifikke operationer på hvert element i et array.

> **Bemærkning til TypeScript-brugere:**
>
> Fordi `areOfType` er en type guard, indsnævrer TypeScript arrayet inde i en `if (areOfType(...)) {}`-blok til
`Array<DataTypeOf<T>>`.

### Fordele

- Giver en TypeScript-type guard: når den returnerer `true`, indsnævres input til `Array<DataTypeOf<T>>`.
- Validerer hvert element mod den ønskede runtime-type og forhindrer, at arrays med blandede typer går igennem.
- Fejler hurtigt: returnerer `false`, så snart et element, der ikke matcher, findes.
- Afviser ikke-arrays og tomme arrays som standard (afhænger af `isFilledArray`).

## Brug

### Syntaks

Funktion:

- `areOfType(array, type)`

Parametre:

- `array`: Arrayet, der skal kontrolleres.
- `type`: Typen, der skal kontrolleres op imod hvert element i arrayet.

### Lokal import af funktion

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values er nu number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areOfType(array, type)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 17:09:10 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>