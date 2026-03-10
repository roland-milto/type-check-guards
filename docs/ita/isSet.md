# isSet

## Descrizione

Determina se un determinato valore è un `Set`.

### Caso d’uso

Convalida gli input provenienti da fonti esterne (ad es. parsing JSON, input utente o API di terze parti) per
assicurarti che un valore sia un `Set` prima di eseguire operazioni su `Set`.

> **Nota per gli utenti TypeScript:**
>
> Usa `isSet` per restringere valori `unknown` prima di chiamare API specifiche di `Set` come `.add`, `.has` o `.size`.

### Vantaggi

- Fornisce un semplice controllo a runtime per confermare se un valore è un `Set`.
- Aiuta a prevenire errori di tipo consentendo una diramazione anticipata quando un valore non è un `Set`.
- Funziona con qualsiasi contenuto di `Set` (vuoto o popolato) e restituisce `true`/`false` in modo coerente.

## Utilizzo

### Sintassi

Funzione:

- `isSet(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a è un Set in fase di esecuzione
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isSet(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isSet](../_analysis/isSet.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 23:10:02 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>