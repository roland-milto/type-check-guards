# areNullOrUndefined

## Descrizione

Verifica se tutti gli elementi nell'array fornito sono `null` o `undefined`.

### Caso d’uso

Convalida che un elenco di campi opzionali non contenga valori effettivi (solo `null`/`undefined`) prima di decidere di
saltare l'elaborazione o di mostrare uno stato “nessun valore fornito”.

> **Nota per gli utenti TypeScript:**
>
> Usa `areNullOrUndefined` quando devi verificare che un array contenga solo valori mancanti (`null`/`undefined`). Nota
> che restituisce `false` per un array vuoto.

### Vantaggi

- Restituisce `true` solo quando ogni elemento è `null` o `undefined`.
- Restituisce `false` per gli array vuoti, aiutando a distinguere “nessun dato” da “tutti i valori mancanti”.
- Funziona con `unknown[]`, rendendolo sicuro da usare prima di restringere i tipi.

## Utilizzo

### Sintassi

Funzione:

- `areNullOrUndefined(array)`

Parametri:

- `array`: L'array da controllare.

### Importazione locale della funzione

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areNullOrUndefined(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 00:30:02 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>