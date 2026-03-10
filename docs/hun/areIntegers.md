# areIntegers

## Leírás

Az `areIntegers` meghatározza, hogy egy adott tömb minden eleme egész szám-e; `true` értéket ad vissza, ha igen,
különben `false`-t.

### Használati eset

Használd az `areIntegers` függvényt felhasználó által megadott vagy külső adatok (pl. lekérdezési paraméterek, JSON
payloadok, CSV sorok) ellenőrzésére, amikor a logikádnak egész szám értékekből álló, kitöltött listára van szüksége,
például azonosítókhoz, számlálókhoz, lapozási eltolásokhoz vagy tömbindexekhez.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areIntegers` függvényt futásidejű őrként `unknown[]` bemenetekhez, mielőtt úgy kezelnéd őket, mint csak
> egész számokat tartalmazó `number[]`-t. Ha `false`-t ad vissza, akkor a bemenet vagy nem egy kitöltött tömb, vagy
> legalább egy nem egész értéket tartalmaz.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem egész szám; egyébként `false` értéket ad vissza.
- Segít az ismeretlen bemenet ellenőrzésében, mielőtt csak egész számokon végezhető műveleteket hajtanál végre (pl.
  indexelés, darabszámok, azonosítók).
- Gyorsan hibázik: abbahagyja az ellenőrzést, amint nem egész szám elemet talál.

## Használat

### Szintaxis

Függvény:

- `areIntegers(array)`

Paraméterek:

- `array`: A tömb, amelyet egész szám elemek szempontjából ellenőriz.

### Függvény helyi importálása

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // igaz
console.log(areIntegers(b)); // igaz
console.log(areIntegers(c)); // hamis

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areIntegers(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>A fájl 31 January 2026 at 00:58:52 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>