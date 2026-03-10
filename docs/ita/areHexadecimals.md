# areHexadecimals

## Descrizione

Verifica se tutti gli elementi in un array sono stringhe esadecimali, restituendo `true` solo per array non vuoti in cui
ogni elemento è valido.

### Caso d’uso

Usa `areHexadecimals` per convalidare l'input dell'utente o dati esterni (ad es. ID, checksum, codici colore senza
un '#' iniziale) prima di eseguire il parsing esadecimale o ulteriori elaborazioni.

> **Nota per gli utenti TypeScript:**
>
> Usa `areHexadecimals` per convalidare input sconosciuti prima di analizzare o convertire i valori (ad esempio, prima
> di `parseInt(value, 16)` o di conversioni BigInt).

### Vantaggi

- Convalida che ogni elemento sia una stringa esadecimale e restituisce `true` solo quando tutti gli elementi
  corrispondono.
- Rifiuta gli array vuoti per progettazione, restituendo `false` in caso di dati di input mancanti.
- Fornisce un semplice risultato booleano (`true`/`false`) adatto a guardie e validazioni con ritorno anticipato.

## Utilizzo

### Sintassi

Funzione:

- `areHexadecimals(array)`

Parametri:

- `array`: L'array da controllare per verificare che contenga elementi che sono stringhe esadecimali.

### Importazione locale della funzione

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.areHexadecimals(array)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 23:06:36 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>