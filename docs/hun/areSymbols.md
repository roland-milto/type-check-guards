# areSymbols

## Leírás

Ellenőrzi, hogy a bemenet egy feltöltött tömb-e, amelynek elemei mind szimbólumok, és `true` vagy `false` értéket ad
vissza.

### Használati eset

Ellenőrizd, hogy egy konfigurációs mező (pl. szimbólumokkal reprezentált egyedi kulcsok listája) nem üres tömb-e, amely
csak szimbólumokat tartalmaz, mielőtt olyan API-kban használnád, amelyek `symbol[]`-t igényelnek.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areSymbols` függvényt ismeretlen bemenet ellenőrzésére, mielőtt `symbol[]`-ként kezelnéd; `false` értéket
> ad vissza nem tömbök és üres tömbök esetén.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha a bemenet egy nem üres tömb, és minden eleme szimbólum.
- Megakadályozza a téves pozitív találatokat azáltal, hogy a belső „feltöltött tömb” ellenőrzéssel elutasítja a nem
  tömböket és az üres tömböket.
- Hasznos futásidejű típusőrként a kizárólag szimbólumokat tartalmazó listák ellenőrzéséhez további feldolgozás előtt.

## Használat

### Szintaxis

Függvény:

- `areSymbols(array)`

Paraméterek:

- `array`: Az a tömb, amelyet szimbólum elemek szempontjából kell ellenőrizni.

### Függvény helyi importálása

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a futásidőben csak szimbólumokat tartalmazó tömb
  const first = a[0];
  console.log(typeof first); // "szimbólum"
}

console.log(areSymbols(b)); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areSymbols(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>A fájl 30 January 2026 at 14:22:05 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>