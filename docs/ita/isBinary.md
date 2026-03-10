# isBinary

## Descrizione

`isBinary` determina se un valore è una stringa binaria (facoltativamente con prefisso `0b`/`0B`) e restituisce `true` o
`false`.

### Caso d’uso

Convalida stringhe fornite dall'utente (ad es. campi di modulo, argomenti CLI, valori di configurazione) per assicurarti
che rappresentino solo cifre binarie, opzionalmente con un prefisso `0b`/`0B`, prima di ulteriori elaborazioni.

> **Nota per gli utenti TypeScript:**
>
> Usa `isBinary` come type guard prima di analizzare o convertire una stringa in `BigInt`/`Number` per evitare input non
> validi.

### Vantaggi

- Accetta stringhe binarie con o senza il prefisso `0b`/`0B`.
- Rifiuta stringhe vuote e stringhe con spazi bianchi iniziali/finali (ASCII ≤ 32).
- Restituisce `true`/`false` senza lanciare eccezioni, rendendolo sicuro per input sconosciuti.

## Utilizzo

### Sintassi

Funzione:

- `isBinary(value)`

Parametri:

- `value`: Il valore da verificare.

### Importazione locale della funzione

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // vero
const b = isBinary("1010");   // vero
const c = isBinary("0b1020"); // falso
const d = isBinary(0b1010);     // falso

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isBinary(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 23:10:11 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>