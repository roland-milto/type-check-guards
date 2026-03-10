# areNaNs

## Leírás

Az `areNaNs` ellenőrzi, hogy egy tömb minden eleme `NaN`-e, és csak akkor ad vissza `true` értéket, ha minden elem
`NaN`.

### Használati eset

Bejövő adatok validálása, ahol a `NaN` jelző (sentinel) értékként van használva, és biztosítanod kell, hogy a teljes
tömb kizárólag `NaN`-ból álljon (pl. egy teljesen hiányzó numerikus idősor felismerése).

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areNaNs` függvényt, amikor azt kell ellenőrizned, hogy egy tömb kizárólag a numerikus `NaN` értéket
> tartalmazza (karakterlánc-szám kényszerítés nélkül).

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem `NaN` (szigorú, minden elemre kiterjedő ellenőrzés).
- Nem kényszeríti a karakterláncokat számokká; az olyan értékek, mint a "NaN", nem-`NaN` maradnak, és az eredményt
  `false`-szá teszik.
- Nem feltöltött tömbök esetén `false` értéket ad vissza, megelőzve a véletlen `true` eredményt üres bemenetnél.

## Használat

### Szintaxis

Függvény:

- `areNaNs(array)`

Paraméterek:

- `array`: A `NaN` értékek ellenőrzéséhez használt tömb.

### Függvény helyi importálása

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // igaz
const b = areNaNs([NaN, 1, NaN]); // hamis
const c = areNaNs([NaN, "NaN", NaN]); // hamis
const d = areNaNs([NaN, null, NaN]); // hamis
const e = areNaNs([] as unknown[]); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areNaNs(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>A fájl 30 January 2026 at 15:51:47 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>