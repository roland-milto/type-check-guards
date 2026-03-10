# areStreams

## Beskrivelse

`areStreams` afgør, om en værdi er et udfyldt array, hvor hvert element er en `Stream`.

### Anvendelsestilfælde

Validér brugerleverede eller dynamisk opbyggede samlinger (f.eks. flere fil-læsestreams), før de pipes, genoptages eller
på anden måde behandles samlet.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areStreams` til at validere ukendt input, før det behandles som `Stream[]`; den returnerer kun `true`, når
> værdien er et ikke-tomt array, og hvert element er en `Stream`.

### Fordele

- Sikrer, at et input er et udfyldt array, hvor hvert element er en `Stream`.
- Giver en enkel `true`/`false`-guard til at validere stream-samlinger før behandling.
- Fejler hurtigt: returnerer `false`, så snart et ikke-`Stream`-element findes.
- Hjælper med at forhindre runtime-fejl, når kode antager, at alle elementer er `Stream`-instanser.

## Brug

### Syntaks

Funktion:

- `areStreams(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for Stream-objekter.

### Lokal import af funktion

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input er et udfyldt array af Stream-objekter
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areStreams(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 23:33:22 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>