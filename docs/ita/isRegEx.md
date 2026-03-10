# isRegEx

## Descrizione

Determina se un valore fornito è un'istanza di `RegExp`.

### Caso d’uso

Convalidare valori forniti dall'utente o dinamici (ad es. configurazione, payload API, input di plugin) prima di
trattarli come un'espressione regolare.

> **Nota per gli utenti TypeScript:**
>
> Usa `isRegEx` per restringere valori `unknown` (o unioni) prima di usare proprietà o metodi specifici di RegExp;
> restituisce `true` solo per valori che sono istanze di `RegExp`.

### Vantaggi

- Fornisce una semplice guardia di tipo a runtime per verificare se un valore è un `RegExp`.
- Aiuta a prevenire errori quando il codice si aspetta un'espressione regolare (ad es. prima di chiamare `test`, `exec`
  o leggere `source`).
- Funziona sia con i letterali regex sia con le istanze create tramite `new RegExp(...)`.
- Restituisce un chiaro risultato booleano (`true`/`false`) senza generare eccezioni per input non regex.

## Utilizzo

### Sintassi

Funzione:

- `isRegEx(value)`

Parametri:

- `value`: Il valore da verificare.

### Importazione locale della funzione

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input è una RegExp qui
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isRegEx(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 23:29:44 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>