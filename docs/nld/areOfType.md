# areOfType

## Beschrijving

Controleert of alle elementen in de gegeven `array` van het opgegeven `type` zijn.

### Use case

Gebruik `areOfType` om onbekende invoer (bijv. geparseerde JSON, API-payloads, gebruikersinvoer) te valideren voordat je
typespecifieke bewerkingen uitvoert op elk element van een array.

> **Hint voor TypeScript-gebruikers:**
>
> Omdat `areOfType` een type guard is, versmalt TypeScript de array binnen een `if (areOfType(...)) {}`-blok tot
`Array<DataTypeOf<T>>`.

### Voordelen

- Biedt een TypeScript type guard: wanneer het `true` retourneert, wordt de invoer versmald tot `Array<DataTypeOf<T>>`.
- Valideert elk element tegen het gevraagde runtime-type, waardoor arrays met gemengde typen niet slagen.
- Faalt snel: retourneert `false` zodra een niet-overeenkomend element wordt gevonden.
- Wijst niet-arrays en lege arrays bewust af (afhankelijk van `isFilledArray`).

## Gebruik

### Syntax

Functie:

- `areOfType(array, type)`

Parameters:

- `array`: De array om te controleren.
- `type`: Het type waarmee elk element in de array wordt gecontroleerd.

### Lokale functie-import

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values is nu number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areOfType(array, type)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 17:10:36 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>