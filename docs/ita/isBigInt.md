# isBigInt

## Descrizione

`isBigInt` verifica se un determinato valore è di tipo `bigint`, restituendo `true` per i primitivi BigInt e `false`
altrimenti.

### Caso d’uso

Convalidare e restringere i valori provenienti da fonti non tipizzate (ad es. parsing JSON, input utente, API esterne)
prima di eseguire calcoli specifici per BigInt o di memorizzarli in campi che accettano solo BigInt.

> **Nota per gli utenti TypeScript:**
>
> Usa `isBigInt` per restringere `unknown` a `bigint` prima di fare aritmetica BigInt (ad es. `+`, `*`), che richiede
> operandi BigInt.

### Vantaggi

- Fornisce un controllo di runtime semplice e affidabile per il tipo primitivo `bigint`.
- Aiuta a restringere i valori `unknown` prima di eseguire operazioni riservate ai BigInt.
- Evita falsi positivi: numeri normali, stringhe e altri tipi restituiscono `false`.

## Utilizzo

### Sintassi

Funzione:

- `isBigInt(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // vero
console.log(isBigInt(10));  // falso
console.log(isBigInt("10")); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isBigInt(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 23:32:10 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>