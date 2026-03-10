# areOfType

## Leírás

Ellenőrzi, hogy a megadott `array` minden eleme a megadott `type` típusú-e.

### Használati eset

Használd az `areOfType`-ot ismeretlen bemenet (pl. feldolgozott JSON, API payloadok, felhasználói bevitel)
ellenőrzésére, mielőtt a tömb minden elemén típusspecifikus műveleteket végeznél.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Mivel az `areOfType` egy típusőr, a TypeScript az `if (areOfType(...)) {}` blokkon belül a tömböt
`Array<DataTypeOf<T>>` típusra szűkíti.

### Előnyök

- TypeScript típusőrt biztosít: amikor `true`-t ad vissza, a bemenet `Array<DataTypeOf<T>>` típusra szűkül.
- Minden elemet ellenőriz a kért futásidejű típus ellen, megakadályozva, hogy vegyes típusú tömbök átmenjenek.
- Gyorsan megbukik: `false`-t ad vissza, amint nem egyező elemet talál.
- Tervezetten elutasítja a nem tömböket és az üres tömböket (az `isFilledArray`-tól függ).

## Használat

### Szintaxis

Függvény:

- `areOfType(array, type)`

Paraméterek:

- `array`: Az ellenőrizendő tömb.
- `type`: Az a típus, amelyhez a tömb minden elemét ellenőrizni kell.

### Függvény helyi importálása

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values most már number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areOfType(array, type)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>A fájl 30 January 2026 at 17:09:49 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>