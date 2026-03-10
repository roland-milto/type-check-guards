# isMap

## Leírás

Ellenőrzi, hogy a megadott `value` egy `Map`-e; `true`-t ad vissza, ha igen, különben `false`-t.

### Használati eset

Használd az `isMap`-et, amikor egy `unknown` értéket kapsz (pl. JSON feldolgozásból, külső API-kból vagy felhasználói
bemenetből), és biztosítani szeretnéd, hogy `Map` legyen, mielőtt `Map` műveleteket végzel.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isMap` egy futásidejű őr (guard), amely `true`-t ad vissza, ha az érték `Map`, és `false`-t egyébként; használd az
`unknown` szűkítésére, mielőtt `Map` API-kat hívsz.

### Előnyök

- Gyors futásidejű ellenőrzést biztosít arra, hogy egy érték `Map`-e.
- Segít megelőzni a típushibákat azáltal, hogy védi azokat a kódágakat, amelyek `Map` metódusokat igényelnek, mint a
  `get`, `set` és `has`.
- Jól működik könnyűsúlyú validációs lépésként `unknown` bemenetek kezelésekor.

## Használat

### Szintaxis

Függvény:

- `isMap(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isMap(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isMap](../_analysis/isMap.md)

<br>

---

<small>A fájl 31 January 2026 at 16:04:51 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>