# areUndefined

## Leírás

Az `areUndefined` azt ellenőrzi, hogy a megadott tömb minden eleme `undefined`-e.

### Használati eset

Annak validálása, hogy egy opcionális eredményeket tartalmazó lista nem tartalmaz tényleges értékeket (csak `undefined`
-et), például keresések (lookupok) leképezése után, ahol a hiányzó bejegyzéseket `undefined` jelöli, és meg akarod
erősíteni, hogy minden keresés sikertelen volt.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areUndefined` függvényt, amikor azt kell állítanod, hogy egy `unknown[]` kizárólag `undefined` értékeket
> tartalmaz; üres tömbökre és nem tömb/érvénytelen bemenetekre `false`-t ad vissza a belső `isFilledArray` ellenőrzés
> miatt.

### Előnyök

- A `isFilledArray` segítségével kitöltött tömböt követel meg, ezért a nem tömbökre és az üres tömbökre `false`-t ad
  vissza.
- Biztosítja, hogy minden elem `undefined` legyen, ne csak néhány, így a szándék egyértelmű.
- Hasznos őr (guard) jellegű predikátumként ismeretlen bemeneti gyűjtemények validálásakor.

## Használat

### Szintaxis

Függvény:

- `areUndefined(array)`

Paraméterek:

- `array`: Az a tömb, amelyben az `undefined` elemeket ellenőrizni kell.

### Függvény helyi importálása

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // igaz
const r2 = areUndefined(b); // hamis
const r3 = areUndefined(c); // hamis

// Megjegyzés: üres tömbök esetén hamisat ad vissza
const r4 = areUndefined([]); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areUndefined(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>A fájl 30 January 2026 at 13:56:10 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>