# isValidDate

## Descrizione

`isValidDate` verifica se un determinato valore è un oggetto `Date` valido e restituisce `true` solo per date reali e
non invalide.

### Caso d’uso

Validare l'input dell'utente o i dati di un'API che possono contenere date, assicurando che il valore sia una vera
istanza di `Date` e non una data non valida prima di eseguire calcoli, formattazioni o confronti sulle date.

> **Nota per gli utenti TypeScript:**
>
> Usa `isValidDate` prima di chiamare metodi di `Date` (ad es., `toISOString`, `getTime`) su valori tipizzati come
`unknown` per assicurarti che siano oggetti `Date` validi.

### Vantaggi

- Garantisce che un valore sia un'istanza di `Date` e non solo una stringa o un numero simile a una data.
- Rifiuta le date non valide (ad es., `new Date("invalid")`) verificando la presenza di valori temporali `NaN`.
- Semplice guardia booleana facile da usare in condizioni e pipeline di validazione.
- Aiuta a prevenire errori a runtime quando si chiamano metodi delle date verificando prima l'input.

## Utilizzo

### Sintassi

Funzione:

- `isValidDate(value)`

Parametri:

- `value`: Il valore da verificare.

### Importazione locale della funzione

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input è un'istanza di Date valida
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isValidDate(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 16:40:39 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>