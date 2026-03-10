# areDecimals

## Descrizione

Verifica se tutti gli elementi di un array sono numeri decimali e se l'array è non vuoto, restituendo `true` o `false`.

### Caso d’uso

Convalidare liste fornite dagli utenti (ad es. colonne CSV o input di moduli) per assicurarsi che l'array non sia vuoto
e che ogni voce sia un valore decimale prima del parsing o dei calcoli.

> **Nota per gli utenti TypeScript:**
>
> Usa `areDecimals` quando ti serve un rapido controllo booleano che un `unknown[]` sia non vuoto e che ogni elemento
> sia una rappresentazione decimale.

### Vantaggi

- Garantisce che l'input sia un array non vuoto prima di validare gli elementi, evitando l'accettazione accidentale di
  liste vuote.
- Valida ogni elemento con `isDecimal`, quindi valori misti o non validi causano un risultato `false` immediato.
- Fornisce un semplice esito booleano (`true`/`false`) adatto a guardie e flussi di validazione con ritorno anticipato.

## Utilizzo

### Sintassi

Funzione:

- `areDecimals(array)`

Parametri:

- `array`: L'array da controllare.

### Importazione locale della funzione

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // vero
console.log(areDecimals(b)); // falso
console.log(areDecimals(c)); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areDecimals(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 15:57:37 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>