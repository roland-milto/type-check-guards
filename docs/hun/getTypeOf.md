# getTypeOf

## Leírás

A `getTypeOf` egy adott értékhez részletes, ember által olvasható típuscímkét ad vissza, beleértve a finomított
numerikus típusokat és a konkrét objektumfajtákat.

### Használati eset

Használd a `getTypeOf`-ot a típusfelismerés egységesítésére bemeneti validálásban és diagnosztikában—például a `nan`
elutasítására, csak `integer` azonosítók elfogadására, a `decimal` jellegű numerikus sztringek eltérő kezelésére a sima
`string`-től, vagy olyan pontos objektumfajták naplózására, mint a `date` és a `regexp`.

> **Megjegyzés TypeScript felhasználóknak:**
>
> A visszatérési típus `DataTypeAsString | string`. Kezeld leíró címkeként; elágazáskor hasonlítsd ismert literálokhoz,
> mint az `integer`, `float`, `nan`, `array`, `null` és `undefined`.

### Előnyök

- A JavaScript `typeof`-nál részletesebb típussztringet ad vissza, beleértve az olyan numerikus altípusokat, mint az
  `integer`, `float` és `nan`.
- Az `null` és az `undefined` értékeket kifejezetten `null` és `undefined` néven különbözteti meg.
- Felismeri a gyakori numerikus sztringformátumokat, és egyszerű `string` helyett `binary`, `octal`, `decimal` vagy
  `hexadecimal` értékként jelenti őket.
- A tömböket `array`-ként azonosítja, és az `Object.prototype.toString` használatával konkrét objektumtípus-neveket ad (
  pl. `date`, `regexp`, `map`, `set`).
- Hasznos validáláshoz, naplózáshoz és hibakereséshez, ahol következetes, ember által olvasható típuscímkékre van
  szükség.

## Használat

### Szintaxis

Függvény:

- `getTypeOf(value)`

Paraméterek:

- `value`: Az az érték, amelynek az adattípusát meg kell határozni.

### Függvény helyi importálása

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Példaellenőrzések
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.getTypeOf(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>A fájl 6 February 2026 at 13:06:57 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>