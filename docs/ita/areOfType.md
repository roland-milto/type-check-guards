# areOfType

## Descrizione

Verifica se tutti gli elementi nell'`array` fornito sono del `type` specificato.

### Caso d’uso

Usa `areOfType` per validare input sconosciuti (ad es. JSON parsato, payload API, input utente) prima di eseguire
operazioni specifiche del tipo su ogni elemento di un array.

> **Nota per gli utenti TypeScript:**
>
> Poiché `areOfType` è una type guard, TypeScript restringe l'array all'interno di un blocco `if (areOfType(...)) {}` a
`Array<DataTypeOf<T>>`.

### Vantaggi

- Fornisce una type guard TypeScript: quando restituisce `true`, l'input viene ristretto a `Array<DataTypeOf<T>>`.
- Valida ogni elemento rispetto al tipo runtime richiesto, impedendo che array con tipi misti vengano accettati.
- Fallisce rapidamente: restituisce `false` non appena viene trovato un elemento non corrispondente.
- Rifiuta per progettazione i non-array e gli array vuoti (dipende da `isFilledArray`).

## Utilizzo

### Sintassi

Funzione:

- `areOfType(array, type)`

Parametri:

- `array`: L'array da controllare.
- `type`: Il tipo rispetto a cui controllare ogni elemento nell'array.

### Importazione locale della funzione

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values è ora number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // falso

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areOfType(array, type)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 17:09:56 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>