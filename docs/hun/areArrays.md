# areArrays

## Leírás

Az `areArrays` meghatározza, hogy egy érték egy kitöltött kétdimenziós tömb-e, amelynek elemei mind tömbök.

### Használati eset

Használd az `areArrays` függvényt táblázatos vagy mátrix jellegű bemenetek (pl. CSV sorok, rácsadatok vagy
csoportosított listák) ellenőrzésére sor/oszlop műveletek előtt; `false` értéket ad vissza, ha a bemenet nem tömb, üres,
vagy bármely eleme nem tömb.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areArrays` függvényt, amikor biztosítani kell, hogy egy érték nem üres 2D tömb legyen, és hogy minden sor
> tömb, mielőtt bejárnád vagy indexelnél a beágyazott tömbökben.

### Előnyök

- Ellenőrzi, hogy a bemenet egy nem üres kétdimenziós tömb, ahol minden elem egy tömb.
- Egy egyszerű logikai eredményt (`true`/`false`) ad vissza, amely alkalmas őrfeltételekhez és korai kilépésekhez.
- Segít megelőzni a futásidejű hibákat, amikor a későbbi kód beágyazott tömbműveleteket feltételez (pl. sorok
  leképezése).

## Használat

### Szintaxis

Függvény:

- `areArrays(array)`

Paraméterek:

- `array`: Az ellenőrizendő bemenet.

### Függvény helyi importálása

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // az érték egy 2D tömb, amelynek elemei tömbök
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areArrays(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>A fájl 6 February 2026 at 13:39:56 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>