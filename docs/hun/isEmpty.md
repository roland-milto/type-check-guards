# isEmpty

## Leírás

Meghatározza, hogy egy adott érték üres-e: `true`-t ad vissza `null`, `undefined`, üres/csak whitespace stringek, üres
tömbök, üres `Map`/`Set`, illetve saját enumerálható tulajdonságok nélküli objektumok esetén.

### Használati eset

Használd az `isEmpty`-t bemenetek validálására és hiányzó/üres értékek felismerésére több adattípuson át (pl.
űrlapmezők, API payloadok, konfigurációs objektumok), ahol a `null`, `undefined`, whitespace stringek, üres kollekciók
és tulajdonság nélküli objektumok üresnek számítanak.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isEmpty` egy boolean visszatérési értékű segédfüggvény (nem TypeScript típuspredikátum), ezért önmagában nem
> szűkíti a típusokat; validáláshoz/ágaztatáshoz használd, ne fordításkori típus-szűkítéshez.

### Előnyök

- Az ürességellenőrzésnél a `null` és az `undefined` értékeket `true`-nak tekinti.
- A csak szóközöket tartalmazó stringeket üresnek tekinti azzal, hogy ellenőrzés előtt trimeli őket, majd a hosszt
  vizsgálja.
- Támogatja a gyakori konténertípusokat (tömbök, `Map`, `Set`) és azokat a sima objektumokat, amelyeknek nincs saját,
  enumerálható tulajdonságuk.
- Elkerüli az örökölt tulajdonságok beszámítását `hasOwnProperty` ellenőrzések használatával.
- Egyszerű boolean eredményt (`true`/`false`) ad vissza, ami alkalmas guardokhoz és validáláshoz.

## Használat

### Szintaxis

Függvény:

- `isEmpty(value)`

Paraméterek:

- `value`: Az üresség szempontjából ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isEmpty(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>A fájl 6 February 2026 at 16:18:53 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>