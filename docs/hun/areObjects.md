# areObjects

## Leírás

Az `areObjects` ellenőrzi, hogy egy megadott nem üres tömb kizárólag objektumokat tartalmaz-e.

### Használati eset

Használd az `areObjects` függvényt, amikor ismeretlen tömböt kapsz (pl. JSON feldolgozásból vagy külső API-kból), és
biztosítanod kell, hogy nem üres, valamint hogy minden eleme objektum, mielőtt bejárnád és hozzáférnél az
objektumtulajdonságokhoz.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `areObjects` használatával validálhatod az `unknown[]` értéket, mielőtt az elemeket objektumként kezelnéd; üres
> tömbök esetén `false` értéket ad vissza.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha a bemenet egy nem üres tömb, és minden eleme objektum.
- Korán leáll, és `false` értéket ad vissza, amint nem objektum elemet talál.
- Segít ismeretlen bemenetet validálni, mielőtt objektumspecifikus műveleteket végeznél.

## Használat

### Szintaxis

Függvény:

- `areObjects(array)`

Paraméterek:

- `array`: Az a tömb, amelyet ellenőrizni kell, hogy objektum elemeket tartalmaz-e.

### Függvény helyi importálása

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value egy objektumokkal feltöltött tömb
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areObjects(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>A fájl 31 January 2026 at 00:09:01 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>