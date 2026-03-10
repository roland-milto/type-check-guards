# isPrimitive

## Leírás

Az `isPrimitive` meghatározza, hogy egy adott érték primitív-e (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Használati eset

Bemenetek futásidejű validálása (pl. API payload mezők, konfigurációs értékek vagy felhasználó által megadott adatok)
annak biztosítására, hogy egy érték primitív legyen, mielőtt szerializálnád, naplóznád, vagy csak primitívekre vonatkozó
műveleteket alkalmaznál.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isPrimitive` függvényt az `unknown` bemenetek őrzésére, mielőtt objektumként vagy függvényként kezelnéd
> őket; primitívekre `true`-t, objektumokra és függvényekre `false`-t ad vissza.

### Előnyök

- Gyors, allokációmentes ellenőrzés annak megállapítására, hogy egy érték JavaScript primitív-e.
- Helyesen kezeli a `null` értéket primitívként (annak ellenére, hogy a `typeof null` értéke `"object"`).
- Segít szűkíteni az `unknown` értékeket, mielőtt csak objektumokra vonatkozó műveleteket végeznénk.

## Használat

### Szintaxis

Függvény:

- `isPrimitive(value)`

Paraméterek:

- `value`: Az az érték, amelynél ellenőrizni kell, hogy primitív típusú-e.

### Függvény helyi importálása

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isPrimitive(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>A fájl 30 January 2026 at 23:56:32 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>