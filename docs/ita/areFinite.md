# areFinite

## Descrizione

`areFinite` verifica se un valore è un array non vuoto i cui elementi sono tutti numeri finiti, restituendo `true` in
tal caso e `false` altrimenti.

### Caso d’uso

Valida array di input numerici (ad es. serie di grafici, liste di coordinate, campioni di misurazione) prima di eseguire
calcoli, assicurando che il risultato sia `true` solo quando tutti i valori sono numeri finiti.

> **Nota per gli utenti TypeScript:**
>
> Usa `areFinite` quando devi assicurarti che un array non sia vuoto e contenga solo numeri finiti; restituisce `false`
> per gli array vuoti e per gli array che contengono `NaN` o infiniti.

### Vantaggi

- Restituisce `true` solo quando l’input è un array non vuoto e ogni elemento è un numero finito.
- Rifiuta `Infinity`, `-Infinity` e `NaN` affidandosi a controlli `isFinite` per ciascun elemento.
- Fornisce un semplice risultato booleano (`true`/`false`) adatto a guardie e flussi di validazione.

## Utilizzo

### Sintassi

Funzione:

- `areFinite(array)`

Parametri:

- `array`: L’array da controllare per verificare che tutti i suoi elementi siano finiti.

### Importazione locale della funzione

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // vero
console.log(areFinite(b)); // falso
console.log(areFinite(c)); // falso

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areFinite(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 16:35:17 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>