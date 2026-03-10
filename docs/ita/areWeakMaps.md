# areWeakMaps

## Descrizione

`areWeakMaps` verifica se un valore è un array non vuoto in cui ogni elemento è un `WeakMap`, restituendo `true` solo in
quel caso e `false` altrimenti.

### Caso d’uso

Validare dati a runtime (ad es. JSON parsato, input di plugin o configurazioni con tipizzazione debole) per assicurarsi
che siano un array non vuoto di istanze di `WeakMap` prima di iterare e chiamare metodi di `WeakMap`; restituisce
`false` quando un qualsiasi elemento non è un `WeakMap` o quando l’array è vuoto.

> **Nota per gli utenti TypeScript:**
>
> Usa `areWeakMaps` per validare input sconosciuti prima di trattarli come un `WeakMap[]` non vuoto; restituisce `false`
> per gli array vuoti.

### Vantaggi

- Garantisce che ogni elemento nell’array fornito sia un’istanza di `WeakMap`.
- Restituisce `false` per gli array vuoti, evitando l’accettazione accidentale di “nessun dato” come input valido.
- Utile come guardia prima di eseguire operazioni specifiche di `WeakMap` su tutti gli elementi.

## Utilizzo

### Sintassi

Funzione:

- `areWeakMaps(array)`

Parametri:

- `array`: L’array da verificare per istanze di `WeakMap`.

### Importazione locale della funzione

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list è un array non vuoto di istanze di WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // non è un WeakMap[] non vuoto
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areWeakMaps(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 13:37:42 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>