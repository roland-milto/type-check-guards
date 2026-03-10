# areSymbols

## Descrizione

Verifica se un input è un array riempito i cui elementi sono tutti simboli, restituendo `true` o `false`.

### Caso d’uso

Validare che un campo di configurazione (ad es. una lista di chiavi univoche rappresentate come simboli) sia un array
non vuoto contenente solo simboli prima di usarlo in API che richiedono `symbol[]`.

> **Nota per gli utenti TypeScript:**
>
> Usa `areSymbols` per validare un input sconosciuto prima di trattarlo come `symbol[]`; restituisce `false` per i
> non-array e per gli array vuoti.

### Vantaggi

- Restituisce `true` solo quando l’input è un array non vuoto e ogni elemento è un simbolo.
- Previene i falsi positivi rifiutando i non-array e gli array vuoti tramite il controllo interno di array riempito.
- Utile come type guard a runtime per validare liste composte solo da simboli prima di ulteriori elaborazioni.

## Utilizzo

### Sintassi

Funzione:

- `areSymbols(array)`

Parametri:

- `array`: L’array da controllare per verificare la presenza di elementi di tipo simbolo.

### Importazione locale della funzione

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a è un array di soli simboli a runtime
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areSymbols(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 14:22:11 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>