# isOneOfType

## Descrizione

`isOneOfType` determina se un determinato `value` corrisponde ad almeno una delle stringhe di tipo fornite, restituendo
`true` se viene trovata una corrispondenza e `false` altrimenti.

### Caso d’uso

Validare dati a tipizzazione debole o esterni (ad es. JSON parsato, parametri di query) consentendo più tipi accettabili
a runtime (come `number` o `string`) prima di procedere con ulteriore logica.

> **Nota per gli utenti TypeScript:**
>
> Usa `isOneOfType` quando vuoi un controllo a runtime che un valore corrisponda a uno qualsiasi tra diversi tipi
> consentiti; restituisce `true` se almeno un tipo corrisponde, altrimenti `false`.

### Vantaggi

- Verifica un valore rispetto a più tipi consentiti in una singola chiamata, restituendo `true` alla prima
  corrispondenza.
- Funziona con input `unknown`, rendendolo utile ai confini di runtime (ad es. dati esterni, input utente).
- Risultato booleano semplice (`true`/`false`) che si compone bene con la logica condizionale e i ritorni anticipati.

## Utilizzo

### Sintassi

Funzione:

- `isOneOfType(value, types)`

Parametri:

- `value`: Il valore da verificare rispetto ai tipi specificati.
- `types`: Un array di stringhe di tipo che rappresentano i possibili tipi del valore.

### Importazione locale della funzione

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input è un oggetto a runtime
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isOneOfType(value, types)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 23:43:44 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>