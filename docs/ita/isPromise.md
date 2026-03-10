# isPromise

## Descrizione

Determina se un dato valore è una `Promise`.

### Caso d’uso

Usa `isPromise` per validare input sconosciuti prima di trattarli come una `Promise`, ad esempio quando gestisci valori
restituiti da plugin, import dinamici o API con tipizzazione debole.

> **Nota per gli utenti TypeScript:**
>
> `isPromise` verifica tramite `instanceof Promise`, quindi restituisce `true` solo per vere istanze di `Promise` (non
> per thenable generici).

### Vantaggi

- Fornisce un semplice controllo a runtime per verificare se un valore è una `Promise`.
- Aiuta a proteggere i percorsi di codice che richiedono una vera istanza di `Promise`, restituendo `true` o `false` in
  modo prevedibile.
- Evita falsi positivi da oggetti “thenable” (ad es. `{ then() {} }`) richiedendo un'istanza reale di `Promise`.

## Utilizzo

### Sintassi

Funzione:

- `isPromise(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // vero
console.log(isPromise(b)); // falso
console.log(isPromise(123)); // falso
console.log(isPromise(null)); // falso

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isPromise(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 23:53:10 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>