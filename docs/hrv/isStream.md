# isStream

## Opis

`isStream` provjerava je li zadana vrijednost stream objekt (Node.js stream-like, `ReadableStream` ili
`WritableStream`).

### Slučaj uporabe

Validirajte ulaze koji mogu biti ili obični objekti ili streamovi (npr. prijenosi datoteka, HTTP tijela ili procesni
cjevovodi) i granajte logiku ovisno o tome je li vrijednost stream.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isStream` za sužavanje tipa `unknown` prije pozivanja stream metoda; prepoznaje objekte slične Node.js
> streamovima (preko `pipe`/`on`) i Web Streams (`ReadableStream`/`WritableStream`) kada ti globali postoje.

### Prednosti

- Sigurno otkriva uobičajene objekte slične Node.js streamovima provjerom funkcija `pipe` i `on`.
- Također podržava Web Streams prepoznavanjem `ReadableStream` i `WritableStream` kada su dostupni.
- Vraća jednostavan booleovski rezultat (`true`/`false`) prikladan za guardove i grananje logike.

## Uporaba

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
  // nodeStream je nalik streamu; možete sigurno koristiti uobičajene API-je za stream
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isStream(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isStream](../_analysis/isStream.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 23:39:54 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>