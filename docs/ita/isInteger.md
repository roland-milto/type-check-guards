# isInteger

## Descrizione

Determina se un dato `value` è un numero intero sicuro.

### Caso d’uso

Convalida input non affidabili (ad es. parametri di query, payload JSON, variabili d'ambiente) prima di usarli come
intero per indici di array, paginazione, contatori o ID di database.

> **Nota per gli utenti TypeScript:**
>
> Usa `isInteger` per convalidare input sconosciuti prima di trattarli come un intero numerico; restituisce `true` solo
> per valori per cui `typeof value === "number"` e `Number.isSafeInteger(value)`.

### Vantaggi

- Verifica sia la sicurezza del tipo sia quella numerica: restituisce `true` solo quando l'input è un numero e un intero
  sicuro.
- Previene errori comuni con la coercizione numerica: stringhe come "5" restituiscono correttamente `false`.
- Rifiuta i non interi e gli interi non sicuri, rendendolo adatto per ID, contatori e indicizzazione di array.

## Utilizzo

### Sintassi

Funzione:

- `isInteger(value)`

Parametri:

- `value`: Il valore da verificare per lo stato di intero.

### Importazione locale della funzione

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // vero
const b = isInteger(-100);   // vero
const c = isInteger("5");    // falso
const d = isInteger(5.5);    // falso
const e = isInteger(null);   // falso

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isInteger(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 00:50:16 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>