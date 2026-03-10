# isNumeric

## Descrizione

`isNumeric` determina se un dato `value` è considerato numerico verificando il suo tipo risolto rispetto a
`NUMERIC_TYPES`.

### Caso d’uso

Usa `isNumeric` per validare gli input (ad es. payload API, valori di form, configurazione) prima di eseguire operazioni
numeriche e per accettare in modo coerente tipi simili ai numeri (come `BigInt`) in base a `NUMERIC_TYPES`.

> **Nota per gli utenti TypeScript:**
>
> `isNumeric` è un predicato che restituisce un booleano; trattalo come un controllo a runtime per verificare se un
> valore appartiene all'insieme di tipi numerici definito dalla libreria.

### Vantaggi

- Usa `getTypeOf` insieme a `NUMERIC_TYPES` per centralizzare la logica di rilevamento dei valori numerici e mantenere i
  controlli coerenti in tutto il codebase.
- Restituisce un semplice booleano (`true`/`false`) per facilitare diramazioni e utilizzi in stile guard.
- Supporta più rappresentazioni numeriche (ad es. `number`, `BigInt`) come definito da `NUMERIC_TYPES`.

## Utilizzo

### Sintassi

Funzione:

- `isNumeric(value)`

Parametri:

- `value`: Il valore da verificare per il tipo numerico.

### Importazione locale della funzione

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v è considerato numerico secondo le regole di tipo della libreria
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isNumeric(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 15:53:02 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>