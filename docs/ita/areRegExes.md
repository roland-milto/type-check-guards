# areRegExes

## Descrizione

`areRegExes` verifica se un valore è un array valorizzato che contiene solo oggetti `RegExp`.

### Caso d’uso

Valida che un'opzione di configurazione (ad es. un elenco di pattern di allow/deny) sia un array non vuoto di
espressioni regolari prima di usarla per il matching.

> **Nota per gli utenti TypeScript:**
>
> Usa `areRegExes` per restringere `unknown` a `RegExp[]` prima di iterare o comporre i pattern.

### Vantaggi

- Garantisce che un valore sia un array non vuoto in cui ogni elemento è un'istanza di `RegExp`.
- Fornisce una semplice guardia booleana (`true`/`false`) per validare l'input dell'utente o la configurazione.
- Aiuta a prevenire errori a runtime quando il codice successivo presume che tutti gli elementi supportino operazioni
  con espressioni regolari.

## Utilizzo

### Sintassi

Funzione:

- `areRegExes(array)`

Parametri:

- `array`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns è un array di RegExp qui
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areRegExes(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 23:19:07 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>