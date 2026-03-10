# isRegEx

## Leírás

Meghatározza, hogy egy megadott érték `RegExp` példány-e.

### Használati eset

Felhasználó által megadott vagy dinamikus értékek (pl. konfiguráció, API payloadok, bővítménybemenetek) validálása,
mielőtt reguláris kifejezésként kezelnéd őket.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isRegEx` használatával szűkítheted az `unknown` (vagy unió) értékeket, mielőtt RegExp-specifikus tulajdonságokat
> vagy metódusokat használnál; csak akkor ad vissza `true`-t, ha az értékek a `RegExp` példányai.

### Előnyök

- Egyszerű futásidejű típusőrt biztosít annak ellenőrzésére, hogy egy érték `RegExp`-e.
- Segít megelőzni a hibákat, amikor a kód reguláris kifejezést vár (pl. a `test`, `exec` meghívása vagy a `source`
  kiolvasása előtt).
- Működik mind a regex literálokkal, mind a `new RegExp(...)`-pal létrehozott példányokkal.
- Egyértelmű logikai eredményt (`true`/`false`) ad vissza, és nem dob kivételt nem-regex bemeneteknél.

## Használat

### Szintaxis

Függvény:

- `isRegEx(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // az input itt egy RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isRegEx(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>A fájl 30 January 2026 at 23:29:38 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>