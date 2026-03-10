# areNullOrUndefined

## Leírás

Ellenőrzi, hogy a megadott tömb minden eleme `null` vagy `undefined`-e.

### Használati eset

Ellenőrizd, hogy egy opcionális mezőkből álló lista nem tartalmaz-e tényleges értékeket (csak `null`/`undefined`),
mielőtt úgy döntenél, hogy kihagyod a feldolgozást, vagy megjelenítesz egy „nincsenek megadott értékek” állapotot.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areNullOrUndefined` függvényt, amikor ellenőrizned kell, hogy egy tömb csak hiányzó értékeket (`null`/
`undefined`) tartalmaz-e. Vedd figyelembe, hogy üres tömb esetén `false` értéket ad vissza.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem `null` vagy `undefined`.
- Üres tömbök esetén `false` értéket ad vissza, így segít megkülönböztetni a „nincs adat” állapotot az „összes érték
  hiányzik” állapottól.
- `unknown[]` tömbökkel is működik, így biztonságosan használható a típusok szűkítése előtt.

## Használat

### Szintaxis

Függvény:

- `areNullOrUndefined(array)`

Paraméterek:

- `array`: Az ellenőrizendő tömb.

### Függvény helyi importálása

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === igaz

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === hamis

const empty = areNullOrUndefined([]);
// empty === hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areNullOrUndefined(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>A fájl 31 January 2026 at 00:29:58 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>