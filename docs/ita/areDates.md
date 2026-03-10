# areDates

## Descrizione

`areDates` determina se un dato array è valorizzato e contiene solo oggetti `Date`, restituendo `true` solo quando tutti
gli elementi sono date valide.

### Caso d’uso

Usa `areDates` per validare input sconosciuti (ad es. JSON parsato, dati di form, payload API) prima di eseguire logica
specifica per le date come ordinamento per tempo, formattazione o calcolo di intervalli.

> **Nota per gli utenti TypeScript:**
>
> Restituisce `true` solo per array non vuoti in cui ogni elemento è un `Date`; gli array vuoti restituiscono `false`.

### Vantaggi

- Garantisce che un array non sia vuoto prima di validarne il contenuto, evitando `true` per input vuoti.
- Verifica che ogni elemento sia un'istanza di `Date`, restituendo `false` immediatamente al primo elemento non
  corrispondente.
- Utile come controllo in stile guardia prima di eseguire operazioni specifiche per le date sugli elementi dell'array.

## Utilizzo

### Sintassi

Funzione:

- `areDates(array)`

Parametri:

- `array`: L'array da controllare per oggetti `Date`.

### Importazione locale della funzione

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // vero
console.log(areDates(b)); // falso
console.log(areDates(c)); // falso

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areDates(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areDates](../_analysis/areDates.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 15:30:46 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>