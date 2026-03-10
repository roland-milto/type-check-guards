# areMaps

## Descrizione

`areMaps` determina se un dato array è non vuoto e se tutti i suoi elementi sono istanze di `Map`.

### Caso d’uso

Convalidare input sconosciuti (ad es. da parsing JSON, API esterne o sorgenti dinamiche) prima di trattarli come un
elenco non vuoto di oggetti `Map`.

> **Nota per gli utenti TypeScript:**
>
> Restituisce `false` per un array vuoto; restituisce `true` solo quando l'array è pieno e ogni elemento è una `Map`.

### Vantaggi

- Garantisce che ogni elemento sia un'istanza di `Map`, restituendo `true` solo quando l'intero array supera il
  controllo.
- Rifiuta gli array vuoti per progettazione, impedendo l'accettazione accidentale di “nessun dato” come input valido.
- Utile come guardia prima di eseguire operazioni specifiche di `Map` (ad es. `.get()`, `.set()`, iterazione) su
  un'intera raccolta.

## Utilizzo

### Sintassi

Funzione:

- `areMaps(array)`

Parametri:

- `array`: L'array da controllare.

### Importazione locale della funzione

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items è garantito essere un array non vuoto di istanze Map a runtime
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false per: array vuoti, o array contenenti qualsiasi valore non-Map
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areMaps(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 16:12:59 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>