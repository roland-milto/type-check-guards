# areStreams

## Popis

`areStreams` určuje, či je hodnota neprázdne pole, v ktorom je každý prvok `Stream`.

### Prípad použitia

Overte kolekcie poskytnuté používateľom alebo dynamicky zostavené kolekcie (napr. viacero streamov na čítanie súborov)
pred ich pipeovaním, pokračovaním (resume) alebo inými operáciami so skupinou.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areStreams` na overenie neznámeho vstupu predtým, než s ním budete narábať ako s `Stream[]`; vráti `true` iba
> vtedy, keď je hodnota neprázdne pole a každý prvok je `Stream`.

### Výhody

- Zabezpečuje, že vstup je neprázdne pole, v ktorom je každý prvok `Stream`.
- Poskytuje jednoduchú ochranu `true`/`false` na overenie kolekcií streamov pred spracovaním.
- Zlyhá rýchlo: vráti `false` hneď, ako sa nájde prvok, ktorý nie je `Stream`.
- Pomáha predchádzať chybám za behu, keď kód predpokladá, že všetky položky sú inštancie `Stream`.

## Použitie

### Syntax

Funkcia:

- `areStreams(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na objekty Stream.

### Lokálny import funkcie

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input je naplnené pole objektov Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areStreams(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 23:35:34 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>