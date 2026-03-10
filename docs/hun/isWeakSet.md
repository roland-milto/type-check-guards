# isWeakSet

## Leírás

Meghatározza, hogy a megadott `value` objektumokból álló `WeakSet`-e.

### Használati eset

Használd az `isWeakSet` függvényt, amikor típus nélküli bemenetet fogadsz (pl. külső API-kból, dinamikus konfigurációból
vagy `unknown` értékekből), és a `WeakSet`-specifikus műveletek használata előtt ellenőrizned kell, hogy valóban
`WeakSet`-ről van-e szó.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isWeakSet` használatával futásidőben leszűkíthetsz egy `unknown` értéket `WeakSet<object>` típusra; vedd
> figyelembe, hogy a `WeakSet` csak objektumhivatkozásokat tartalmazhat.

### Előnyök

- Egyszerű futásidejű ellenőrzést biztosít annak megállapítására, hogy egy érték `WeakSet`-e.
- Segít megelőzni a típushibákat azzal, hogy csak a `WeakSet` példányokat kezeli annak.
- Bármilyen `unknown` bemenettel működik, és egyértelmű logikai eredményt ad vissza (`true`/`false`).

## Használat

### Szintaxis

Függvény:

- `isWeakSet(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // igaz
console.log(isWeakSet(b)); // hamis

if (isWeakSet(a)) {
  // a futásidőben WeakSet
}
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isWeakSet(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>A fájl 30 January 2026 at 14:15:07 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>