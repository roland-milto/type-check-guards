# isFinite

## Descrizione

Determina se un dato `value` è un `number` finito.

### Caso d’uso

Usa `isFinite` per validare input sconosciuti (ad es. da JSON, moduli o API) prima di eseguire calcoli numerici,
assicurandoti che il valore sia un numero reale e finito.

> **Nota per gli utenti TypeScript:**
>
> `isFinite` restituisce `true` solo per numeri finiti; restituisce `false` per `NaN`, `Infinity` e per qualsiasi valore
> che non sia un numero.

### Vantaggi

- Utilizza il `Number.isFinite` integrato per un controllo affidabile della finitezza.
- Restituisce `true` solo per numeri finiti; restituisce `false` per `NaN`, `Infinity` e input che non sono numeri.
- Predicato semplice e privo di effetti collaterali, adatto per logiche di validazione e di guardia.

## Utilizzo

### Sintassi

Funzione:

- `isFinite(value)`

Parametri:

- `value`: Il valore da verificare per la finitezza.

### Importazione locale della funzione

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers è: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value è un numero finito qui
  const doubled = value * 2;
  console.log(doubled);
}
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isFinite(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 16:30:16 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>