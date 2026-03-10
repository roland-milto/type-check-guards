# areOfType

## Beskrivelse

Sjekker om alle elementer i den gitte `array` er av den angitte `type`.

### Brukstilfelle

Bruk `areOfType` til å validere ukjent input (f.eks. parsede JSON-data, API-payloads, brukerinput) før du utfører
typespesifikke operasjoner på hvert element i en array.

> **Merknad for TypeScript-brukere:**
>
> Fordi `areOfType` er en type guard, snevrer TypeScript inn arrayen inne i en `if (areOfType(...)) {}`-blokk til
`Array<DataTypeOf<T>>`.

### Fordeler

- Gir en TypeScript-type guard: når den returnerer `true`, snevres input inn til `Array<DataTypeOf<T>>`.
- Validerer hvert element mot den forespurte runtime-typen, og hindrer at arrayer med blandede typer slipper gjennom.
- Feiler raskt: returnerer `false` så snart et element som ikke matcher blir funnet.
- Avviser ikke-arrayer og tomme arrayer med hensikt (avhenger av `isFilledArray`).

## Bruk

### Syntaks

Funksjon:

- `areOfType(array, type)`

Parametere:

- `array`: Arrayen som skal sjekkes.
- `type`: Typen som skal sjekkes mot hvert element i arrayen.

### Lokal funksjonsimport

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values er no number[] no
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areOfType(array, type)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 17:10:43 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>