# isOctal

## Descrizione

Determina se un valore è una stringa di letterale ottale valida (ad es. `0o755`).

### Caso d’uso

Convalidare l’input dell’utente o i valori di configurazione che devono essere espressi come stringa di letterale
ottale (ad esempio, modalità di permessi dei file come `0o644`) prima di analizzarli o convertirli.

> **Nota per gli utenti TypeScript:**
>
> `isOctal` è una guardia di tipo (`value is string`). Dopo un risultato `true`, TypeScript restringe la variabile
> verificata a `string`.

### Vantaggi

- Fornisce una guardia di tipo rigorosa: restituisce `true` solo quando l’input è una stringa che corrisponde al formato
  di un letterale ottale.
- Rifiuta stringhe vuote e stringhe con spazi bianchi iniziali/finali (controllo/spazio ASCII), riducendo le
  corrispondenze accidentali.
- Supporta il segno opzionale e non distingue tra maiuscole e minuscole per il prefisso `0o`/`0O`.
- È tollerante con input non stringa restituendo `false` invece di generare un’eccezione.

## Utilizzo

### Sintassi

Funzione:

- `isOctal(value)`

Parametri:

- `value`: Il valore da verificare.

### Importazione locale della funzione

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // vero
console.log(isOctal(b)); // vero
console.log(isOctal(c)); // falso
console.log(isOctal(d)); // falso

if (isOctal(a)) {
  // a è una stringa qui
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isOctal(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 15:41:42 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>