# arePrimitives

## Descrizione

`arePrimitives` valuta se tutti gli elementi in un array fornito e non vuoto sono tipi primitivi.

### Caso d’uso

Convalidare che i dati in ingresso (ad es. parametri di query, valori di righe CSV o un elenco di ID/tag) contengano
solo valori primitivi prima di serializzarli, calcolare hash, registrarli nei log o passarli ad API che non devono
ricevere oggetti.

> **Nota per gli utenti TypeScript:**
>
> Usa `arePrimitives` quando devi assicurarti che un `unknown[]` contenga solo valori primitivi (string, number, bigint,
> boolean, symbol, undefined o null) prima di ulteriori elaborazioni.

### Vantaggi

- Restituisce `true` solo quando ogni elemento è un valore primitivo, rendendolo un controllo rigoroso per array “senza
  oggetti/funzioni”.
- Fallisce rapidamente: restituisce `false` non appena viene trovato un elemento non primitivo.
- Restituisce `false` anche per i non-array e per gli array vuoti (tramite il controllo di array riempito), evitando
  l’accettazione accidentale di input non valido.

## Utilizzo

### Sintassi

Funzione:

- `arePrimitives(array)`

Parametri:

- `array`: L’array da controllare per verificare che gli elementi siano di tipo primitivo.

### Importazione locale della funzione

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // vero
const r2 = arePrimitives(b); // vero
const r3 = arePrimitives(c); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.arePrimitives(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 00:05:04 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>