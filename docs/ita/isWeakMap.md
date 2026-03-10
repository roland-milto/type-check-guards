# isWeakMap

## Descrizione

Determina se un dato `value` è un’istanza di `WeakMap`.

### Caso d’uso

Usa `isWeakMap` quando accetti un valore `unknown` (ad es. da una API pubblica, un sistema di plugin o una
configurazione dinamica) e devi verificare che sia un `WeakMap` prima di usare comportamenti specifici di `WeakMap`.

> **Nota per gli utenti TypeScript:**
>
> `isWeakMap` esegue un controllo `instanceof WeakMap`; è una guardia a runtime che restituisce `true` solo per istanze
> effettive di `WeakMap`.

### Vantaggi

- Semplice controllo a runtime per verificare se un valore è un `WeakMap`.
- Aiuta a prevenire l’uso improprio di API che richiedono un `WeakMap` restituendo `true`/`false` invece di lanciare
  un’eccezione.
- Funziona con input `unknown`, rendendolo comodo ai confini del modulo (ad es. parsing, dati esterni o codice non
  tipizzato).

## Utilizzo

### Sintassi

Funzione:

- `isWeakMap(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a è una WeakMap in fase di esecuzione
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isWeakMap(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 13:25:27 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>