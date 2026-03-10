# isFinite

## Leírás

Meghatározza, hogy egy adott `value` véges `number`-e.

### Használati eset

Használd az `isFinite` függvényt ismeretlen bemenet (pl. JSON-ból, űrlapokból vagy API-kból származó érték) validálására
numerikus számítások előtt, biztosítva, hogy az érték valós, véges szám.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isFinite` csak véges számok esetén ad vissza `true` értéket; `false` értéket ad vissza `NaN`, `Infinity` és
> bármely nem szám típusú érték esetén.

### Előnyök

- A beépített `Number.isFinite` függvényt használja a megbízható végesség-ellenőrzéshez.
- Csak véges számok esetén ad vissza `true` értéket; `false` értéket ad vissza `NaN`, `Infinity` és nem szám típusú
  bemenetek esetén.
- Egyszerű, mellékhatásoktól mentes predikátum, amely alkalmas validáláshoz és őrző (guard) logikához.

## Használat

### Szintaxis

Függvény:

- `isFinite(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték, hogy véges-e.

### Függvény helyi importálása

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value itt véges szám
  const doubled = value * 2;
  console.log(doubled);
}
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isFinite(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>A fájl 30 January 2026 at 16:30:10 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>