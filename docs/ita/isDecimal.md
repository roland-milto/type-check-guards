# isDecimal

## Descrizione

`isDecimal` verifica se un valore è una rappresentazione in stringa di un numero decimale senza spazi bianchi
iniziali/finali e con un formato decimale valido.

### Caso d’uso

Validare campi di moduli, payload API o valori di configurazione che devono essere forniti come stringa decimale (con
segno opzionale) senza alcuno spazio bianco circostante, prima di analizzarli o memorizzarli.

> **Nota per gli utenti TypeScript:**
>
> Usa `isDecimal` per validare l'input dell'utente prima di convertirlo (ad es. con `Number(value)`), soprattutto quando
> gli spazi bianchi devono essere rifiutati.

### Vantaggi

- Convalida rigorosamente che l'input sia una stringa e che corrisponda a un pattern di letterale decimale.
- Rifiuta gli spazi bianchi iniziali e finali (inclusi i caratteri di controllo) per evitare un parsing ambiguo.
- Esegue controlli preliminari rapidi (controllo del tipo e del primo/ultimo carattere) prima di eseguire la regex.
- Restituisce un semplice risultato booleano (`true`/`false`) adatto per guardie e validazione dell'input.

## Utilizzo

### Sintassi

Funzione:

- `isDecimal(value)`

Parametri:

- `value`: Il valore da verificare per un formato di stringa decimale.

### Importazione locale della funzione

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v è una stringa qui (validata a runtime)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isDecimal(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 15:52:53 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>