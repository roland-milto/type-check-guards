# isFilledArray

## Descrizione

Verifica se `value` è un array con almeno un elemento, restituendo `true` o `false`.

### Caso d’uso

Usa `isFilledArray` per validare i dati in ingresso (ad es. payload API, valori di form, configurazione) prima di
iterare, accedere al primo elemento o applicare logiche che richiedono almeno un elemento.

> **Nota per gli utenti TypeScript:**
>
> `isFilledArray` è una guardia a runtime che restituisce un booleano; non restringe i tipi degli elementi oltre a
> confermare che l'array non è vuoto.

### Vantaggi

- Controllo semplice e veloce per un array non vuoto usando `Array.isArray` e un controllo sulla lunghezza.
- Aiuta a evitare errori a runtime quando il codice presume che un array abbia almeno un elemento.
- Risultato booleano chiaro: restituisce `true` per array non vuoti e `false` altrimenti.

## Utilizzo

### Sintassi

Funzione:

- `isFilledArray(value)`

Parametri:

- `value`: Il valore da verificare per determinare se è un array non vuoto.

### Importazione locale della funzione

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input è un array non vuoto in fase di esecuzione
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isFilledArray(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 11:47:32 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>