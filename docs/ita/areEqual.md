# areEqual

## Descrizione

`areEqual` verifica se tutti gli elementi di un array sono uguali a un determinato valore previsto, restituendo `true`
solo per array non vuoti in cui ogni elemento corrisponde.

### Caso d’uso

Convalidare che una lista contenga solo un singolo valore consentito (ad es., tutti i flag di stato sono `true`, tutti i
ruoli sono `"admin"`, o tutte le voci numeriche sono uguali a una costante richiesta) trattando l'input vuoto come non
valido (`false`).

> **Nota per gli utenti TypeScript:**
>
> Usa `areEqual` quando ti serve un controllo rigoroso su tutti gli elementi; restituisce `false` per array vuoti e per
> qualsiasi input che non sia un array o non sia non vuoto.

### Vantaggi

- Restituisce `true` solo quando ogni elemento corrisponde al valore previsto; altrimenti restituisce `false`.
- Fallisce rapidamente: interrompe il controllo non appena viene trovato un elemento non corrispondente.
- Protegge da input non valido restituendo `false` quando l'input non è un array non vuoto.

## Utilizzo

### Sintassi

Funzione:

- `areEqual(value, expected)`

Parametri:

- `value`: L'array da controllare.
- `expected`: L'elemento con cui confrontare ciascun elemento dell'array.

### Importazione locale della funzione

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areEqual(value, expected)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 23:50:55 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>