# areSets

## Descrizione

Verifica se un dato array non vuoto contiene solo istanze di `Set`, restituendo `true` in tal caso e `false` altrimenti.

### Caso d’uso

Convalidare che un valore (ad es. da input utente, parsing JSON o API esterne) sia un array non vuoto di oggetti `Set`
prima di elaborare ciascun set.

> **Nota per gli utenti TypeScript:**
>
> Usa `areSets` per validare input sconosciuti prima di iterare e chiamare le API di `Set` (ad es. `.size`, `.has`,
`.add`) su ciascun elemento.

### Vantaggi

- Restituisce `true` solo quando l’input è un array non vuoto e ogni elemento è un’istanza di `Set`.
- Previene falsi positivi per gli array vuoti restituendo `false` quando l’array non contiene elementi.
- Utile come guardia a runtime prima di eseguire operazioni specifiche di `Set` su ciascun elemento.

## Utilizzo

### Sintassi

Funzione:

- `areSets(array)`

Parametri:

- `array`: L’array da verificare per la presenza di istanze di `Set`.

### Importazione locale della funzione

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a è un array di istanze di Set in fase di esecuzione
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // falso
console.log(areSets(c)); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areSets(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areSets](../_analysis/areSets.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 23:13:53 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>