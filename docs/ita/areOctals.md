# areOctals

## Descrizione

`areOctals` determina se il valore fornito è un array non vuoto di stringhe ottali valide.

### Caso d’uso

Usa `areOctals` quando convalidi input utente, valori di configurazione o payload API che devono contenere letterali
ottali (ad es. modalità di permessi dei file come `0o755`) e vuoi rifiutare array vuoti o qualsiasi voce non valida
restituendo `false`.

> **Nota per gli utenti TypeScript:**
>
> Usa `areOctals` per assicurarti di avere un `unknown[]` non vuoto in cui ogni voce è una stringa ottale valida prima
> di convertire (ad es. tramite `Number(...)` o parsing personalizzato).

### Vantaggi

- Convalida che un valore sia un array non vuoto in cui ogni elemento è una stringa ottale, restituendo `true` solo
  quando tutti gli elementi superano il controllo.
- Fallisce rapidamente: restituisce `false` non appena viene trovato un elemento non ottale.
- Utile come guardia prima di analizzare o convertire stringhe ottali per evitare errori a runtime e una gestione
  incoerente dell’input.

## Utilizzo

### Sintassi

Funzione:

- `areOctals(array)`

Parametri:

- `array`: Il valore da verificare.

### Importazione locale della funzione

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value è un array non vuoto di stringhe ottali
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areOctals(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 14:56:44 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>