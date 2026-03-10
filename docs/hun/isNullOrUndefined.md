# isNullOrUndefined

## Leírás

Ellenőrzi, hogy egy adott érték `null` vagy `undefined`-e.

### Használati eset

Használd az `isNullOrUndefined` függvényt, amikor a `null`-t és az `undefined`-et egyaránt „nincs érték”-ként szeretnéd
kezelni, például opcionális bemenetek validálásakor, API payloadok normalizálásakor, vagy kódútvonalak őrzésekor,
mielőtt egy potenciálisan hiányzó értéket dereferálnál.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isNullOrUndefined` függvényt a hiányzó értékek elleni védekezésre, mielőtt tulajdonságokat érnél el vagy
> metódusokat hívnál; csak `null` és `undefined` esetén ad vissza `true` értéket.

### Előnyök

- Egyértelmű, újrahasznosítható őrfeltételt biztosít a `null` és az `undefined` egy helyen történő felismeréséhez.
- Egy egyszerű logikai értéket (`true`/`false`) ad vissza, amely könnyen összefűzhető feltételekben és validációkban.
- Segít elkerülni a gyakori futásidejű hibákat azáltal, hogy a tulajdonságok elérése vagy metódusok meghívása előtt
  ellenőrzi a hiányzó értékeket.

## Használat

### Szintaxis

Függvény:

- `isNullOrUndefined(value)`

Paraméterek:

- `value`: Az az érték, amelyet `null` vagy `undefined` szempontjából kell ellenőrizni.

### Függvény helyi importálása

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // hiányzó érték kezelése
}

console.log(isNullOrUndefined(b)); // igaz
console.log(isNullOrUndefined(c)); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isNullOrUndefined(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>A fájl 31 January 2026 at 00:34:02 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>