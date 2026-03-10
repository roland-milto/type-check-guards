# isStream

## Leírás

Az `isStream` ellenőrzi, hogy egy adott érték stream objektum-e (Node.js stream-szerű, `ReadableStream` vagy
`WritableStream`).

### Használati eset

Olyan bemenetek validálása, amelyek lehetnek egyszerű objektumok vagy streamek (pl. fájlfeltöltések, HTTP törzsek vagy
feldolgozási pipeline-ok), és a logika elágaztatása aszerint, hogy az érték stream-e.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isStream` függvényt az `unknown` típus szűkítésére, mielőtt stream metódusokat hívnál; felismeri a
> Node.js stream-szerű objektumokat (`pipe`/`on` alapján), valamint a Web Streameket (`ReadableStream`/`WritableStream`),
> amikor ezek a globálisok léteznek.

### Előnyök

- Biztonságosan felismeri a gyakori Node.js stream-szerű objektumokat a `pipe` és `on` függvények ellenőrzésével.
- A Web Streameket is támogatja: felismeri a `ReadableStream` és `WritableStream` objektumokat, ha elérhetők.
- Egyszerű logikai eredményt (`true`/`false`) ad vissza, amely alkalmas őrfeltételekhez és elágazó logikához.

## Használat

### Szintaxis

Függvény:

- `isStream(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // a nodeStream stream-szerű; biztonságosan használhatod a gyakori stream API-kat
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isStream(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isStream](../_analysis/isStream.md)

<br>

---

<small>A fájl 30 January 2026 at 23:41:47 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>