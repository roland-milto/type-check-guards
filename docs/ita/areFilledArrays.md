# areFilledArrays

## Descrizione

`areFilledArrays` verifica se un array bidimensionale non è vuoto e se tutti i suoi sottoarray non sono vuoti.

### Caso d’uso

Usa `areFilledArrays` per convalidare input tabellari o simili a matrici (ad es. righe CSV, dati a griglia, risultati
raggruppati) così da poter assumere in sicurezza che esista almeno un sottoarray e che nessuno dei sottoarray sia vuoto.

> **Nota per gli utenti TypeScript:**
>
> Usa `areFilledArrays` quando devi assicurarti che un array 2D abbia almeno una riga e che ogni riga abbia almeno un
> elemento prima di iterare o indicizzare al suo interno.

### Vantaggi

- Convalida che l’array esterno non sia vuoto e che ogni array interno non sia vuoto, restituendo `true` solo quando
  entrambe le condizioni sono soddisfatte.
- Funziona con qualsiasi tipo di elemento all’interno dei sottoarray (ad es. numeri, stringhe, oggetti, array annidati)
  perché verifica solo lo stato di “riempimento” dell’array, non il contenuto degli elementi.
- Fornisce un semplice risultato booleano (`true`/`false`) adatto come guardia prima di elaborare dati bidimensionali.

## Utilizzo

### Sintassi

Funzione:

- `areFilledArrays(array)`

Parametri:

- `array`: L’array bidimensionale da controllare.

### Importazione locale della funzione

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // vero
console.log(areFilledArrays(b)); // vero
console.log(areFilledArrays(c)); // vero
console.log(areFilledArrays(d)); // falso
console.log(areFilledArrays(e)); // falso
console.log(areFilledArrays(f)); // falso

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areFilledArrays(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 11:57:13 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>