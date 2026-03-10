# isIndexFound

## Descrizione

`isIndexFound` determina se un dato valore è un intero non negativo, indicando che è stato trovato un indice.

### Caso d’uso

Convalidare che un risultato di ricerca rappresenti un indice utilizzabile (intero `>= 0`) prima di indicizzare un array
o una stringa, prevenendo l’uso accidentale di `-1` o di valori non numerici.

> **Nota per gli utenti TypeScript:**
>
> Usa `isIndexFound` dopo operazioni come `indexOf`, `findIndex` o ricerche personalizzate in cui `-1` (o altri valori
> non validi) può indicare “non trovato”. Quando restituisce `true`, il valore è un numero ed è sicuro da usare come
> indice di array/stringa.

### Vantaggi

- Fornisce una semplice guardia di tipo per rilevare se è stato trovato un indice verificando la presenza di un intero
  non negativo.
- Restituisce `true` solo per valori validi simili a un indice (interi `>= 0`), rifiutando negativi, non interi e non
  numeri.
- Aiuta a evitare errori di off-by-one e di valori sentinella quando si lavora con API che restituiscono `-1` per “non
  trovato”.

## Utilizzo

### Sintassi

Funzione:

- `isIndexFound(value)`

Parametri:

- `value`: Il valore da verificare per stabilire se è un intero non negativo.

### Importazione locale della funzione

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx è un numero qui ed è >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Uso tipico con indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isIndexFound(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 00:46:21 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>