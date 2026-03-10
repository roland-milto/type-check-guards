# isDate

## Descrizione

`isDate` determina se un valore fornito è un `Date`, restituendo `true` per le istanze di `Date` e `false` altrimenti.

### Caso d’uso

Validare e restringere valori sconosciuti (ad es. dati di richiesta, valori di configurazione o JSON parsato) prima di
eseguire operazioni su `Date` come formattazione, confronti o chiamare `toISOString()`.

> **Nota per gli utenti TypeScript:**
>
> Usa `isDate` per restringere `unknown` a `Date` a runtime; restituisce `true` solo per vere istanze di `Date` (non per
> stringhe di data).

### Vantaggi

- Fornisce una semplice guardia a runtime per verificare se un valore è un `Date`.
- Aiuta a prevenire errori di tipo assicurando che solo le istanze di `Date` superino la validazione.
- Utile per validare input sconosciuti (ad es. payload API) prima di usare metodi specifici per le date.

## Utilizzo

### Sintassi

Funzione:

- `isDate(value)`

Parametri:

- `value`: Il valore da controllare per il tipo `Date`.

### Importazione locale della funzione

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input è una Date qui
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isDate(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isDate](../_analysis/isDate.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 15:37:47 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>