# areFalse

## Leírás

Az `areFalse` ellenőrzi, hogy a megadott tömb minden eleme szigorúan a logikai `false` érték-e.

### Használati eset

Ellenőrizd, hogy egy feature flag-ekből, ellenőrzésekből vagy guard eredményekből álló lista mind `false`, mielőtt
továbblépsz (pl. erősítsd meg, hogy nincs jelen semmilyen blokkoló feltétel).

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areFalse` függvényt, amikor szigorú validálásra van szükséged, hogy egy tömb nem üres, és kizárólag a
> logikai `false` értéket tartalmazza.

### Előnyök

- Biztosítja, hogy minden elem szigorúan `false` (nincs truthy/falsey kényszerítés).
- `false` értéket ad vissza nem tömbök vagy üres tömbök esetén azáltal, hogy a `isFilledArray` segítségével kitöltött
  tömböt követel meg.
- Hatékonyság érdekében korán leáll az első nem-`false` elemnél.

## Használat

### Szintaxis

Függvény:

- `areFalse(array)`

Paraméterek:

- `array`: Az ellenőrizendő tömb, bármilyen típusú elemekkel.

### Függvény helyi importálása

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // igaz
const b = areFalse([false, true, false]);  // hamis
const c = areFalse([false, "false", false]); // hamis
const d = areFalse([]); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areFalse(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>A fájl 31 January 2026 at 16:17:21 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>