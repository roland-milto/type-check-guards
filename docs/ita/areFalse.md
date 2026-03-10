# areFalse

## Descrizione

`areFalse` verifica se tutti gli elementi in un array fornito sono rigorosamente il booleano `false`.

### Caso d’uso

Convalidare che un elenco di feature flag, controlli o risultati di guard siano tutti `false` prima di procedere (ad
es., confermare che non siano presenti condizioni bloccanti).

> **Nota per gli utenti TypeScript:**
>
> Usa `areFalse` quando ti serve una validazione rigorosa che un array non sia vuoto e contenga solo il valore booleano
`false`.

### Vantaggi

- Garantisce che ogni elemento sia rigorosamente `false` (nessuna coercizione truthy/falsey).
- Restituisce `false` per non-array o array vuoti richiedendo un array popolato tramite `isFilledArray`.
- Si interrompe in anticipo al primo elemento non `false` per efficienza.

## Utilizzo

### Sintassi

Funzione:

- `areFalse(array)`

Parametri:

- `array`: L'array da controllare, contenente elementi di qualsiasi tipo.

### Importazione locale della funzione

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // vero
const b = areFalse([false, true, false]);  // falso
const c = areFalse([false, "false", false]); // falso
const d = areFalse([]); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areFalse(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 16:17:23 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>