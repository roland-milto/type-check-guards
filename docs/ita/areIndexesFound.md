# areIndexesFound

## Descrizione

`areIndexesFound` verifica se un valore è un array non vuoto i cui elementi sono tutti indici validi, restituendo `true`
se lo sono e `false` altrimenti.

### Caso d’uso

Validare dati forniti dall’utente o esterni (ad es. JSON parsato) che ci si aspetta siano una lista di indici prima di
usarli per accedere o effettuare slice di array.

> **Nota per gli utenti TypeScript:**
>
> Usa `areIndexesFound` per validare input sconosciuti prima di trattarne gli elementi come indici di array; restituisce
`false` per array vuoti e per array che contengono valori che non sono indici.

### Vantaggi

- Restituisce `true` solo quando l’input è un array non vuoto e ogni elemento è un indice valido.
- Fallisce rapidamente: restituisce `false` non appena viene incontrato un elemento che non è un indice.
- Utile come guardia prima di usare i valori come posizioni o offset di un array.

## Utilizzo

### Sintassi

Funzione:

- `areIndexesFound(array)`

Parametri:

- `array`: L’array da verificare per la conformità agli indici.

### Importazione locale della funzione

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // vero
console.log(areIndexesFound(b)); // falso
console.log(areIndexesFound(c)); // falso

if (areIndexesFound(a)) {
  // Qui, `a` è confermato essere un array di indici riempito.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areIndexesFound(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 00:42:16 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>