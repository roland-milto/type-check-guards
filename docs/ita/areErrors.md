# areErrors

## Descrizione

Verifica se un array è non vuoto e contiene solo oggetti `Error`, restituendo `true` o `false`.

### Caso d’uso

Convalidare che un `unknown[]` fornito a runtime (ad es. errori aggregati, risultati di validazione o dati
deserializzati) sia un elenco non vuoto di oggetti `Error` prima di iterare, registrare o rilanciare.

> **Nota per gli utenti TypeScript:**
>
> `areErrors` restituisce `true` solo per un array pieno in cui ogni elemento è un `Error`; restituisce `false` per un
> array vuoto o se qualsiasi elemento non è un `Error`.

### Vantaggi

- Garantisce che ogni elemento sia un'istanza di `Error`, consentendo una gestione e una registrazione degli errori
  sicure.
- Rifiuta gli array vuoti, impedendo che stati accidentali di “nessun errore” vengano trattati come elenchi di errori
  validi.
- Funziona bene come guardia a runtime quando si gestiscono input `unknown[]` (ad es. da API o da blocchi `catch`).

## Utilizzo

### Sintassi

Funzione:

- `areErrors(array)`

Parametri:

- `array`: L'array da controllare per oggetti `Error`.

### Importazione locale della funzione

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value è un array non vuoto di oggetti Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areErrors(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 12:34:04 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>