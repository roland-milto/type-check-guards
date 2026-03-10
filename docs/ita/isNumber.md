# isNumber

## Descrizione

`isNumber` verifica se un valore è un numero finito e non `NaN`.

### Caso d’uso

Valida input numerici provenienti da fonti non affidabili (moduli, parametri di query, payload JSON) prima di calcoli,
memorizzazione o controlli di intervallo, assicurando che passino (`true`) solo numeri finiti e che tutto il resto
restituisca `false`.

> **Nota per gli utenti TypeScript:**
>
> Usa `isNumber` per validare valori `unknown` prima di fare operazioni aritmetiche; rifiuta `NaN`, `Infinity` e
`-Infinity`.

### Vantaggi

- Restituisce `true` solo per numeri JavaScript reali (controllo del tipo più rifiuto di `NaN` e dell'infinito).
- Previene comuni bug di validazione in cui `NaN`, `Infinity` o `-Infinity` passano accidentalmente come numeri.
- Funziona bene come guardia runtime per input sconosciuti (ad es. JSON, input utente, API esterne).
- Semplice, veloce e privo di effetti collaterali.

## Utilizzo

### Sintassi

Funzione:

- `isNumber(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input è un numero finito valido
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isNumber(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 13:09:29 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>