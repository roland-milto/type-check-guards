# isStream

## Opis

`isStream` provjerava da li je data vrijednost stream objekat (Node.js nalik streamu, `ReadableStream` ili
`WritableStream`).

### Slučaj upotrebe

Validirajte ulaze koji mogu biti ili obični objekti ili streamovi (npr. uploadovi datoteka, HTTP tijela ili procesni
pipelineovi) i granajte logiku na osnovu toga da li je vrijednost stream.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isStream` da suzite tip `unknown` prije pozivanja stream metoda; prepoznaje Node.js objekte nalik streamu (
> preko `pipe`/`on`) i Web Streams (`ReadableStream`/`WritableStream`) kada ti globali postoje.

### Prednosti

- Sigurno prepoznaje uobičajene Node.js objekte nalik streamu provjerom postojanja funkcija `pipe` i `on`.
- Također podržava Web Streams prepoznavanjem `ReadableStream` i `WritableStream` kada su dostupni.
- Vraća jednostavan booleanski rezultat (`true`/`false`) pogodan za guardove i grananje logike.

## Upotreba

### Sintaksa

Funkcija:

- `isStream(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream je nalik streamu; možete sigurno koristiti uobičajene stream API-je
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isStream(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isStream](../_analysis/isStream.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 23:39:01 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>