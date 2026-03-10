# areObjects

## Descrizione

`areObjects` verifica se un array non vuoto fornito contiene solo oggetti.

### Caso d’uso

Usa `areObjects` quando ricevi un array sconosciuto (ad es. dal parsing JSON o da API esterne) e devi assicurarti che
non sia vuoto e che ogni elemento sia un oggetto prima di iterare e accedere alle proprietà dell'oggetto.

> **Nota per gli utenti TypeScript:**
>
> Usa `areObjects` per validare `unknown[]` prima di trattare gli elementi come oggetti; restituisce `false` per gli
> array vuoti.

### Vantaggi

- Restituisce `true` solo quando l'input è un array non vuoto e ogni elemento è un oggetto.
- Si interrompe in anticipo e restituisce `false` non appena viene trovato un elemento che non è un oggetto.
- Aiuta a validare input sconosciuti prima di eseguire operazioni specifiche sugli oggetti.

## Utilizzo

### Sintassi

Funzione:

- `areObjects(array)`

Parametri:

- `array`: L'array da controllare per verificare che contenga elementi oggetto.

### Importazione locale della funzione

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value è un array popolato di oggetti
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areObjects(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 00:09:07 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>