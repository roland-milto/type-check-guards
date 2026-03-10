# areStreams

## Descrizione

`areStreams` determina se un valore è un array non vuoto in cui ogni elemento è uno `Stream`.

### Caso d’uso

Validare collezioni fornite dall'utente o costruite dinamicamente (ad es. più stream di lettura di file) prima di
eseguire piping, riprendere lo stream o altrimenti operarci sopra come gruppo.

> **Nota per gli utenti TypeScript:**
>
> Usa `areStreams` per validare un input sconosciuto prima di trattarlo come `Stream[]`; restituisce `true` solo quando
> il valore è un array non vuoto e ogni elemento è uno `Stream`.

### Vantaggi

- Garantisce che un input sia un array non vuoto in cui ogni elemento è uno `Stream`.
- Fornisce una semplice guardia `true`/`false` per validare collezioni di stream prima dell'elaborazione.
- Fallisce rapidamente: restituisce `false` non appena viene trovato un elemento non `Stream`.
- Aiuta a prevenire errori a runtime quando il codice presume che tutti gli elementi siano istanze di `Stream`.

## Utilizzo

### Sintassi

Funzione:

- `areStreams(array)`

Parametri:

- `array`: L'array da controllare per oggetti Stream.

### Importazione locale della funzione

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input è un array popolato di oggetti Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areStreams(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 23:34:13 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>