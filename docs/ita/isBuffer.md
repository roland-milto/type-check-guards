# isBuffer

## Descrizione

Verifica se un valore è un `Buffer` di Node.js e restituisce `true` o `false`.

### Caso d’uso

Valida gli input a runtime (ad es. payload API, dati di file o buffer di messaggi) per assicurarti che un valore sia un
`Buffer` prima di elaborarlo e ottenere in modo affidabile `false` quando l'esecuzione avviene fuori da Node.js, dove
`Buffer` potrebbe non esistere.

> **Nota per gli utenti TypeScript:**
>
> Usa `isBuffer` per restringere i valori `unknown` a `Buffer` prima di chiamare metodi specifici di Buffer.

### Vantaggi

- Rileva in modo sicuro le istanze di `Buffer` di Node.js usando `Buffer.isBuffer`.
- Restituisce `false` negli ambienti in cui `Buffer` non è disponibile, evitando errori a runtime.
- Funziona con input `unknown`, rendendolo adatto alla validazione a runtime e al restringimento dei tipi.

## Utilizzo

### Sintassi

Funzione:

- `isBuffer(value)`

Parametri:

- `value`: Il valore da testare.

### Importazione locale della funzione

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // vero
console.log(isBuffer(b)); // falso

if (isBuffer(a)) {
  // a è un Buffer qui
  console.log(a.toString("utf8"));
}
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isBuffer(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 16:31:59 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>