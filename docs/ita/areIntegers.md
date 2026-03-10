# areIntegers

## Descrizione

`areIntegers` determina se tutti gli elementi in un dato array sono interi, restituendo `true` se lo sono e `false` in
caso contrario.

### Caso d’uso

Usa `areIntegers` per validare dati forniti dall'utente o esterni (ad es. parametri di query, payload JSON, righe CSV)
quando la tua logica richiede un elenco pieno di valori interi come ID, contatori, offset di paginazione o indici di
array.

> **Nota per gli utenti TypeScript:**
>
> Usa `areIntegers` come guardia runtime per input `unknown[]` prima di trattarli come `number[]` contenenti solo
> interi. Se restituisce `false`, l'input o non è un array pieno oppure contiene almeno un valore non intero.

### Vantaggi

- Restituisce `true` solo quando ogni elemento è un intero; altrimenti restituisce `false`.
- Aiuta a validare input sconosciuti prima di eseguire operazioni consentite solo con interi (ad es. indicizzazione,
  conteggi, ID).
- Fallisce rapidamente: interrompe il controllo non appena viene trovato un elemento non intero.

## Utilizzo

### Sintassi

Funzione:

- `areIntegers(array)`

Parametri:

- `array`: L'array da controllare per verificare la presenza di elementi interi.

### Importazione locale della funzione

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // vero
console.log(areIntegers(b)); // vero
console.log(areIntegers(c)); // falso

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areIntegers(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 00:58:58 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>