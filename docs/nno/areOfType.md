# areOfType

## Skildring

Sjekkar om alle element i den gjevne `array` er av den spesifiserte `type`.

### Brukstilfelle

Bruk `areOfType` til å validere ukjend inndata (t.d. tolka JSON, API-nyttelaster, brukarinnspel) før du utfører
typespesifikke operasjonar på kvart element i ein tabell.

> **Merknad for TypeScript-brukarar:**
>
> Fordi `areOfType` er ein typevakt, snevrar TypeScript inn tabellen inne i ein `if (areOfType(...)) {}`-blokk til
`Array<DataTypeOf<T>>`.

### Fordelar

- Gjev ein TypeScript-typevakt: når han returnerer `true`, blir inndata snevra inn til `Array<DataTypeOf<T>>`.
- Validerer kvart element mot den førespurde køyretidstypen, og hindrar at tabellar med blanda typar slepp gjennom.
- Feilar raskt: returnerer `false` så snart eit element som ikkje samsvarar blir funne.
- Avviser ikkje-tabellar og tomme tabellar med vilje (avheng av `isFilledArray`).

## Bruk

### Syntaks

Funksjon:

- `areOfType(array, type)`

Parameter:

- `array`: Tabellen som skal sjekkast.
- `type`: Typen som skal sjekkast mot kvart element i tabellen.

### Lokal funksjonsimport

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values er no number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areOfType(array, type)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 17:10:44 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>