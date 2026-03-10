# areNumbers

## Descrizione

`areNumbers` verifica se un valore è un array non vuoto in cui tutti gli elementi sono numeri.

### Caso d’uso

Validare dati forniti dall’utente o da un’API per assicurarsi che siano un array non vuoto di numeri prima di calcolare
totali, medie o altre aggregazioni numeriche.

> **Nota per gli utenti TypeScript:**
>
> Usa `areNumbers` per validare array sconosciuti prima di eseguire calcoli numerici; restituisce `false` per array
> vuoti e per array che contengono qualsiasi valore non numerico.

### Vantaggi

- Restituisce `true` solo quando l’input è un array non vuoto e ogni elemento è un numero.
- Previene falsi positivi rifiutando array vuoti e input che non sono array.
- Utile come guardia prima di operazioni numeriche (ad es. somma, media) per evitare errori a runtime.

## Utilizzo

### Sintassi

Funzione:

- `areNumbers(array)`

Parametri:

- `array`: L’array da controllare per verificare che contenga elementi numerici.

### Importazione locale della funzione

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areNumbers(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 13:04:41 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>