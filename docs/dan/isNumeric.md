# isNumeric

## Beskrivelse

`isNumeric` afgør, om en given `value` betragtes som numerisk ved at tjekke dens resolverede type op imod
`NUMERIC_TYPES`.

### Anvendelsestilfælde

Brug `isNumeric` til at validere input (f.eks. API-payloads, formularværdier, konfiguration) før du udfører numeriske
operationer, og til konsekvent at acceptere numerisk-lignende typer (såsom `BigInt`) i henhold til `NUMERIC_TYPES`.

> **Bemærkning til TypeScript-brugere:**
>
> `isNumeric` er et prædikat, der returnerer en boolsk værdi; behandl det som et runtime-tjek af, om en værdi tilhører
> det biblioteksdefinerede sæt af numeriske typer.

### Fordele

- Bruger `getTypeOf` sammen med `NUMERIC_TYPES` til at centralisere logikken for registrering af numeriske typer og
  holde tjek konsistente på tværs af en kodebase.
- Returnerer en simpel boolsk værdi (`true`/`false`) for nem forgrening og brug i guard-stil.
- Understøtter flere numeriske repræsentationer (f.eks. `number`, `BigInt`) som defineret af `NUMERIC_TYPES`.

## Brug

### Syntaks

Funktion:

- `isNumeric(value)`

Parametre:

- `value`: Værdien, der skal tjekkes for numerisk type.

### Lokal import af funktion

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v betragtes som numerisk ifølge bibliotekets typeregler
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isNumeric(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Filen blev oprettet den 6 February 2026 at 15:52:15 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>