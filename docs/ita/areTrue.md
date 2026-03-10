# areTrue

## Descrizione

Verifica se un array non vuoto contiene solo valori booleani `true`.

### Caso d’uso

Usa `areTrue` per validare che un insieme di precondizioni o feature flag siano tutte abilitate (tutti i valori sono
`true`) prima di continuare, trattando input vuoti o malformati come non soddisfatti (`false`).

> **Nota per gli utenti TypeScript:**
>
> `areTrue` restituisce `false` per un array vuoto e per array che contengono qualsiasi valore che non sia strettamente
`true`.

### Vantaggi

- Restituisce `true` solo quando ogni elemento è strettamente `true` e l'array non è vuoto.
- Fallisce rapidamente: restituisce `false` non appena viene trovato un valore diverso da `true`.
- Rifiuta input non validi (non-array o array vuoti) restituendo `false`.

## Utilizzo

### Sintassi

Funzione:

- `areTrue(array)`

Parametri:

- `array`: L'array da controllare per verificare che tutti i valori siano `true`.

### Importazione locale della funzione

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areTrue(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 13:51:35 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>