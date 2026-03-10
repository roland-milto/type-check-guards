# isNull

## Descrizione

Determina se il `value` fornito è `null`.

### Caso d’uso

Usa `isNull` per validare input o campi del payload API in cui `null` è un valore sentinella significativo e deve essere
gestito in modo diverso rispetto a `undefined` o ad altri valori.

> **Nota per gli utenti TypeScript:**
>
> Usa `isNull` quando devi distinguere `null` da `undefined` e da altri valori falsy; restituisce `true` solo per
`null`.

### Vantaggi

- Fornisce un controllo preciso per `null` senza confonderlo con `undefined`.
- Funziona in modo affidabile con qualsiasi tipo di input perché accetta `unknown`.
- Semplice, veloce e privo di effetti collaterali; restituisce solo `true` o `false`.

## Utilizzo

### Sintassi

Funzione:

- `isNull(value)`

Parametri:

- `value`: Il valore da controllare per `null`.

### Importazione locale della funzione

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a è null qui
}
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isNull(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isNull](../_analysis/isNull.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 15:39:35 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>