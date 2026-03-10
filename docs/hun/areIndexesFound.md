# areIndexesFound

## Leírás

Az `areIndexesFound` ellenőrzi, hogy egy érték nem üres tömb-e, amelynek elemei mind érvényes indexek; `true` értéket ad
vissza, ha igen, különben `false`-t.

### Használati eset

Felhasználó által megadott vagy külső adatok (pl. feldolgozott JSON) validálása, amelyekről elvárt, hogy indexek listája
legyenek, mielőtt tömbök elérésére vagy szeletelésére használnád őket.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areIndexesFound` függvényt ismeretlen bemenet validálására, mielőtt az elemeit tömbindexként kezelnéd;
> üres tömbök esetén és nem index értékeket tartalmazó tömböknél `false`-t ad vissza.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha a bemenet egy nem üres tömb, és minden eleme érvényes index.
- Gyorsan leáll: `false` értéket ad vissza, amint nem index típusú elemet talál.
- Hasznos őrfeltételként, mielőtt az értékeket tömbpozícióként vagy eltolásként használnád.

## Használat

### Szintaxis

Függvény:

- `areIndexesFound(array)`

Paraméterek:

- `array`: Az a tömb, amelyet indexmegfelelőség szempontjából ellenőrizni kell.

### Függvény helyi importálása

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // igaz
console.log(areIndexesFound(b)); // hamis
console.log(areIndexesFound(c)); // hamis

if (areIndexesFound(a)) {
  // Itt az `a` megerősítetten egy indexekkel feltöltött tömb.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areIndexesFound(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>A fájl 31 January 2026 at 00:42:09 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>