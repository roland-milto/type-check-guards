# areNull

## Descrizione

Verifica se tutti gli elementi nell'`array` fornito sono `null`.

### Caso d’uso

Convalida che una colonna di un dataset, un elenco di campi API o un array segnaposto contenga solo valori `null` prima
di applicare logica che presuppone che tutte le voci siano intenzionalmente vuote.

> **Nota per gli utenti TypeScript:**
>
> Usa `areNull` quando ti serve un controllo rigoroso che un input sia un array non vuoto e che ogni elemento sia
> esattamente `null` (non `undefined`, non valori falsy).

### Vantaggi

- Restituisce `true` solo quando ogni elemento è `null`, rendendolo una guardia rigorosa “tutti corrispondono”.
- Rifiuta i non-array e gli array vuoti restituendo `false`, prevenendo risultati truthy accidentali su input non
  validi.
- Funziona bene come controllo di precondizione prima di elaborare dati che devono essere interamente `null`.

## Utilizzo

### Sintassi

Funzione:

- `areNull(array)`

Parametri:

- `array`: L'array di input da controllare per elementi `null`.

### Importazione locale della funzione

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // vero
const allNullB = areNull(b); // falso

const notAnArray = areNull(123 as unknown as unknown[]); // falso
const empty = areNull([]); // falso

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areNull(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areNull](../_analysis/areNull.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 15:43:46 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>