# areArrays

## Descrizione

`areArrays` determina se un valore è un array bidimensionale pieno i cui elementi sono tutti array.

### Caso d’uso

Usa `areArrays` per convalidare input tabellari o simili a matrici (ad es. righe CSV, dati a griglia o liste
raggruppate) prima di eseguire operazioni su righe/colonne; restituisce `false` se l'input non è un array, è vuoto o
contiene qualsiasi elemento che non sia un array.

> **Nota per gli utenti TypeScript:**
>
> Usa `areArrays` quando devi assicurarti che un valore sia un array 2D non vuoto e che ogni riga sia un array prima di
> iterare o indicizzare in array annidati.

### Vantaggi

- Convalida che l'input sia un array bidimensionale non vuoto in cui ogni elemento è un array.
- Restituisce un semplice risultato booleano (`true`/`false`) adatto per guardie e uscite anticipate.
- Aiuta a prevenire errori a runtime quando il codice successivo presuppone operazioni su array annidati (ad es. mappare
  le righe).

## Utilizzo

### Sintassi

Funzione:

- `areArrays(array)`

Parametri:

- `array`: L'input da controllare.

### Importazione locale della funzione

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value è un array 2D con array come elementi
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areArrays(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 13:40:02 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>