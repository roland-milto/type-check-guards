# isPlainObject

## Descrizione

Verifica se un dato `value` è un oggetto semplice e restituisce `true` se lo è, altrimenti `false`.

### Caso d’uso

Convalidare che un input `unknown` (ad es. JSON parsato, dati esterni o argomenti di funzione) sia un oggetto semplice
prima di leggere le chiavi o mapparlo in un oggetto di configurazione tipizzato.

> **Nota per gli utenti TypeScript:**
>
> `isPlainObject` è utile per restringere `unknown` prima di trattarlo come un oggetto simile a un record; restituisce
`true` solo per i valori il cui tag interno è `[object Object]`.

### Vantaggi

- Fornisce un controllo semplice e affidabile per verificare se un valore è un oggetto semplice (cioè `Object` / `{}`),
  restituendo `true` o `false`.
- Aiuta a distinguere gli oggetti semplici da array, funzioni, `null` e altri tipi che non sono oggetti semplici.
- Utile come type guard in TypeScript per restringere valori `unknown` prima di accedere alle proprietà dell'oggetto.

## Utilizzo

### Sintassi

Funzione:

- `isPlainObject(value)`

Parametri:

- `value`: Il valore da testare per verificare se è un oggetto semplice.

### Importazione locale della funzione

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // qui input è un oggetto semplice
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // vero
console.log(isPlainObject([])); // falso
console.log(isPlainObject(null)); // falso
```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isPlainObject(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Il file è stato generato il 6 febbraio 2026 alle ore 12:18:05 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>