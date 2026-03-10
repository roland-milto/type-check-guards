# areNull

## Leírás

Ellenőrzi, hogy a megadott `array` minden eleme `null`-e.

### Használati eset

Ellenőrizd, hogy egy adathalmaz oszlopa, egy API mezőlistája vagy egy helyőrző tömb kizárólag `null` értékeket
tartalmaz-e, mielőtt olyan logikát alkalmaznál, amely feltételezi, hogy minden bejegyzés szándékosan üres.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areNull` függvényt, amikor szigorúan ellenőrizned kell, hogy a bemenet egy nem üres tömb, és minden eleme
> pontosan `null` (nem `undefined`, és nem hamis értékek).

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem `null`, így szigorú „mind egyezik” őrfeltétel.
- `false` értékkel elutasítja a nem tömböket és az üres tömböket, megelőzve a véletlenül igaznak értékelődő eredményeket
  érvénytelen bemenet esetén.
- Jól használható előfeltétel-ellenőrzésként olyan adatok feldolgozása előtt, amelyeknek teljes egészében `null`-nak
  kell lenniük.

## Használat

### Szintaxis

Függvény:

- `areNull(array)`

Paraméterek:

- `array`: A bemeneti tömb, amelyben `null` elemeket ellenőrzünk.

### Függvény helyi importálása

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // igaz
const allNullB = areNull(b); // hamis

const notAnArray = areNull(123 as unknown as unknown[]); // hamis
const empty = areNull([]); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areNull(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areNull](../_analysis/areNull.md)

<br>

---

<small>A fájl 31 January 2026 at 15:43:36 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>