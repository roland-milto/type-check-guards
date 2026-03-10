# isFalse

## Descrizione

`isFalse` verifica se un determinato valore è strettamente uguale al letterale booleano `false`.

### Caso d’uso

Convalidare dati sconosciuti (ad es. da JSON, parametri di query o input utente) in cui solo il valore booleano
esplicito `false` deve essere considerato un flag valido, e tutto il resto deve essere rifiutato.

> **Nota per gli utenti TypeScript:**
>
> Usa `isFalse` quando devi accettare solo il letterale `false` e rifiutare tutti gli altri valori falsy; restituisce
`true` solo per `value === false`.

### Vantaggi

- Fornisce un controllo rigoroso per il letterale booleano `false` senza coercizione.
- Aiuta a distinguere `false` da altri valori falsy come `0`, `""`, `null` e `undefined`.
- Migliora la leggibilità rendendo esplicita l'intenzione quando si valida un input sconosciuto.

## Utilizzo

### Sintassi

Funzione:

- `isFalse(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // qui input è esattamente false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isFalse(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 16:21:59 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>