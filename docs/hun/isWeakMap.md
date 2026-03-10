# isWeakMap

## Leírás

Meghatározza, hogy egy adott `value` `WeakMap` példány-e.

### Használati eset

Használd az `isWeakMap`-et, amikor egy `unknown` értéket fogadsz (pl. egy publikus API-ból, pluginrendszerből vagy
dinamikus konfigurációból), és ellenőrizned kell, hogy `WeakMap`-e, mielőtt `WeakMap`-specifikus viselkedést használnál.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isWeakMap` egy `instanceof WeakMap` ellenőrzést végez; ez egy futásidejű guard, amely csak valódi `WeakMap`
> példányok esetén ad vissza `true` értéket.

### Előnyök

- Egyszerű futásidejű ellenőrzés arra, hogy egy érték `WeakMap`-e.
- Segít megelőzni a `WeakMap`-et igénylő API-k helytelen használatát azzal, hogy kivételdobás helyett `true`/`false`
  értéket ad vissza.
- Működik `unknown` bemenetekkel, így kényelmes modulhatároknál (pl. parszolás, külső adatok vagy típus nélküli kód
  esetén).

## Használat

### Szintaxis

Függvény:

- `isWeakMap(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a futásidőben WeakMap
}

console.log(isWeakMap(a)); // igaz
console.log(isWeakMap(b)); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isWeakMap(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>A fájl 30 January 2026 at 13:25:20 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>