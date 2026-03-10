# areFloats

## Leírás

Az `areFloats` ellenőrzi, hogy egy adott tömb fel van-e töltve, és minden eleme lebegőpontos szám-e.

### Használati eset

Használd az `areFloats` függvényt, amikor egy `unknown[]`-t kapsz (pl. JSON-ból, lekérdezési paraméterekből vagy külső
API-kból), és biztosítanod kell, hogy ez egy nem üres tömb, amelyben minden elem lebegőpontos szám, mielőtt numerikus
logikát futtatnál, például átlagolást, interpolációt vagy statisztikai számításokat.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areFloats` függvényt `unknown[]` őrzésére (guard), mielőtt úgy kezelnéd, mint kizárólag lebegőpontos
> számokat tartalmazó `number[]`-t; `false` értéket ad vissza üres tömbökre és bármely nem lebegőpontos elem esetén.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha a bemenet egy nem üres tömb, és minden eleme lebegőpontos szám.
- Gyorsan leáll: `false` értéket ad vissza, amint nem lebegőpontos elemet talál.
- Segít az ismeretlen bemenet validálásában, mielőtt lebegőpontos számokra jellemző számításokat végeznél.

## Használat

### Szintaxis

Függvény:

- `areFloats(array)`

Paraméterek:

- `array`: A tömb, amelyben lebegőpontos elemeket ellenőriz.

### Függvény helyi importálása

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // igaz
console.log(areFloats(b)); // hamis
console.log(areFloats(c)); // hamis

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areFloats(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>A fájl 30 January 2026 at 15:57:46 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>