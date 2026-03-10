# areHexadecimals

## Leírás

Ellenőrzi, hogy egy tömb minden eleme hexadecimális karakterlánc-e, és csak nem üres tömb esetén ad vissza `true`
értéket, ha minden elem érvényes.

### Használati eset

Használd az `areHexadecimals` függvényt felhasználói bemenet vagy külső adatok (pl. azonosítók, ellenőrzőösszegek,
színkódok vezető '#' nélkül) validálására, mielőtt hexadecimális értelmezést vagy további feldolgozást végeznél.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areHexadecimals` függvényt ismeretlen bemenet validálására értékek feldolgozása vagy konvertálása előtt (
> például a `parseInt(value, 16)` előtt vagy BigInt konverziók előtt).

### Előnyök

- Ellenőrzi, hogy minden elem hexadecimális karakterlánc-e, és csak akkor ad vissza `true` értéket, ha minden elem
  megfelel.
- Tervezetten elutasítja az üres tömböket, hiányzó bemeneti adatok esetén `false` értéket ad vissza.
- Egyszerű logikai eredményt (`true`/`false`) biztosít, amely alkalmas őrfeltételekhez és korai visszatéréses
  validáláshoz.

## Használat

### Szintaxis

Függvény:

- `areHexadecimals(array)`

Paraméterek:

- `array`: A tömb, amelyet hexadecimális karakterlánc elemek szempontjából kell ellenőrizni.

### Függvény helyi importálása

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areHexadecimals(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>A fájl 31 January 2026 at 23:06:29 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>