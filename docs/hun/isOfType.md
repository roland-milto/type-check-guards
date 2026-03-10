# isOfType

## Leírás

Meghatározza, hogy egy adott `value` megfelel-e egy megadott típuskarakterláncnak: primitíveknél `typeof`-ot használ,
összetett típusoknál pedig tartalék megoldást.

### Használati eset

`unknown` bemenetek (pl. API-válaszok, felhasználói input, feldolgozott JSON) validálása és szűkítése annak
ellenőrzésével, hogy egy érték megfelel-e a várt típuskarakterláncnak, mielőtt típusspecifikus műveleteket végeznél.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isOfType` használatával futásidőben elágaztathatsz típusok szerint `unknown` értékekkel dolgozva; `true`/`false`
> értéket ad vissza, és a `null` valamint az `undefined` esetét kifejezetten kezeli.

### Előnyök

- A primitív típusokat közvetlen `typeof` ellenőrzéssel vizsgálja a gyorsaság és az egyértelműség érdekében.
- Helyesen kezeli a `null` és `undefined` értékeket, amelyeket a puszta `typeof` önmagában nem tud a kívánt módon
  megkülönböztetni.
- Összetett vagy egyéni típuskarakterláncokat is támogat egy tartalék összehasonlítással a `getTypeOf` használatával.
- Egyszerű logikai eredményt (`true`/`false`) ad vissza, ami alkalmas őrfeltételekhez és elágazásokhoz.

## Használat

### Szintaxis

Függvény:

- `isOfType(value, type)`

Paraméterek:

- `value`: A `type` ellenőrzéséhez vizsgálandó érték.
- `type`: Az ellenőrizendő típus karakterláncos reprezentációja.

### Függvény helyi importálása

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // az input itt egy szám
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // az input itt egy karakterlánc
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isOfType(value, type)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>A fájl 30 January 2026 at 17:00:10 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>