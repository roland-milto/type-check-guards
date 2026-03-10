# isFloat

## Leírás

Az `isFloat` meghatározza, hogy egy adott `value` véges lebegőpontos szám-e (olyan `number`, amely nem egész szám).

### Használati eset

Felhasználó által megadott numerikus bemenet validálása, ahol tört értékek szükségesek (pl. árak, mérések, ráták), és az
egész számok, a `NaN` és a végtelenek elutasítása.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isFloat`-ot, amikor csak véges, nem egész numerikus bemeneteket kell elfogadnod; elutasítja az egész
> számokat és a nem véges számokat.

### Előnyök

- Csak véges, nem egész számok esetén ad vissza `true` értéket (kizárja az egész számokat, a `NaN`-t, az `Infinity`-t és
  a `-Infinity`-t).
- Bármilyen bemeneti típussal (`unknown`) működik, és biztonságosan szűkít a `typeof value === "number"` ellenőrzésével.
- Beépített numerikus őröket használ (`Number.isInteger`, `Number.isFinite`) a kiszámítható viselkedésért.

## Használat

### Szintaxis

Függvény:

- `isFloat(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték, hogy lebegőpontos szám-e.

### Függvény helyi importálása

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // az érték futásidőben szám; véges, és nem egész szám
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isFloat(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>A fájl 30 January 2026 at 16:08:04 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>