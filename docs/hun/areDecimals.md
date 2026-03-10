# areDecimals

## Leírás

Ellenőrzi, hogy egy tömb minden eleme decimális szám-e, és hogy a tömb fel van-e töltve, majd `true` vagy `false`
értékkel tér vissza.

### Használati eset

Felhasználó által megadott listák (pl. CSV oszlopok vagy űrlapmezők) validálása annak biztosítására, hogy a tömb nem
üres, és minden bejegyzés decimális érték, még a feldolgozás vagy számítások előtt.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areDecimals` függvényt, amikor gyors logikai ellenőrzésre van szükséged, hogy egy `unknown[]` nem üres,
> és minden eleme decimális ábrázolás.

### Előnyök

- Biztosítja, hogy a bemenet egy feltöltött tömb legyen az elemek validálása előtt, megelőzve az üres listák véletlen
  elfogadását.
- Minden elemet az `isDecimal` segítségével validál, így a vegyes vagy érvénytelen értékek azonnali `false` eredményt
  adnak.
- Egyszerű logikai kimenetet (`true`/`false`) ad, amely alkalmas őrfeltételekhez és korai visszatéréses validálási
  folyamatokhoz.

## Használat

### Szintaxis

Függvény:

- `areDecimals(array)`

Paraméterek:

- `array`: Az ellenőrizendő tömb.

### Függvény helyi importálása

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // igaz
console.log(areDecimals(b)); // hamis
console.log(areDecimals(c)); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areDecimals(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>A fájl 31 January 2026 at 15:57:32 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>