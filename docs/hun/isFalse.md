# isFalse

## Leírás

Az `isFalse` ellenőrzi, hogy egy adott érték szigorúan egyenlő-e a `false` logikai literállal.

### Használati eset

Ismeretlen adatok (pl. JSON-ból, lekérdezési paraméterekből vagy felhasználói bemenetből) validálása, ahol csak a
kifejezett `false` logikai értéket kell érvényes jelzőként elfogadni, és minden mást el kell utasítani.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isFalse` függvényt, amikor csak a `false` literált kell elfogadnod, és minden más hamisnak értékelt (
> falsy) értéket el kell utasítanod; csak `value === false` esetén ad vissza `true` értéket.

### Előnyök

- Szigorú ellenőrzést biztosít a `false` logikai literálra kényszerítés nélkül.
- Segít megkülönböztetni a `false` értéket más hamisnak értékelt (falsy) értékektől, mint például `0`, `""`, `null` és
  `undefined`.
- Javítja az olvashatóságot azáltal, hogy egyértelművé teszi a szándékot ismeretlen bemenet validálásakor.

## Használat

### Szintaxis

Függvény:

- `isFalse(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // itt az input pontosan false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isFalse(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>A fájl 31 January 2026 at 16:21:53 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>