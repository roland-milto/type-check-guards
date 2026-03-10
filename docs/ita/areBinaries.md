# areBinaries

## Descrizione

Verifica se il valore fornito è un array non vuoto di stringhe binarie valide e restituisce `true` solo se tutti gli
elementi superano la convalida.

### Caso d’uso

Usa `areBinaries` quando ricevi un elenco sconosciuto (ad es. da JSON, moduli o API) e devi assicurarti che sia un array
non vuoto di stringhe binarie prima di eseguirne il parsing o elaborarlo.

> **Nota per gli utenti TypeScript:**
>
> Usa `areBinaries` per convalidare input sconosciuti prima di convertire stringhe binarie in numeri/BigInt; garantisce
> che l'array non sia vuoto e che ogni elemento sia una stringa binaria valida.

### Vantaggi

- Convalida che un valore sia un array non vuoto in cui ogni elemento è una stringa binaria valida.
- Restituisce un semplice risultato booleano (`true`/`false`) adatto per guardie, ritorni anticipati e validazione
  dell'input.
- Previene errori di parsing a valle rifiutando array che contengono qualsiasi voce non binaria.

## Utilizzo

### Sintassi

Funzione:

- `areBinaries(array)`

Parametri:

- `array`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // vero
console.log(areBinaries(b)); // falso
console.log(areBinaries([])); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areBinaries(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 23:14:54 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>