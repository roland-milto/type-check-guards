# areNaNs

## Descrizione

`areNaNs` verifica se tutti gli elementi in un array sono `NaN` e restituisce `true` solo se ogni elemento è `NaN`.

### Caso d’uso

Validare dati in ingresso in cui `NaN` è usato come valore sentinella e devi assicurarti che l'intero array sia composto
esclusivamente da `NaN` (ad es., rilevare una serie numerica completamente mancante).

> **Nota per gli utenti TypeScript:**
>
> Usa `areNaNs` quando devi validare che un array contenga solo il valore numerico `NaN` (senza conversione da stringa a
> numero).

### Vantaggi

- Restituisce `true` solo quando ogni elemento è `NaN` (controllo rigoroso su tutti gli elementi).
- Non converte le stringhe in numeri; valori come "NaN" rimangono non-`NaN` e rendono il risultato `false`.
- Restituisce `false` per array non valorizzati, evitando un `true` accidentale su input vuoto.

## Utilizzo

### Sintassi

Funzione:

- `areNaNs(array)`

Parametri:

- `array`: L'array da controllare per valori `NaN`.

### Importazione locale della funzione

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // vero
const b = areNaNs([NaN, 1, NaN]); // falso
const c = areNaNs([NaN, "NaN", NaN]); // falso
const d = areNaNs([NaN, null, NaN]); // falso
const e = areNaNs([] as unknown[]); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areNaNs(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 15:51:55 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>