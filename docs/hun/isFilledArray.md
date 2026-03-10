# isFilledArray

## Leírás

Ellenőrzi, hogy a `value` egy legalább egy elemet tartalmazó tömb-e, és `true`-t vagy `false`-t ad vissza.

### Használati eset

Használd az `isFilledArray`-t a bejövő adatok (pl. API payloadok, űrlapértékek, konfiguráció) validálására iterálás, az
első elem elérése vagy olyan logika alkalmazása előtt, amely legalább egy elemet igényel.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isFilledArray` egy futásidejű őr (guard), amely logikai értéket ad vissza; az elemtípusokat nem szűkíti azon túl,
> hogy megerősíti: a tömb nem üres.

### Előnyök

- Egyszerű, gyors ellenőrzés egy nem üres tömbre az `Array.isArray` és a hosszellenőrzés használatával.
- Segít elkerülni a futásidejű hibákat, amikor a kód feltételezi, hogy a tömbben legalább egy elem van.
- Egyértelmű logikai eredmény: nem üres tömbök esetén `true`-t ad vissza, egyébként `false`-t.

## Használat

### Szintaxis

Függvény:

- `isFilledArray(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték, hogy nem üres tömb-e.

### Függvény helyi importálása

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // a bemenet futásidőben nem üres tömb
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isFilledArray(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>A fájl 6 February 2026 at 11:47:27 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>