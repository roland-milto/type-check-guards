# isStream

## Descrizione

`isStream` verifica se un determinato valore è un oggetto stream (simile a stream di Node.js, `ReadableStream` o
`WritableStream`).

### Caso d’uso

Convalidare input che possono essere sia oggetti semplici sia stream (ad es. caricamenti di file, corpi HTTP o pipeline
di elaborazione) e diramare la logica in base al fatto che il valore sia una stream.

> **Nota per gli utenti TypeScript:**
>
> Usa `isStream` per restringere `unknown` prima di chiamare metodi delle stream; riconosce oggetti simili a stream di
> Node.js (tramite `pipe`/`on`) e i Web Streams (`ReadableStream`/`WritableStream`) quando tali globali esistono.

### Vantaggi

- Rileva in modo sicuro i comuni oggetti simili a stream di Node.js verificando la presenza delle funzioni `pipe` e
  `on`.
- Supporta anche i Web Streams riconoscendo `ReadableStream` e `WritableStream` quando disponibili.
- Restituisce un semplice risultato booleano (`true`/`false`) adatto a guardie e logica di diramazione.

## Utilizzo

### Sintassi

Funzione:

- `isStream(value)`

Parametri:

- `value`: Il valore da verificare.

### Importazione locale della funzione

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream è simile a uno stream; puoi usare in sicurezza le API comuni degli stream
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isStream(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isStream](../_analysis/isStream.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 23:40:24 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>