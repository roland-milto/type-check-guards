# isUndefined

## Descrizione

Verifica se un determinato valore è `undefined`.

### Caso d’uso

Usa `isUndefined` per proteggere input opzionali, rilevare proprietà mancanti o distinguere tra “non fornito” (
`undefined`) e “esplicitamente vuoto” (`null`).

> **Nota per gli utenti TypeScript:**
>
> Usa `isUndefined` quando devi rilevare specificamente `undefined` (non `null`). È sicuro perché si basa su
`typeof value === "undefined"`.

### Vantaggi

- Fornisce un controllo chiaro ed esplicito per `undefined` usando `typeof`, evitando casi limite con variabili non
  dichiarate.
- Restituisce un semplice risultato booleano (`true`/`false`) adatto a guardie, ramificazioni e logica di validazione.
- Aiuta a distinguere `undefined` da altri valori “vuoti” come `null`, `0`, `""` o `NaN`.

## Utilizzo

### Sintassi

Funzione:

- `isUndefined(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x è undefined qui
} else {
  // x non è undefined qui
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isUndefined(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 14:03:08 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>