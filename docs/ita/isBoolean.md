# isBoolean

## Descrizione

Determina se un determinato valore è un `boolean`.

### Caso d’uso

Valida dati esterni o non tipizzati (ad es. variabili d'ambiente, payload JSON, parametri di query) per assicurarti che
un valore sia un `boolean` prima di usarlo nella logica condizionale.

> **Nota per gli utenti TypeScript:**
>
> Usa `isBoolean` per restringere `unknown` a `boolean` prima di applicare operazioni booleane.

### Vantaggi

- Controllo di runtime semplice e veloce usando `typeof`.
- Aiuta a validare input sconosciuti prima di applicare logica specifica per i booleani.
- Restituisce un risultato `boolean` prevedibile (`true`/`false`).

## Utilizzo

### Sintassi

Funzione:

- `isBoolean(value)`

Parametri:

- `value`: Il valore da controllare.

### Importazione locale della funzione

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input è booleano qui
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Importazione globale dell’oggetto

Per importare le funzioni come metodi globali dell’oggetto usa:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Il seguente metodo sarà quindi disponibile globalmente:

- `Type.isBoolean(value)`

## Analisi delle funzioni

Qui è documentata un’analisi tabellare dell’output che si ottiene inserendo parametri diversi nelle
funzioni: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Il file è stato generato il 30 gennaio 2026 alle ore 14:36:43 (UTC) con l’utilizzo del *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** da *
*[Roland Milto](https://roland-milto.de/)**.</small>