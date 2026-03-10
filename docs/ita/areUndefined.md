# areUndefined

## Descrizione

`areUndefined` verifica se ogni elemento in un array fornito è `undefined`.

### Caso d’uso

Convalidare che un elenco di risultati opzionali non contenga valori effettivi (solo `undefined`), ad esempio dopo aver
mappato ricerche in cui le voci mancanti sono rappresentate come `undefined`, e vuoi confermare che tutte le ricerche
siano fallite.

> **Nota per gli utenti TypeScript:**
>
> Usa `areUndefined` quando devi affermare che un `unknown[]` contiene solo valori `undefined`; restituisce `false` per
> gli array vuoti e per input non-array/non validi a causa del controllo interno `isFilledArray`.

### Vantaggi

- Restituisce `false` per i non-array e per gli array vuoti richiedendo un array non vuoto tramite `isFilledArray`.
- Garantisce che ogni elemento sia `undefined`, non solo alcuni, rendendo esplicita l'intenzione.
- Utile come predicato in stile guardia durante la validazione di collezioni di input sconosciute.

## Utilizzo

### Sintassi

Funzione:

- `areUndefined(array)`

Parametri:

- `array`: L'array da controllare per elementi `undefined`.

### Importazione locale della funzione

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Nota: restituisce false per array vuoti
const r4 = areUndefined([]); // false
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areUndefined(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 13:56:15 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>