# isBoolean

## Leírás

Meghatározza, hogy egy adott érték `boolean`-e.

### Használati eset

Külső vagy nem tipizált adatok (pl. környezeti változók, JSON payloadok, lekérdezési paraméterek) validálása annak
biztosítására, hogy egy érték `boolean` legyen, mielőtt feltételes logikában használnád.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isBoolean` függvényt az `unknown` `boolean` típusra szűkítéséhez, mielőtt logikai műveleteket
> alkalmaznál.

### Előnyök

- Egyszerű és gyors futásidejű ellenőrzés a `typeof` használatával.
- Segít az ismeretlen bemenet validálásában a logikai (boolean) specifikus logika előtt.
- Kiszámítható `boolean` eredményt ad vissza (`true`/`false`).

## Használat

### Szintaxis

Függvény:

- `isBoolean(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // itt az input boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isBoolean(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>A fájl 30 January 2026 at 14:36:39 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>