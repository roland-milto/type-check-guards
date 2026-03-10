# areArrays

## Beskrivning

`areArrays` avgör om ett värde är en fylld tvådimensionell array vars objekt alla är arrayer.

### Användningsfall

Använd `areArrays` för att validera tabell- eller matrisliknande indata (t.ex. CSV-rader, rutnätsdata eller grupperade
listor) innan du utför rad-/kolumnoperationer; den returnerar `false` om indata inte är en array, är tom eller
innehåller något element som inte är en array.

> **Notis för TypeScript-användare:**
>
> Använd `areArrays` när du behöver säkerställa att ett värde är en icke-tom 2D-array och att varje rad är en array
> innan du itererar över eller indexerar i nästlade arrayer.

### Fördelar

- Validerar att indata är en icke-tom tvådimensionell array där varje element är en array.
- Returnerar ett enkelt booleskt resultat (`true`/`false`) som passar för guards och tidiga avbrott.
- Hjälper till att förhindra körningsfel när senare kod förutsätter nästlade array-operationer (t.ex. att mappa rader).

## Användning

### Syntax

Funktion:

- `areArrays(array)`

Parametrar:

- `array`: Indata som ska kontrolleras.

### Lokal funktionsimport

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value är en 2D-array med arrayer som element
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areArrays(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Filen skapades 6 February 2026 at 13:41:37 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>