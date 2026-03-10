# areFilledArrays

## Leírás

Az `areFilledArrays` ellenőrzi, hogy egy kétdimenziós tömb nem üres-e, és hogy minden altömbje nem üres-e.

### Használati eset

Használd az `areFilledArrays` függvényt táblázatos vagy mátrix jellegű bemenet (pl. CSV-sorok, rácsadatok,
csoportosított eredmények) validálására, hogy biztonsággal feltételezhesd: van legalább egy altömb, és egyik altömb sem
üres.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areFilledArrays` függvényt, amikor biztosítani kell, hogy egy 2D tömbnek legalább egy sora legyen, és
> minden sorban legyen legalább egy elem, mielőtt bejárnád vagy indexelnéd.

### Előnyök

- Ellenőrzi, hogy a külső tömb nem üres, és hogy minden belső tömb is nem üres, és csak akkor ad vissza `true` értéket,
  ha mindkét feltétel teljesül.
- Bármilyen elemtípussal működik az altömbökben (pl. számok, sztringek, objektumok, beágyazott tömbök), mert csak a
  tömbök „kitöltött” állapotát ellenőrzi, nem az elemek tartalmát.
- Egyszerű logikai eredményt (`true`/`false`) ad, ami alkalmas őrfeltételnek kétdimenziós adatok feldolgozása előtt.

## Használat

### Szintaxis

Függvény:

- `areFilledArrays(array)`

Paraméterek:

- `array`: Az ellenőrizendő kétdimenziós tömb.

### Függvény helyi importálása

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // igaz
console.log(areFilledArrays(b)); // igaz
console.log(areFilledArrays(c)); // igaz
console.log(areFilledArrays(d)); // hamis
console.log(areFilledArrays(e)); // hamis
console.log(areFilledArrays(f)); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areFilledArrays(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>A fájl 6 February 2026 at 11:57:05 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>