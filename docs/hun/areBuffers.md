# areBuffers

## Leírás

Az `areBuffers` ellenőrzi, hogy a megadott érték egy nem üres, kitöltött tömb-e, amelyben minden elem `Buffer`, és ha
igen, `true`-t ad vissza, egyébként pedig `false`-t.

### Használati eset

Bejövő darabtömbök (pl. streamekből, fájlfeltöltésekből vagy hálózati csomagokból) validálása annak biztosítására, hogy
minden rész `Buffer` példány legyen, mielőtt összefűznéd, dekódolnád, vagy kriptográfiai illetve bináris feldolgozó
függvényeknek adnád át.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areBuffers` függvényt `unknown[]` validálására, mielőtt Buffer-specifikus API-kat (például
`Buffer.concat`) hívnál, így a függvény csak akkor ad vissza `true` értéket, ha minden elem `Buffer`.

### Előnyök

- Biztosítja, hogy a bemenet minden eleme egy Node.js `Buffer` példány legyen, és csak akkor ad vissza `true` értéket,
  ha a teljes tömb megfelel.
- Korán elutasítja az érvénytelen bemeneteket azzal, hogy nem üres, kitöltött tömböt követel meg; üres tömbök vagy nem
  tömbök esetén `false` értéket ad vissza.
- Hasznos őrfeltételként kizárólag bufferrel végezhető műveletek előtt (pl. összefűzés, hashelés, bináris protokollok).

## Használat

### Szintaxis

Függvény:

- `areBuffers(array)`

Paraméterek:

- `array`: Az a tömb, amelyet buffer példányok szempontjából ellenőrizni kell.

### Függvény helyi importálása

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areBuffers(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>A fájl 31 January 2026 at 16:25:38 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>