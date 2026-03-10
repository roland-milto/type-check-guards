# areDates

## Leírás

Az `areDates` meghatározza, hogy egy adott tömb fel van-e töltve, és kizárólag `Date` objektumokat tartalmaz-e; csak
akkor ad vissza `true`-t, ha minden elem érvényes dátum.

### Használati eset

Használja az `areDates` függvényt ismeretlen bemenet (pl. feldolgozott JSON, űrlapadatok, API payloadok) ellenőrzésére,
mielőtt dátumspecifikus logikát futtatna, például idő szerinti rendezést, formázást vagy tartományok számítását.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Csak nem üres tömbök esetén ad vissza `true`-t, ahol minden elem `Date`; az üres tömbök eredménye `false`.

### Előnyök

- Biztosítja, hogy a tömb nem üres, mielőtt a tartalmát ellenőrizné, így elkerülhető, hogy üres bemenetekre `true`
  legyen az eredmény.
- Ellenőrzi, hogy minden elem `Date` példány-e, és az első eltérésnél azonnal `false`-t ad vissza.
- Hasznos őrfeltétel jellegű ellenőrzésként, mielőtt dátumspecifikus műveleteket végezne a tömb elemein.

## Használat

### Szintaxis

Függvény:

- `areDates(array)`

Paraméterek:

- `array`: Az ellenőrizendő tömb `Date` objektumok szempontjából.

### Függvény helyi importálása

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // igaz
console.log(areDates(b)); // hamis
console.log(areDates(c)); // hamis

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areDates(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areDates](../_analysis/areDates.md)

<br>

---

<small>A fájl 31 January 2026 at 15:30:40 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>