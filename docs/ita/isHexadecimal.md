# isHexadecimal

## Descrizione

`isHexadecimal` verifica se un determinato valore è un letterale di stringa esadecimale con prefisso `0x`/`0X`
obbligatorio.

### Caso d’uso

Usa `isHexadecimal` per convalidare valori di configurazione, campi del payload API o argomenti CLI che devono essere
forniti come letterali di stringa esadecimale (ad es. ID, maschere o indirizzi) e non devono contenere spazi bianchi
circostanti.

> **Nota per gli utenti TypeScript:**
>
> Usa `isHexadecimal` quando devi convalidare l'input dell'utente o dati serializzati come una stringa letterale
> esadecimale rigorosa (incluso il prefisso `0x`/`0X`) prima di analizzarla o convertirla.

### Vantaggi

- Convalida che un valore sia una stringa e corrisponda a un formato letterale esadecimale rigoroso (richiede il
  prefisso `0x`/`0X`).
- Rifiuta le stringhe con spazi bianchi iniziali o finali, aiutando a evitare l'accettazione accidentale di input con
  padding.
- Supporta il segno opzionale e non distingue tra maiuscole e minuscole per prefisso e cifre, restituendo `true`/`false`
  in modo prevedibile.

## Utilizzo

### Sintassi

Funzione:

- `isHexadecimal(value)`

Parametri:

- `value`: Il valore da verificare.

### Importazione locale della funzione

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // vero
isHexadecimal("-0Xff"); // vero
isHexadecimal("1A2B"); // falso (prefisso mancante)
isHexadecimal(" 0x1A2B"); // falso (spazio iniziale)
isHexadecimal(0x1a2b); // falso (non è una stringa)
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isHexadecimal(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 22:59:07 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>