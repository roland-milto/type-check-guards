# isUndefined

## Leírás

Ellenőrzi, hogy egy adott érték `undefined`-e.

### Használati eset

Használd az `isUndefined` függvényt opcionális bemenetek őrzésére, hiányzó tulajdonságok észlelésére, vagy annak
megkülönböztetésére, hogy valami „nincs megadva” (`undefined`) vagy „kifejezetten üres” (`null`).

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isUndefined` függvényt, amikor kifejezetten az `undefined` értéket kell felismerned (nem a `null`-t).
> Biztonságos, mert a `typeof value === "undefined"` ellenőrzésre támaszkodik.

### Előnyök

- Egyértelmű, explicit ellenőrzést biztosít az `undefined` értékre a `typeof` használatával, elkerülve a nem deklarált
  változókkal kapcsolatos szélső eseteket.
- Egyszerű logikai eredményt (`true`/`false`) ad vissza, amely alkalmas őrfeltételekhez, elágazásokhoz és validációs
  logikához.
- Segít megkülönböztetni az `undefined` értéket más „üres” értékektől, mint például a `null`, `0`, `""` vagy a `NaN`.

## Használat

### Szintaxis

Függvény:

- `isUndefined(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x itt undefined
} else {
  // x itt nem undefined
}

const a = isUndefined(undefined); // igaz
const b = isUndefined(null);      // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isUndefined(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>A fájl 30 January 2026 at 14:03:03 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>