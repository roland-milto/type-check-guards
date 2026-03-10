# isError

## Descrizione

Verifica se un determinato `value` è un'istanza di `Error`.

### Caso d’uso

Usa `isError` quando ricevi un valore `unknown` (ad esempio da un blocco `catch`, un callback o una libreria esterna) e
devi determinare in modo sicuro se si tratta di un `Error` prima di leggere `message`, `name` o `stack`.

> **Nota per gli utenti TypeScript:**
>
> Usa `isError` per proteggere valori `unknown` (ad es. da `catch`) prima di trattarli come un `Error`.

### Vantaggi

- Fornisce un semplice controllo a runtime per verificare se un valore è un'istanza di `Error`.
- Aiuta a restringere input sconosciuti prima di accedere alle proprietà di `Error` come `message` o `stack`.
- Riduce il rischio di eccezioni a runtime quando si gestiscono valori provenienti da `catch`, API esterne o sorgenti
  non tipizzate.

## Utilizzo

### Sintassi

Funzione:

- `isError(value)`

Parametri:

- `value`: Il valore da verificare rispetto al tipo `Error`.

### Importazione locale della funzione

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isError(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isError](../_analysis/isError.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 12:45:56 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>