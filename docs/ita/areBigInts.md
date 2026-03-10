# areBigInts

## Descrizione

`areBigInts` determina se un valore è un array non vuoto contenente solo valori `bigint`.

### Caso d’uso

Convalidare input sconosciuti (ad es. dati simili a JSON analizzati, payload API o parametri di funzione tipizzati come
`unknown`) per assicurarsi che siano un array non vuoto di valori `bigint` prima dell'elaborazione; restituisce `true`
solo quando tutti gli elementi sono `bigint`, altrimenti `false`.

> **Nota per gli utenti TypeScript:**
>
> Usa `areBigInts` come guardia runtime prima di eseguire operazioni solo-`bigint` (ad es. aritmetica, confronti) su
> input sconosciuti.

### Vantaggi

- Garantisce che ogni elemento sia un `bigint`, restituendo `true` solo quando l'intero array corrisponde.
- Rifiuta per progettazione i non-array e gli array vuoti (tramite `isFilledArray`), evitando l'accettazione accidentale
  di input non validi.
- Fallimento rapido: restituisce `false` non appena viene trovato un elemento non `bigint`.

## Utilizzo

### Sintassi

Funzione:

- `areBigInts(array)`

Parametri:

- `array`: Il valore da verificare.

### Importazione locale della funzione

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // vero
console.log(areBigInts(b)); // falso
console.log(areBigInts(c)); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areBigInts(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 23:26:13 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>