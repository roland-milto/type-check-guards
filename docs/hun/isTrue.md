# isTrue

## Leírás

Az `isTrue` meghatározza, hogy egy adott érték szigorúan egyenlő-e a `true` értékkel.

### Használati eset

Használd az `isTrue` függvényt flagek, funkciókapcsolók vagy konfigurációs értékek validálására, ahol kizárólag a `true`
literált szabad elfogadni, és minden mást `false`-ként kell kezelni.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isTrue` függvényt, amikor csak a `true` logikai literált szeretnéd elfogadni, és nem csupán truthy
> értékeket.

### Előnyök

- Szigorú ellenőrzést biztosít a `true` logikai literálra (nincs típuskonverzió).
- Segít megkülönböztetni a `true` értéket az olyan truthy értékektől, mint az `1`, a `"true"` vagy a `{}`.
- Egyszerű, kiszámítható viselkedés, amely alkalmas őrfeltételekhez és validációs folyamatokhoz.

## Használat

### Szintaxis

Függvény:

- `isTrue(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // igaz
const b = isTrue(1);         // hamis
const c = isTrue("true");   // hamis

if (isTrue(a)) {
  // a itt igaz
}
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isTrue(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>A fájl 30 January 2026 at 13:42:38 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>