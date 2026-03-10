# isWeakSet

## Descrizione

Determina se il `value` fornito è un `WeakSet` di oggetti.

### Caso d’uso

Usa `isWeakSet` quando accetti input non tipizzato (ad es. da API esterne, configurazione dinamica o valori `unknown`) e
devi verificare che sia un `WeakSet` prima di usare operazioni specifiche di `WeakSet`.

> **Nota per gli utenti TypeScript:**
>
> Usa `isWeakSet` per restringere a runtime un valore `unknown` a `WeakSet<object>`; nota che `WeakSet` può contenere
> solo riferimenti a oggetti.

### Vantaggi

- Fornisce un semplice controllo a runtime per verificare se un valore è un `WeakSet`.
- Aiuta a prevenire errori di tipo assicurando che solo le istanze di `WeakSet` vengano trattate come tali.
- Funziona con qualsiasi input `unknown` e restituisce un chiaro risultato booleano (`true`/`false`).

## Utilizzo

### Sintassi

Funzione:

- `isWeakSet(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // vero
console.log(isWeakSet(b)); // falso

if (isWeakSet(a)) {
  // a è un WeakSet in fase di esecuzione
}
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isWeakSet(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 14:15:12 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>