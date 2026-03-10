# isStream

## Opis

`isStream` preveri, ali je dana vrednost objekt stream (Node.js streamu podoben, `ReadableStream` ali `WritableStream`).

### Primer uporabe

Validirajte vhode, ki so lahko bodisi navadni objekti bodisi streami (npr. nalaganje datotek, telesa HTTP ali
obdelovalni cevovodi), in razvejajte logiko glede na to, ali je vrednost stream.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isStream` za zoženje tipa `unknown` pred klicanjem metod streama; prepozna Node.js streamu podobne
> objekte (prek `pipe`/`on`) in Web Streams (`ReadableStream`/`WritableStream`), ko ti globalni objekti obstajajo.

### Prednosti

- Varno zazna pogoste Node.js streamu podobne objekte s preverjanjem funkcij `pipe` in `on`.
- Podpira tudi Web Streams, saj prepozna `ReadableStream` in `WritableStream`, ko sta na voljo.
- Vrne preprost logični rezultat (`true`/`false`), primeren za varovalke (guards) in razvejanje logike.

## Uporaba

### Skladnja

Funkcija:

- `isStream(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream je podoben toku; lahko varno uporabljate običajne API-je za tokove
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isStream(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isStream](../_analysis/isStream.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 23:42:52 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>