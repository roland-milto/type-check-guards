# isOfType

## Descrizione

Determina se un determinato `value` corrisponde a una stringa di tipo specificata, usando `typeof` per i primitivi e un
fallback per i tipi complessi.

### Caso d’uso

Convalidare e restringere input `unknown` (ad es. risposte API, input utente, JSON analizzato) verificando se un valore
è di una stringa di tipo attesa prima di eseguire operazioni specifiche per quel tipo.

> **Nota per gli utenti TypeScript:**
>
> Usa `isOfType` per diramare in base ai tipi a runtime quando lavori con valori `unknown`; restituisce `true`/`false` e
> tratta esplicitamente `null` e `undefined`.

### Vantaggi

- Verifica i tipi primitivi tramite `typeof` diretto per velocità e chiarezza.
- Gestisce correttamente `null` e `undefined`, che `typeof` da solo non può distinguere come previsto.
- Supporta stringhe di tipo complesse o personalizzate tramite un confronto di fallback usando `getTypeOf`.
- Restituisce un semplice risultato booleano (`true`/`false`) adatto a guardie e diramazioni.

## Utilizzo

### Sintassi

Funzione:

- `isOfType(value, type)`

Parametri:

- `value`: Il valore da testare rispetto a `type`.
- `type`: La rappresentazione in stringa del tipo rispetto a cui verificare.

### Importazione locale della funzione

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input è un numero qui
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input è una stringa qui
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isOfType(value, type)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 17:00:17 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>