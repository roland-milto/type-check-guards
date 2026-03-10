# isNull

## Leírás

Meghatározza, hogy a megadott `value` értéke `null`-e.

### Használati eset

Használd az `isNull`-t bemenetek vagy API payload mezők validálására, ahol a `null` jelentéssel bíró jelző (sentinel)
érték, és másként kell kezelni, mint az `undefined`-ot vagy más értékeket.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isNull`-t, amikor meg kell különböztetned a `null`-t az `undefined`-tól és más hamis (falsy) értékektől;
> csak `null` esetén ad vissza `true`-t.

### Előnyök

- Pontos ellenőrzést biztosít a `null` értékre anélkül, hogy összekeverné az `undefined`-dal.
- Bármilyen bemeneti típus esetén megbízhatóan működik, mert `unknown`-t fogad el.
- Egyszerű, gyors és mellékhatásmentes; kizárólag `true`-t vagy `false`-t ad vissza.

## Használat

### Szintaxis

Függvény:

- `isNull(value)`

Paraméterek:

- `value`: A `null` ellenőrzéséhez vizsgálandó érték.

### Függvény helyi importálása

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // a itt null
}
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isNull(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isNull](../_analysis/isNull.md)

<br>

---

<small>A fájl 31 January 2026 at 15:39:29 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>