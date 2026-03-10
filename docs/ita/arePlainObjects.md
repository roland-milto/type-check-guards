# arePlainObjects

## Descrizione

Verifica se tutti gli elementi di un array sono oggetti semplici, restituendo `true` solo se ogni elemento soddisfa i
requisiti.

### Caso d’uso

Valida dati esterni o non tipizzati (ad es. JSON parsato, payload API, invii di moduli) per assicurarti di aver ricevuto
un array non vuoto in cui ogni voce è un oggetto semplice prima di iterare e leggere le proprietà.

> **Nota per gli utenti TypeScript:**
>
> Usa `arePlainObjects` per validare input sconosciuti prima di trattarli come `Record<string, unknown>[]` (o una forma
> di oggetto più restrittiva) in TypeScript.

### Vantaggi

- Garantisce che ogni elemento nell'array di input sia un oggetto semplice, restituendo `true` solo quando tutti gli
  elementi corrispondono.
- Rifiuta subito gli input non validi (non-array o array vuoti) restituendo `false`.
- Considera validi come oggetti semplici sia gli oggetti letterali sia gli oggetti creati con `Object.create(null)`.

## Utilizzo

### Sintassi

Funzione:

- `arePlainObjects(array)`

Parametri:

- `array`: L'array da controllare per verificare che contenga elementi che sono oggetti semplici.

### Importazione locale della funzione

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // vero
const b = arePlainObjects([{}, Object.create(null)]); // vero
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // falso
const d = arePlainObjects([] as unknown[]); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.arePlainObjects(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 16:25:40 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>