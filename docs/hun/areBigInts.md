# areBigInts

## Leírás

Az `areBigInts` meghatározza, hogy egy érték nem üres tömb-e, amely kizárólag `bigint` értékeket tartalmaz.

### Használati eset

Ismeretlen bemenet (pl. JSON-szerűen feldolgozott adatok, API payloadok vagy `unknown` típusú függvényparaméterek)
validálása annak biztosítására, hogy feldolgozás előtt nem üres, `bigint` értékekből álló tömb legyen; csak akkor ad
vissza `true` értéket, ha minden elem `bigint`, egyébként `false`.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areBigInts` függvényt futásidejű őrként, mielőtt kizárólag `bigint`-tel végezhető műveleteket (pl.
> aritmetika, összehasonlítások) hajtasz végre ismeretlen bemeneten.

### Előnyök

- Biztosítja, hogy minden elem `bigint`, és csak akkor ad vissza `true` értéket, ha a teljes tömb megfelel.
- Tervezetten elutasítja a nem tömböket és az üres tömböket (az `isFilledArray` révén), megelőzve az érvénytelen
  bemenetek véletlen elfogadását.
- Gyors leállás: `false` értékkel tér vissza, amint nem `bigint` elemet talál.

## Használat

### Szintaxis

Függvény:

- `areBigInts(array)`

Paraméterek:

- `array`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // igaz
console.log(areBigInts(b)); // hamis
console.log(areBigInts(c)); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areBigInts(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>A fájl 31 January 2026 at 23:26:08 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>