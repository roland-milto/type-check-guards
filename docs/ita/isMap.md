# isMap

## Descrizione

Verifica se il `value` fornito è una `Map`, restituendo `true` se lo è e `false` altrimenti.

### Caso d’uso

Usa `isMap` quando ricevi un valore `unknown` (ad es. dal parsing JSON, da API esterne o dall’input dell’utente) e devi
assicurarti che sia una `Map` prima di eseguire operazioni su `Map`.

> **Nota per gli utenti TypeScript:**
>
> `isMap` è una guardia a runtime che restituisce `true` quando il valore è una `Map` e `false` altrimenti; usala per
> restringere `unknown` prima di chiamare le API di `Map`.

### Vantaggi

- Fornisce un rapido controllo a runtime per verificare se un valore è una `Map`.
- Aiuta a prevenire errori di tipo proteggendo i percorsi di codice che richiedono metodi di `Map` come `get`, `set` e
  `has`.
- Funziona bene come passaggio di validazione leggero quando si gestiscono input `unknown`.

## Utilizzo

### Sintassi

Funzione:

- `isMap(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isMap(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isMap](../_analysis/isMap.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 16:04:55 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>