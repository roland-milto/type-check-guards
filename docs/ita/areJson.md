# areJson

## Descrizione

Verifica se tutti gli elementi di un array sono stringhe JSON, restituendo `true` solo se l'array è popolato e ogni
elemento è JSON valido; altrimenti restituisce `false`.

### Caso d’uso

Valida i dati in ingresso (ad es. da parametri di query, variabili d'ambiente o API esterne) quando ti aspetti un array
di stringhe codificate in JSON e vuoi rifiutare gli array vuoti o qualsiasi voce non JSON.

> **Nota per gli utenti TypeScript:**
>
> Usa `areJson` quando devi validare che un `unknown[]` contenga solo stringhe JSON prima di analizzarle (ad es. con
`JSON.parse`).

### Vantaggi

- Restituisce `true` solo quando ogni elemento è una stringa JSON valida; altrimenti restituisce `false`.
- Fallisce rapidamente: interrompe il controllo non appena viene trovato un elemento non JSON.
- Rifiuta gli array vuoti per progettazione, restituendo `false` per input non popolati.

## Utilizzo

### Sintassi

Funzione:

- `areJson(array)`

Parametri:

- `array`: L'array da controllare per verificare che contenga elementi che sono stringhe JSON.

### Importazione locale della funzione

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // vero
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // falso
const empty = areJson([]); // falso

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areJson(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areJson](../_analysis/areJson.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 16:16:17 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>