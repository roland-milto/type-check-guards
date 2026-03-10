# areOneOfType

## Descrizione

`areOneOfType` verifica se tutti gli elementi in un array non vuoto appartengono a uno dei tipi runtime specificati.

### Caso d’uso

Validare dati in ingresso (ad es. JSON parsato) in cui un campo deve essere un array non vuoto i cui elementi sono
limitati a un insieme noto di tipi primitivi; restituire `false` quando l'array è vuoto o contiene qualsiasi tipo non
consentito.

> **Nota per gli utenti TypeScript:**
>
> Questa funzione restituisce un booleano e non restringe i tipi degli elementi dell'array in fase di compilazione;
> usala come passaggio di validazione runtime prima di ulteriori elaborazioni.

### Vantaggi

- Garantisce che ogni elemento di un array corrisponda ad almeno un tipo runtime consentito, restituendo `true` solo
  quando l'intero array supera il controllo.
- Rifiuta gli input non validi in anticipo: restituisce `false` quando `array` o `types` è vuoto o non è un array
  valorizzato.
- Utile per validare collezioni a tipi misti (ad es. numeri e stringhe) con una singola chiamata a `areOneOfType`.

## Utilizzo

### Sintassi

Funzione:

- `areOneOfType(array, types)`

Parametri:

- `array`: Un array di elementi da verificare rispetto ai tipi forniti.
- `types`: Un array di stringhe che rappresentano i tipi di dati rispetto a cui effettuare il controllo.

### Importazione locale della funzione

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areOneOfType(array, types)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 23:37:15 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>