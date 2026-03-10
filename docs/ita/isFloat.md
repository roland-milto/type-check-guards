# isFloat

## Descrizione

`isFloat` determina se un dato `value` è un numero in virgola mobile finito (un `number` che non è un intero).

### Caso d’uso

Convalidare input numerici forniti dall’utente quando sono richiesti valori frazionari (ad es. prezzi, misurazioni,
tassi) e rifiutare interi, `NaN` e infiniti.

> **Nota per gli utenti TypeScript:**
>
> Usa `isFloat` quando devi accettare solo input numerici finiti e non interi; rifiuta gli interi e i numeri non finiti.

### Vantaggi

- Restituisce `true` solo per numeri finiti e non interi (esclude gli interi, `NaN`, `Infinity` e `-Infinity`).
- Funziona con qualsiasi tipo di input (`unknown`) e restringe il tipo in modo sicuro verificando
  `typeof value === "number"`.
- Usa le guardie numeriche integrate (`Number.isInteger`, `Number.isFinite`) per un comportamento prevedibile.

## Utilizzo

### Sintassi

Funzione:

- `isFloat(value)`

Parametri:

- `value`: Il valore da verificare per determinare se è un numero in virgola mobile.

### Importazione locale della funzione

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value è un numero a runtime; è finito e non è un intero
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isFloat(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 16:08:14 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>