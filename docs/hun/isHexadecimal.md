# isHexadecimal

## Leírás

Az `isHexadecimal` ellenőrzi, hogy egy adott érték kötelező `0x`/`0X` előtaggal rendelkező hexadecimális string
literál-e.

### Használati eset

Használd az `isHexadecimal` függvényt konfigurációs értékek, API payload mezők vagy CLI argumentumok ellenőrzésére,
amelyeknek hexadecimális string literálként kell megadva lenniük (pl. azonosítók, maszkok vagy címek), és nem
tartalmazhatnak környező szóközöket.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isHexadecimal` függvényt, amikor felhasználói bemenetet vagy szerializált adatot kell szigorú
> hexadecimális literál stringként (a `0x`/`0X` előtaggal együtt) ellenőrizned, mielőtt feldolgoznád vagy átalakítanád.

### Előnyök

- Ellenőrzi, hogy egy érték string-e, és megfelel-e egy szigorú hexadecimális literál formátumnak (kötelező a `0x`/`0X`
  előtag).
- Elutasítja az elején vagy végén szóközt tartalmazó stringeket, segítve elkerülni a kitöltött (padded) bemenet véletlen
  elfogadását.
- Támogatja az opcionális előjelet, és nem érzékeny a kis-/nagybetűkre az előtag és a számjegyek esetén, kiszámíthatóan
  `true`/`false` értéket ad vissza.

## Használat

### Szintaxis

Függvény:

- `isHexadecimal(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // igaz
isHexadecimal("-0Xff"); // igaz
isHexadecimal("1A2B"); // hamis (hiányzó előtag)
isHexadecimal(" 0x1A2B"); // hamis (kezdő szóköz)
isHexadecimal(0x1a2b); // hamis (nem karakterlánc)
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isHexadecimal(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>A fájl 31 January 2026 at 22:59:01 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>