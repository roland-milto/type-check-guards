# isSet

## Leírás

Meghatározza, hogy egy adott érték `Set`-e.

### Használati eset

Külső forrásokból származó bemenetek (pl. JSON feldolgozás, felhasználói bevitel vagy harmadik féltől származó API-k)
validálása annak biztosítására, hogy egy érték `Set` legyen, mielőtt `Set` műveleteket végeznél.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isSet` függvényt az `unknown` értékek szűkítésére, mielőtt `Set`-specifikus API-kat hívnál, mint például
> a `.add`, `.has` vagy `.size`.

### Előnyök

- Egyszerű futásidejű ellenőrzést biztosít annak megerősítésére, hogy egy érték `Set`-e.
- Segít megelőzni a típushibákat azáltal, hogy korai elágazást tesz lehetővé, amikor egy érték nem `Set`.
- Bármilyen `Set`-tartalommal működik (üres vagy feltöltött), és következetesen `true`/`false` értéket ad vissza.

## Használat

### Szintaxis

Függvény:

- `isSet(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a futásidőben egy Set
  console.log(a.size);
}

console.log(isSet(b)); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isSet(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isSet](../_analysis/isSet.md)

<br>

---

<small>A fájl 30 January 2026 at 23:09:56 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>