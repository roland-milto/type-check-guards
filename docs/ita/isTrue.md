# isTrue

## Descrizione

`isTrue` determina se un determinato valore è strettamente uguale a `true`.

### Caso d’uso

Usa `isTrue` per validare flag, toggle di funzionalità o valori di configurazione in cui deve essere accettato solo il
letterale `true` e tutto il resto deve essere trattato come `false`.

> **Nota per gli utenti TypeScript:**
>
> Usa `isTrue` quando devi accettare solo il letterale booleano `true`, non semplicemente valori truthy.

### Vantaggi

- Fornisce un controllo rigoroso per il letterale booleano `true` (senza coercizione).
- Aiuta a distinguere `true` dai valori truthy come `1`, `"true"` o `{}`.
- Comportamento semplice e prevedibile, adatto per guardie e pipeline di validazione.

## Utilizzo

### Sintassi

Funzione:

- `isTrue(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // vero
const b = isTrue(1);         // falso
const c = isTrue("true");   // falso

if (isTrue(a)) {
  // a è vero qui
}
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isTrue(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 13:42:42 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>