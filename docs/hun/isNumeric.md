# isNumeric

## Leírás

Az `isNumeric` azt határozza meg, hogy egy adott `value` numerikusnak minősül-e, úgy, hogy a feloldott típusát a
`NUMERIC_TYPES` értékeivel veti össze.

### Használati eset

Használd az `isNumeric` függvényt bemenetek (pl. API payloadok, űrlapértékek, konfiguráció) validálására numerikus
műveletek végrehajtása előtt, valamint arra, hogy a `NUMERIC_TYPES` szerint következetesen elfogadd a numerikus jellegű
típusokat (például a `BigInt`-et).

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isNumeric` egy logikai értéket visszaadó predikátum; kezeld futásidejű ellenőrzésként arra, hogy egy érték a
> könyvtár által definiált numerikus típuskészletbe tartozik-e.

### Előnyök

- A `getTypeOf` és a `NUMERIC_TYPES` használatával központosítja a numerikus felismerési logikát, és egységessé teszi az
  ellenőrzéseket a kódbázisban.
- Egy egyszerű logikai értéket (`true`/`false`) ad vissza a könnyű elágaztatáshoz és őr (guard) jellegű használathoz.
- Több numerikus reprezentációt támogat (pl. `number`, `BigInt`) a `NUMERIC_TYPES` által meghatározottak szerint.

## Használat

### Szintaxis

Függvény:

- `isNumeric(value)`

Paraméterek:

- `value`: Az érték, amelynél ellenőrizni kell, hogy numerikus típusú-e.

### Függvény helyi importálása

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // A könyvtár típusszabályai szerint a v numerikusnak minősül
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isNumeric(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>A fájl 6 February 2026 at 15:52:55 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>