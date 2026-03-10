# isPrimitive

## Descrizione

`isPrimitive` determina se un determinato valore è un primitivo (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Caso d’uso

Convalidare gli input a runtime (ad es. campi del payload API, valori di configurazione o dati forniti dall’utente) per
assicurarsi che un valore sia un primitivo prima di serializzare, registrare nei log o applicare operazioni riservate ai
primitivi.

> **Nota per gli utenti TypeScript:**
>
> Usa `isPrimitive` per proteggere gli input `unknown` prima di trattarli come oggetti o funzioni; restituisce `true`
> per i primitivi e `false` per oggetti e funzioni.

### Vantaggi

- Controllo rapido, senza allocazioni, per verificare se un valore è un primitivo JavaScript.
- Tratta correttamente `null` come primitivo (anche se `typeof null` è `"object"`).
- Aiuta a restringere i valori `unknown` prima di eseguire operazioni riservate agli oggetti.

## Utilizzo

### Sintassi

Funzione:

- `isPrimitive(value)`

Parametri:

- `value`: Il valore da controllare per verificare se è di tipo primitivo.

### Importazione locale della funzione

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isPrimitive(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 23:56:36 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>