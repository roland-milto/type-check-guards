# areNumerics

## Leírás

Az `areNumerics` ellenőrzi, hogy egy érték nem üres tömb-e, amelyben minden elem numerikus.

### Használati eset

Használd az `areNumerics` függvényt külső vagy típus nélküli adatok (pl. JSON payloadok, lekérdezési paraméterek,
űrlapbemenet) validálására összegek, átlagok vagy más numerikus műveletek számítása előtt, biztosítva, hogy a bemenet
egy nem üres numerikus tömb legyen, ellenkező esetben pedig `false`-t adjon vissza.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areNumerics` függvényt `unknown` bemenet őrzésére, mielőtt numerikus tömbként kezelnéd; nem tömbök és
> üres tömbök esetén `false`-t ad vissza.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha a bemenet egy nem üres tömb, és minden eleme numerikus.
- Gyorsan megbukik: amint nem numerikus elemet talál, leáll az ellenőrzéssel, és `false`-t ad vissza.
- Segít biztonságosan validálni az ismeretlen bemenetet numerikus műveletek végrehajtása előtt.

## Használat

### Szintaxis

Függvény:

- `areNumerics(array)`

Paraméterek:

- `array`: A tömb, amelyet numerikus elemek szempontjából ellenőriz.

### Függvény helyi importálása

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // igaz
console.log(areNumerics(b)); // igaz
console.log(areNumerics(c)); // hamis
console.log(areNumerics(d)); // hamis
console.log(areNumerics(e)); // hamis

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areNumerics(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>A fájl 6 February 2026 at 16:05:34 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>