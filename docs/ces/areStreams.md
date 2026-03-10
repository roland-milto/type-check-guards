# areStreams

## Popis

`areStreams` určuje, zda je hodnota neprázdné pole, ve kterém je každý prvek `Stream`.

### Případ použití

Ověřte kolekce poskytnuté uživatelem nebo dynamicky sestavené kolekce (např. více streamů pro čtení souborů) před jejich
pipeováním, obnovením (resume) nebo jinými operacemi se skupinou.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areStreams` k ověření neznámého vstupu před tím, než s ním budete zacházet jako s `Stream[]`; vrací `true`
> pouze tehdy, když je hodnota neprázdné pole a každý prvek je `Stream`.

### Výhody

- Zajišťuje, že vstup je neprázdné pole, kde každý prvek je `Stream`.
- Poskytuje jednoduchou ochranu `true`/`false` pro ověření kolekcí streamů před zpracováním.
- Selže rychle: vrátí `false` hned, jakmile je nalezen prvek, který není `Stream`.
- Pomáhá předcházet chybám za běhu, když kód předpokládá, že všechny položky jsou instance `Stream`.

## Použití

### Syntaxe

Funkce:

- `areStreams(array)`

Parametry:

- `array`: Pole, které se má zkontrolovat na objekty Stream.

### Lokální import funkce

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input je naplněné pole objektů Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areStreams(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 23:33:07 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>