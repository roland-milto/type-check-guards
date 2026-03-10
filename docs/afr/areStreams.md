# areStreams

## Beskrywing

`areStreams` bepaal of ’n waarde ’n gevulde skikking is waarin elke element ’n `Stream` is.

### Gebruikscenario

Valideer gebruiker-verskafte of dinamies saamgestelde versamelings (bv. veelvuldige lêerleesstrome) voordat dit gepyp,
hervat, of andersins as ’n groep bedryf word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areStreams` om onbekende invoer te valideer voordat dit as `Stream[]` behandel word; dit gee slegs `true`
> terug wanneer die waarde ’n nie-leë skikking is en elke element ’n `Stream` is.

### Voordele

- Verseker dat ’n invoer ’n gevulde skikking is waar elke element ’n `Stream` is.
- Bied ’n eenvoudige `true`/`false`-wag vir die validering van stroomversamelings voordat dit verwerk word.
- Misluk vinnig: gee `false` terug sodra ’n nie-`Stream`-element gevind word.
- Help om looptydfoute te voorkom wanneer kode aanvaar dat alle items `Stream`-instansies is.

## Gebruik

### Sintaksis

Funksie:

- `areStreams(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir Stream-objekte.

### Plaaslike funksie-invoer

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // invoer is 'n gevulde skikking van Stroom-objekte
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areStreams(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 23:32:45 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>