# areNumerics

## Descrizione

`areNumerics` verifica se un valore è un array non vuoto in cui tutti gli elementi sono numerici.

### Caso d’uso

Usa `areNumerics` per validare dati esterni o non tipizzati (ad es. payload JSON, parametri di query, input di moduli)
prima di calcolare somme, medie o altre operazioni numeriche, assicurando che l’input sia un array numerico non vuoto e
restituendo `false` in caso contrario.

> **Nota per gli utenti TypeScript:**
>
> Usa `areNumerics` per fare da guardia a input `unknown` prima di trattarlo come un array numerico; restituisce `false`
> per i non-array e per gli array vuoti.

### Vantaggi

- Restituisce `true` solo quando l’input è un array non vuoto e ogni elemento è numerico.
- Fallisce rapidamente: interrompe il controllo non appena viene trovato un elemento non numerico, restituendo `false`.
- Aiuta a validare in modo sicuro input sconosciuti prima di eseguire operazioni numeriche.

## Utilizzo

### Sintassi

Funzione:

- `areNumerics(array)`

Parametri:

- `array`: L’array da controllare per verificare che contenga elementi numerici.

### Importazione locale della funzione

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // vero
console.log(areNumerics(b)); // vero
console.log(areNumerics(c)); // falso
console.log(areNumerics(d)); // falso
console.log(areNumerics(e)); // falso

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areNumerics(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 16:05:41 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>