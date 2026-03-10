# isSymbol

## Descrizione

`isSymbol` determina se un determinato valore è di tipo `symbol`, restituendo `true` per i symbol e `false` altrimenti.

### Caso d’uso

Convalida che un valore `unknown` sia un `symbol` prima di usarlo come identificatore univoco, una chiave di registro o
una chiave di proprietà calcolata in oggetti e mappe.

> **Nota per gli utenti TypeScript:**
>
> Usa `isSymbol` per restringere `unknown` a `symbol` prima di chiamare funzioni correlate ai symbol o di usarlo come
> chiave di proprietà calcolata.

### Vantaggi

- Fornisce un controllo di runtime semplice e affidabile per il tipo primitivo JavaScript `symbol`.
- Aiuta a restringere i valori `unknown` prima di usare API specifiche dei symbol o di memorizzarli come chiavi.
- Evita falsi positivi usando `typeof`, che è il modo canonico per rilevare i valori `symbol`.

## Utilizzo

### Sintassi

Funzione:

- `isSymbol(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input è un simbolo qui
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isSymbol(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 14:27:13 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>