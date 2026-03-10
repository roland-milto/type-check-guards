# isArray

## Leírás

Az `isArray` ellenőrzi, hogy egy adott érték tömb-e, és `true`-t ad vissza, ha igen, különben `false`-t.

### Használati eset

Ismeretlen adatok (pl. feldolgozott JSON vagy API-válaszok) validálása annak biztosítására, hogy egy érték tömb legyen,
mielőtt bejárnád, indexelnéd, vagy elérnéd a `.length` tulajdonságot.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isArray` függvényt, amikor futásidejű ellenőrzésre van szükséged tömbökhöz; logikai értéket ad vissza, és
> biztonságosan hívható `unknown` értékekkel.

### Előnyök

- A beépített `Array.isArray` metódust használja a megbízható tömbfelismeréshez különböző realm-ek között (pl.
  iframe-ek).
- Egyszerű logikai eredményt (`true`/`false`) ad vissza, ami alkalmas őrfeltételekhez és elágazó logikához.
- Bármilyen bemeneti típussal működik, mert a paraméter típusa `unknown`.

## Használat

### Szintaxis

Függvény:

- `isArray(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // a bemenet futásidőben tömb
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isArray(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isArray](../_analysis/isArray.md)

<br>

---

<small>A fájl 6 February 2026 at 11:30:44 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>