# isString

## Descrizione

`isString` determina se un determinato valore è una stringa.

### Caso d’uso

Validare l’input utente, i campi del payload API o i valori di configurazione a runtime per assicurarsi che un valore
sia una stringa prima di applicare operazioni sulle stringhe (ad es. trimming, splitting, conversione del
maiuscolo/minuscolo).

> **Nota per gli utenti TypeScript:**
>
> Usa `isString` per validare valori `unknown` o con tipizzazione debole prima di chiamare metodi delle stringhe;
> restituisce `true` solo quando `typeof value === "string"`.

### Vantaggi

- Controllo semplice e veloce usando `typeof`.
- Restituisce un risultato booleano prevedibile: `true` per le stringhe, altrimenti `false`.
- Funziona sia per stringhe vuote sia per stringhe non vuote.
- Utile come guardia leggera a runtime prima di eseguire operazioni specifiche sulle stringhe.

## Utilizzo

### Sintassi

Funzione:

- `isString(value)`

Parametri:

- `value`: Il valore da testare per verificare se è di tipo stringa.

### Importazione locale della funzione

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input è una stringa qui
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isString(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isString](../_analysis/isString.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 13:14:23 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>