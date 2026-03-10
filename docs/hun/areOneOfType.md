# areOneOfType

## Leírás

Az `areOneOfType` ellenőrzi, hogy egy nem üres tömb minden eleme a megadott futásidejű típusok valamelyikébe tartozik-e.

### Használati eset

Bejövő adatok (pl. feldolgozott JSON) validálása, amikor egy mezőnek nem üres tömbnek kell lennie, amelynek elemei egy
ismert primitív típuskészletre vannak korlátozva; `false` értéket ad vissza, ha a tömb üres, vagy bármely elem tiltott
típusú.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Ez a függvény logikai értéket ad vissza, és fordítási időben nem szűkíti a tömbelemek típusát; futásidejű validációs
> lépésként használd a további feldolgozás előtt.

### Előnyök

- Biztosítja, hogy egy tömb minden eleme legalább egy engedélyezett futásidejű típusnak megfeleljen, és csak akkor ad
  vissza `true` értéket, ha az egész tömb megfelel.
- Korán elutasítja az érvénytelen bemeneteket: `false` értéket ad vissza, ha az `array` vagy a `types` üres, vagy nem
  kitöltött tömb.
- Hasznos vegyes típusú gyűjtemények (pl. számok és karakterláncok) ellenőrzésére egyetlen `areOneOfType` hívással.

## Használat

### Szintaxis

Függvény:

- `areOneOfType(array, types)`

Paraméterek:

- `array`: A megadott típusokkal szemben ellenőrizendő elemek tömbje.
- `types`: Az ellenőrizendő adattípusokat jelölő karakterláncok tömbje.

### Függvény helyi importálása

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areOneOfType(array, types)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>A fájl 31 January 2026 at 23:37:10 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>