# areBooleans

## Descrizione

`areBooleans` verifica se un dato array non vuoto contiene solo valori booleani, restituendo `true` in tal caso e
`false` altrimenti.

### Caso d’uso

Validare dati forniti dall’utente o esterni (ad es. payload JSON, parametri di query, array di configurazione) per
assicurarsi che una lista non vuota contenga solo booleani prima di applicare logica booleana o passarla ad API che si
aspettano `boolean[]`.

> **Nota per gli utenti TypeScript:**
>
> Usa `areBooleans` per validare `unknown[]` prima di trattarlo come `boolean[]`; restituisce `false` per gli array
> vuoti, quindi gestisci esplicitamente quel caso se una lista vuota deve essere consentita.

### Vantaggi

- Restituisce `true` solo quando ogni elemento è un booleano e l’input è un array non vuoto.
- Previene falsi positivi rifiutando gli array vuoti (restituisce `false`).
- Funziona bene come guardia a runtime prima di operazioni solo su booleani (ad es. `every`, `some`, riduzioni logiche).

## Utilizzo

### Sintassi

Funzione:

- `areBooleans(array)`

Parametri:

- `array`: L’array da controllare per verificare che contenga elementi booleani.

### Importazione locale della funzione

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areBooleans(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 14:40:44 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>