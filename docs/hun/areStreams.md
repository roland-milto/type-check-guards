# areStreams

## Leírás

Az `areStreams` meghatározza, hogy egy érték nem üres tömb-e, amelyben minden elem `Stream`.

### Használati eset

Felhasználó által megadott vagy dinamikusan összeállított gyűjtemények (pl. több fájl-olvasó stream) ellenőrzése,
mielőtt csővezetékre (pipe), folytatásra (resume) vagy egyéb csoportos műveletekre használnád őket.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areStreams` függvényt ismeretlen bemenet ellenőrzésére, mielőtt `Stream[]`-ként kezelnéd; csak akkor ad
> vissza `true`-t, ha az érték nem üres tömb, és minden eleme `Stream`.

### Előnyök

- Biztosítja, hogy a bemenet egy nem üres tömb legyen, amelyben minden elem `Stream`.
- Egyszerű `true`/`false` őrfeltételt ad a stream-gyűjtemények feldolgozás előtti ellenőrzéséhez.
- Gyorsan hibázik: `false`-t ad vissza, amint nem `Stream` elemet talál.
- Segít megelőzni a futásidejű hibákat, amikor a kód feltételezi, hogy minden elem `Stream` példány.

## Használat

### Szintaxis

Függvény:

- `areStreams(array)`

Paraméterek:

- `array`: Az a tömb, amelyet Stream objektumok szempontjából kell ellenőrizni.

### Függvény helyi importálása

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // a bemenet Stream objektumokkal feltöltött tömb
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areStreams(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>A fájl 30 January 2026 at 23:34:07 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>