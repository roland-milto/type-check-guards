# getTypeOf

## Descrizione

`getTypeOf` restituisce un’etichetta di tipo dettagliata e leggibile dall’uomo per un dato valore, includendo tipi
numerici raffinati e specifiche categorie di oggetti.

### Caso d’uso

Usa `getTypeOf` per normalizzare il rilevamento dei tipi nella validazione degli input e nella diagnostica—ad esempio,
per rifiutare `nan`, accettare solo ID `integer`, trattare le stringhe numeriche come `decimal` in modo diverso da una
semplice `string`, oppure per registrare con precisione categorie di oggetti come `date` e `regexp`.

> **Nota per gli utenti TypeScript:**
>
> Il tipo di ritorno è `DataTypeAsString | string`. Trattalo come un’etichetta descrittiva; confrontalo con letterali
> noti come `integer`, `float`, `nan`, `array`, `null` e `undefined` quando fai branching.

### Vantaggi

- Restituisce una stringa di tipo più granulare rispetto al `typeof` di JavaScript, includendo sottotipi numerici come
  `integer`, `float` e `nan`.
- Distingue esplicitamente `null` e `undefined` come `null` e `undefined`.
- Rileva i formati comuni di stringhe numeriche e li segnala come `binary`, `octal`, `decimal` o `hexadecimal` invece di
  una semplice `string`.
- Identifica gli array come `array` e usa `Object.prototype.toString` per fornire nomi specifici dei tipi di oggetto (ad
  es. `date`, `regexp`, `map`, `set`).
- Utile per validazione, logging e debugging quando servono etichette di tipo coerenti e leggibili dall’uomo.

## Utilizzo

### Sintassi

Funzione:

- `getTypeOf(value)`

Parametri:

- `value`: Il valore per il quale determinare il tipo di dato.

### Importazione locale della funzione

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Controlli di esempio
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.getTypeOf(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 13:07:07 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>