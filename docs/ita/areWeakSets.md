# areWeakSets

## Descrizione

Verifica se un input è un array non vuoto in cui ogni elemento è un `WeakSet`, restituendo `true` solo in quel caso.

### Caso d’uso

Validare input a runtime (ad es. da API, configurazione o dati forniti dall’utente) per assicurarsi di avere un elenco
non vuoto di istanze `WeakSet` prima di procedere con logica che dipende dal comportamento di `WeakSet`.

> **Nota per gli utenti TypeScript:**
>
> Usa `areWeakSets` per validare un input sconosciuto prima di trattarlo come `WeakSet[]`. Restituisce `false` per gli
> array vuoti e per i non-array.

### Vantaggi

- Garantisce che ogni elemento nell’array di input sia un `WeakSet`.
- Restituisce `false` per gli array vuoti, evitando risultati “tutti validi” accidentali in caso di dati mancanti.
- Fallisce in modo sicuro restituendo `false` quando l’input non è un array non vuoto (incluso `null`).
- Utile come guardia prima di eseguire operazioni che richiedono istanze di `WeakSet`.

## Utilizzo

### Sintassi

Funzione:

- `areWeakSets(array)`

Parametri:

- `array`: L’array da controllare per oggetti `WeakSet`.

### Importazione locale della funzione

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a è un array non vuoto di istanze WeakSet
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areWeakSets(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 14:09:07 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>