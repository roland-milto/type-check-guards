# areStrings

## Leírás

Az `areStrings` ellenőrzi, hogy egy tömb nem üres-e, és minden eleme string-e; csak ebben az esetben ad vissza `true`
értéket.

### Használati eset

Külső vagy felhasználó által megadott adatok (pl. lekérdezési paraméterek, JSON payloadok, CSV mezők) validálása annak
biztosítására, hogy feldolgozás előtt egy nem üres stringlistád legyen.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areStrings` függvényt ismeretlen tömbök validálására, mielőtt csak stringekre vonatkozó logikát
> alkalmaznál; üres tömbök esetén `false` értéket ad vissza.

### Előnyök

- Biztosítja, hogy minden elem string legyen, és a vegyes típusú tömböket `false` visszaadásával elutasítja.
- Elutasítja az üres tömböket, így a `true` csak egy nem üres stringlistát jelez.
- Hasznos gyors futásidejű ellenőrzésként, mielőtt csak stringeken értelmezett műveleteket végeznél (pl. `trim`,
  `toLowerCase`).

## Használat

### Szintaxis

Függvény:

- `areStrings(value)`

Paraméterek:

- `value`: Expected type `string[]`.

### Függvény helyi importálása

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input futásidőben egy nem üres string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areStrings(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>A fájl 30 January 2026 at 13:18:43 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>