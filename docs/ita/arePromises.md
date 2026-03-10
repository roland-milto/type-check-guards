# arePromises

## Descrizione

`arePromises` determina se tutti gli elementi in un array sono istanze di `Promise`.

### Caso d’uso

Convalida che un elenco costruito dinamicamente o fornito dall'esterno contenga solo promise prima di aggregarle (ad es.
con `Promise.all`).

> **Nota per gli utenti TypeScript:**
>
> Usa `arePromises` per validare `unknown[]` prima di chiamare `Promise.all` o altre operazioni riservate alle promise;
> restituisce `false` per gli array vuoti.

### Vantaggi

- Garantisce che ogni elemento sia una `Promise` prima di procedere con logica specifica per le promise.
- Restituisce `false` per gli array vuoti, evitando risultati ambigui per input vuoti.
- Utile come guardia a runtime quando si lavora con `unknown[]` provenienti da fonti esterne.

## Utilizzo

### Sintassi

Funzione:

- `arePromises(array)`

Parametri:

- `array`: L'array da controllare per verificare la presenza di istanze di Promise.

### Importazione locale della funzione

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values è un array di istanze Promise a runtime
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.arePromises(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 23:48:41 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>