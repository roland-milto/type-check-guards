# areBuffers

## Descrizione

`areBuffers` verifica se il valore fornito è un array non vuoto e popolato in cui ogni elemento è un `Buffer`,
restituendo `true` in tal caso e `false` altrimenti.

### Caso d’uso

Validare array di chunk in ingresso (ad es. da stream, caricamenti di file o pacchetti di rete) per garantire che tutte
le parti siano istanze di `Buffer` prima di concatenarle, decodificarle o passarle a funzioni crittografiche o di
elaborazione binaria.

> **Nota per gli utenti TypeScript:**
>
> Usa `areBuffers` per validare `unknown[]` prima di chiamare API specifiche di Buffer come `Buffer.concat`, assicurando
> che la funzione restituisca `true` solo quando ogni elemento è un `Buffer`.

### Vantaggi

- Garantisce che ogni elemento nell’input sia un’istanza di `Buffer` di Node.js, restituendo `true` solo quando l’intero
  array corrisponde.
- Rifiuta in anticipo gli input non validi richiedendo un array non vuoto e popolato; restituisce `false` per array
  vuoti o per valori che non sono array.
- Utile come guardia prima di eseguire operazioni riservate ai buffer (ad es. concatenazione, hashing, protocolli
  binari).

## Utilizzo

### Sintassi

Funzione:

- `areBuffers(array)`

Parametri:

- `array`: L’array da controllare per verificare la presenza di istanze di buffer.

### Importazione locale della funzione

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areBuffers(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 16:25:44 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>