# isNullOrUndefined

## Descrizione

Verifica se un determinato valore è `null` o `undefined`.

### Caso d’uso

Usa `isNullOrUndefined` quando devi trattare sia `null` sia `undefined` come “nessun valore”, ad esempio per validare
input opzionali, normalizzare payload API o proteggere percorsi di codice prima di dereferenziare un valore
potenzialmente mancante.

> **Nota per gli utenti TypeScript:**
>
> Usa `isNullOrUndefined` per proteggerti da valori mancanti prima di accedere alle proprietà o chiamare metodi;
> restituisce `true` solo per `null` e `undefined`.

### Vantaggi

- Fornisce una guardia chiara e riutilizzabile per rilevare `null` e `undefined` in un unico punto.
- Restituisce un semplice booleano (`true`/`false`) facile da comporre in condizioni e validazioni.
- Aiuta a evitare errori comuni a runtime verificando la presenza di valori mancanti prima di accedere alle proprietà o
  chiamare metodi.

## Utilizzo

### Sintassi

Funzione:

- `isNullOrUndefined(value)`

Parametri:

- `value`: Il valore da controllare per `null` o `undefined`.

### Importazione locale della funzione

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // gestire il valore mancante
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isNullOrUndefined(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Il file è stato generato il 31 gennaio 2026 alle ore 00:34:05 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>