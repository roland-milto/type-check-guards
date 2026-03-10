# isEmpty

## Descrizione

Determina se un determinato valore è vuoto, restituendo `true` per `null`, `undefined`, stringhe vuote/composte solo da
spazi, array vuoti, `Map`/`Set` vuoti o oggetti senza proprietà enumerabili proprie.

### Caso d’uso

Usa `isEmpty` per validare gli input e rilevare valori mancanti/vuoti su più tipi di dati (ad es. campi di form, payload
API, oggetti di configurazione) in cui `null`, `undefined`, stringhe di soli spazi, collezioni vuote e oggetti senza
proprietà dovrebbero essere trattati come vuoti.

> **Nota per gli utenti TypeScript:**
>
> `isEmpty` è un'utilità che restituisce un booleano (non un predicato di tipo TypeScript), quindi non restringe i tipi
> da sola; usala per validazione/diramazione piuttosto che per il narrowing in fase di compilazione.

### Vantaggi

- Tratta `null` e `undefined` come `true` nei controlli di vuotezza.
- Considera vuote le stringhe composte solo da spazi, effettuando il trim prima di verificare la lunghezza.
- Supporta i tipi contenitore comuni (array, `Map`, `Set`) e gli oggetti semplici senza proprietà enumerabili proprie.
- Evita di contare le proprietà ereditate usando controlli `hasOwnProperty`.
- Restituisce un semplice risultato booleano (`true`/`false`) adatto per guardie e validazione.

## Utilizzo

### Sintassi

Funzione:

- `isEmpty(value)`

Parametri:

- `value`: Il valore da controllare per la vuotezza.

### Importazione locale della funzione

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isEmpty(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 16:19:01 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>