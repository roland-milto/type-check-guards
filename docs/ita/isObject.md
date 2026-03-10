# isObject

## Descrizione

Determina se un dato `value` è un `object` (escludendo `null`).

### Caso d’uso

Usa `isObject` per validare input sconosciuti (ad es. JSON parsato, risposte API, payload di eventi) prima di accedere
alle proprietà, assicurandoti che il valore sia un oggetto e non `null`.

> **Nota per gli utenti TypeScript:**
>
> `isObject` è una guardia a runtime che restituisce un booleano; non restringe a una forma specifica dell'oggetto.
> Combinala con controlli aggiuntivi (ad es. esistenza di proprietà) quando hai bisogno di una tipizzazione più forte.

### Vantaggi

- Restituisce `true` solo per valori non `null` il cui `typeof` è `"object"`.
- Previene il comune tranello di JavaScript in cui `null` verrebbe altrimenti trattato come un oggetto.
- Funziona per oggetti semplici e istanze di oggetti integrati (ad es. `Date`, `RegExp`).
- Controllo a runtime semplice e veloce, adatto alla programmazione difensiva e alla validazione degli input.

## Utilizzo

### Sintassi

Funzione:

- `isObject(value)`

Parametri:

- `value`: Il valore da verificare per stabilire se è un `object`.

### Importazione locale della funzione

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input è un oggetto non nullo in fase di esecuzione
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isObject(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isObject](../_analysis/isObject.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 00:18:53 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>