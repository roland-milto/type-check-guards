# areValidDates

## Descrizione

Determina se un array è non vuoto ed è composto interamente da oggetti `Date` validi.

### Caso d’uso

Usa `areValidDates` per validare array forniti dall'utente o da un'API prima di eseguire operazioni basate sulle date (
ordinamento, controlli di intervallo, formattazione), assicurando che tutte le voci siano oggetti `Date` reali e validi
e che l'elenco non sia vuoto.

> **Nota per gli utenti TypeScript:**
>
> `areValidDates` restituisce `false` per un array vuoto; assicurati che l'array sia inteso come non vuoto prima di
> farvi affidamento come passaggio di validazione.

### Vantaggi

- Restituisce `true` solo quando ogni elemento è un'istanza valida di `Date` (nessuna data non valida come
  `new Date('invalid')`).
- Rifiuta un input vuoto restituendo `false`, assicurando che tu accetti solo elenchi di date significativi e non vuoti.
- Fornisce un semplice controllo booleano in stile guardia, facile da comporre con altre validazioni.

## Utilizzo

### Sintassi

Funzione:

- `areValidDates(array)`

Parametri:

- `array`: L'array da controllare, che può contenere oggetti `Date`.

### Importazione locale della funzione

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // vero
console.log(areValidDates(b)); // falso
console.log(areValidDates(c)); // falso
console.log(areValidDates(d)); // falso

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areValidDates(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 14:32:17 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>