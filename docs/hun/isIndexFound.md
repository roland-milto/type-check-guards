# isIndexFound

## Leírás

Az `isIndexFound` meghatározza, hogy egy adott érték nem negatív egész szám-e, jelezve, hogy az index megtalálható.

### Használati eset

Ellenőrizd, hogy egy keresési eredmény használható indexet (egész szám `>= 0`) jelent-e, mielőtt egy tömbbe vagy
sztringbe indexelnél, megelőzve a `-1` vagy nem numerikus értékek véletlen használatát.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isIndexFound`-ot olyan műveletek után, mint az `indexOf`, a `findIndex`, vagy egyedi keresések, ahol a
`-1` (vagy más érvénytelen értékek) jelezhetik, hogy „nem található”. Amikor `true`-t ad vissza, az érték szám, és
> biztonságosan használható tömb-/sztringindexként.

### Előnyök

- Egyszerű típusőrt biztosít annak felismerésére, hogy talált-e indexet, egy nem negatív egész szám ellenőrzésével.
- Csak érvényes, index-szerű értékekre ad vissza `true`-t (egész számok `>= 0`), elutasítva a negatívakat, a nem egész
  számokat és a nem számokat.
- Segít elkerülni az egyel elcsúszó (off-by-one) és az őrszemérték (sentinel) hibákat, amikor olyan API-kkal dolgozol,
  amelyek `-1`-et adnak vissza „nem található” esetén.

## Használat

### Szintaxis

Függvény:

- `isIndexFound(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték, hogy nem negatív egész szám-e.

### Függvény helyi importálása

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx itt egy szám, és >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Tipikus használat az indexOf-fal
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isIndexFound(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>A fájl 31 January 2026 at 00:46:15 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>