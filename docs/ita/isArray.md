# isArray

## Descrizione

`isArray` verifica se un determinato valore è un array e restituisce `true` se lo è, altrimenti `false`.

### Caso d’uso

Convalidare dati sconosciuti (ad es. JSON analizzato o risposte API) per assicurarsi che un valore sia un array prima di
iterare, indicizzare o accedere a `.length`.

> **Nota per gli utenti TypeScript:**
>
> Usa `isArray` quando ti serve un controllo a runtime per gli array; restituisce un booleano ed è sicuro da chiamare
> con valori `unknown`.

### Vantaggi

- Utilizza la funzione integrata `Array.isArray` per un rilevamento affidabile degli array tra contesti (ad es. iframe).
- Restituisce un semplice risultato booleano (`true`/`false`) adatto per guardie e logica di diramazione.
- Funziona con qualsiasi tipo di input perché il parametro è `unknown`.

## Utilizzo

### Sintassi

Funzione:

- `isArray(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input è un array in fase di esecuzione
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isArray(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isArray](../_analysis/isArray.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 11:30:50 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>