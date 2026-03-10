# areStrings

## Descrizione

`areStrings` verifica se un array è non vuoto e se tutti i suoi elementi sono stringhe, restituendo `true` solo in quel
caso.

### Caso d’uso

Validare dati esterni o forniti dall'utente (ad es. parametri di query, payload JSON, campi CSV) per assicurarsi di
avere un elenco non vuoto di stringhe prima dell'elaborazione.

> **Nota per gli utenti TypeScript:**
>
> Usa `areStrings` per validare array sconosciuti prima di applicare logica solo per stringhe; restituisce `false` per
> gli array vuoti.

### Vantaggi

- Garantisce che ogni elemento sia una stringa e rifiuta gli array con tipi misti restituendo `false`.
- Rifiuta gli array vuoti, quindi `true` indica solo un elenco non vuoto di stringhe.
- Utile come controllo rapido a runtime prima di eseguire operazioni solo su stringhe (ad es. `trim`, `toLowerCase`).

## Utilizzo

### Sintassi

Funzione:

- `areStrings(value)`

Parametri:

- `value`: Expected type `string[]`.

### Importazione locale della funzione

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input è un string[] non vuoto a runtime
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areStrings(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 13:18:43 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>