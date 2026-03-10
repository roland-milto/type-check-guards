# areStreams

## Beschrijving

`areStreams` bepaalt of een waarde een gevulde array is waarin elk element een `Stream` is.

### Use case

Valideer door gebruikers aangeleverde of dynamisch opgebouwde collecties (bijv. meerdere file read streams) voordat je
ze pipe’t, hervat of er anderszins als groep op opereert.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areStreams` om onbekende invoer te valideren voordat je het als `Stream[]` behandelt; het retourneert alleen
`true` wanneer de waarde een niet-lege array is en elk element een `Stream` is.

### Voordelen

- Zorgt ervoor dat een invoer een gevulde array is waarin elk element een `Stream` is.
- Biedt een eenvoudige `true`/`false`-guard om streamcollecties te valideren vóór verwerking.
- Faalt snel: retourneert `false` zodra een niet-`Stream`-element wordt gevonden.
- Helpt runtimefouten te voorkomen wanneer code ervan uitgaat dat alle items `Stream`-instanties zijn.

## Gebruik

### Syntax

Functie:

- `areStreams(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op Stream-objecten.

### Lokale functie-import

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input is een gevulde array van Stream-objecten
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areStreams(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 23:34:55 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>