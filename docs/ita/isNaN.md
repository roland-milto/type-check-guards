# isNaN

## Descrizione

Determina se il `value` fornito è un `NaN` di tipo `number` senza convertire le stringhe.

### Caso d’uso

Valida input non affidabili o debolmente tipizzati (ad es. payload API, valori di form, JSON parsato) per rilevare lo
speciale valore `NaN` e gestirlo esplicitamente, trattando gli input non numerici come non `NaN`.

> **Nota per gli utenti TypeScript:**
>
> Usa `isNaN` quando devi rilevare lo speciale valore numerico `NaN` assicurandoti che l’input sia effettivamente un
`number` (nessuna conversione da stringa a numero).

### Vantaggi

- Verifica se un valore è `NaN` senza forzare valori non numerici (ad es. stringhe) a diventare numeri.
- Restituisce `true` solo per valori che sono sia di tipo `number` sia `NaN`.
- È sicuro per input `unknown` ed evita falsi positivi dovuti a conversioni implicite.

## Utilizzo

### Sintassi

Funzione:

- `isNaN(value)`

Parametri:

- `value`: Il valore da verificare per stabilire se è un `NaN` di tipo `number`.

### Importazione locale della funzione

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // vero
console.log(isNaN(b)); // falso
console.log(isNaN(c)); // falso

if (isNaN(a)) {
  // a è un numero e nello specifico NaN
}
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isNaN(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 15:46:32 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>