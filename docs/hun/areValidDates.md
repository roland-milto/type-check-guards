# areValidDates

## Leírás

Meghatározza, hogy egy tömb nem üres-e, és kizárólag érvényes `Date` objektumokból áll-e.

### Használati eset

Használd az `areValidDates` függvényt felhasználó által megadott vagy API által szolgáltatott tömbök validálására
dátumalapú műveletek (rendezés, tartományellenőrzés, formázás) előtt, biztosítva, hogy minden bejegyzés valódi, érvényes
`Date` objektum, és hogy a lista nem üres.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `areValidDates` üres tömb esetén `false` értéket ad vissza; mielőtt validációs lépésként támaszkodnál rá, győződj
> meg róla, hogy a tömbnek szándékosan nem üresnek kell lennie.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem érvényes `Date` példány (nincsenek érvénytelen dátumok, mint
  például `new Date('invalid')`).
- Az üres bemenetet `false` visszaadásával elutasítja, így biztosítva, hogy csak értelmes, nem üres dátumlistákat fogadj
  el.
- Egyszerű, logikai (boolean) őrfeltétel jellegű ellenőrzést ad, amely könnyen kombinálható más validációkkal.

## Használat

### Szintaxis

Függvény:

- `areValidDates(array)`

Paraméterek:

- `array`: Az ellenőrizendő tömb, amely potenciálisan `Date` objektumokat tartalmaz.

### Függvény helyi importálása

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // igaz
console.log(areValidDates(b)); // hamis
console.log(areValidDates(c)); // hamis
console.log(areValidDates(d)); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areValidDates(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>A fájl 30 January 2026 at 14:32:10 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>