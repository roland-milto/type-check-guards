# areFloats

## Descrizione

`areFloats` verifica se un dato array è valorizzato e se tutti i suoi elementi sono float.

### Caso d’uso

Usa `areFloats` quando ricevi un `unknown[]` (ad es. da JSON, parametri di query o API esterne) e devi assicurarti che
sia un array valorizzato in cui ogni elemento è un float prima di eseguire logica numerica come medie, interpolazione o
calcoli statistici.

> **Nota per gli utenti TypeScript:**
>
> Usa `areFloats` per fare da guardia a `unknown[]` prima di trattarlo come `number[]` contenente solo float;
> restituisce `false` per gli array vuoti e per qualsiasi elemento non-float.

### Vantaggi

- Restituisce `true` solo quando l’input è un array non vuoto e ogni elemento è un float.
- Fallisce rapidamente: restituisce `false` non appena viene trovato un elemento non-float.
- Aiuta a validare input sconosciuti prima di eseguire calcoli specifici per i float.

## Utilizzo

### Sintassi

Funzione:

- `areFloats(array)`

Parametri:

- `array`: L’array da controllare per verificare la presenza di elementi float.

### Importazione locale della funzione

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // vero
console.log(areFloats(b)); // falso
console.log(areFloats(c)); // falso

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areFloats(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 15:57:50 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>