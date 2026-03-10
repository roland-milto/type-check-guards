# isObject

## Leírás

Meghatározza, hogy egy adott `value` `object`-e (a `null` kivételével).

### Használati eset

Használd az `isObject`-et ismeretlen bemenetek (pl. parse-olt JSON, API-válaszok, esemény payloadok) validálására a
tulajdonságok elérése előtt, biztosítva, hogy az érték objektum és nem `null`.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isObject` egy futásidejű guard, amely boolean értéket ad vissza; nem szűkít egy konkrét objektum-alakzatra.
> Kombináld további ellenőrzésekkel (pl. tulajdonság megléte), amikor erősebb típusosságra van szükséged.

### Előnyök

- Csak a nem `null` értékekre ad vissza `true`-t, amelyeknél a `typeof` értéke `"object"`.
- Megelőzi a gyakori JavaScript-buktatót, amikor a `null`-t egyébként objektumként kezelné.
- Működik egyszerű objektumokkal és beépített objektumpéldányokkal is (pl. `Date`, `RegExp`).
- Egyszerű, gyors futásidejű ellenőrzés, amely alkalmas védekező programozásra és bemenetvalidálásra.

## Használat

### Szintaxis

Függvény:

- `isObject(value)`

Paraméterek:

- `value`: Az érték, amelyről ellenőrizni kell, hogy `object`-e.

### Függvény helyi importálása

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // a bemenet futásidőben nem null értékű objektum
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isObject(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isObject](../_analysis/isObject.md)

<br>

---

<small>A fájl 31 January 2026 at 00:18:50 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>