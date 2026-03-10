# areFinite

## Leírás

Az `areFinite` ellenőrzi, hogy egy érték nem üres tömb-e, amelynek elemei mind véges számok; ha igen, `true`-t ad
vissza, különben `false`-t.

### Használati eset

Numerikus bemeneti tömbök (pl. diagram adatsorok, koordinátalisták, mérési minták) validálása számítások előtt,
biztosítva, hogy az eredmény csak akkor legyen `true`, ha minden érték véges szám.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areFinite` függvényt, amikor biztosítani kell, hogy egy tömb nem üres, és csak véges számokat tartalmaz;
> üres tömbök esetén, illetve `NaN`-t vagy végteleneket tartalmazó tömböknél `false`-t ad vissza.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha a bemenet nem üres tömb, és minden eleme véges szám.
- Elutasítja az `Infinity`, `-Infinity` és `NaN` értékeket azáltal, hogy minden elemre `isFinite` ellenőrzést végez.
- Egyszerű logikai eredményt (`true`/`false`) ad, amely alkalmas őrfeltételekhez és validálási folyamatokhoz.

## Használat

### Szintaxis

Függvény:

- `areFinite(array)`

Paraméterek:

- `array`: Az a tömb, amelynél ellenőrizni kell, hogy minden eleme véges-e.

### Függvény helyi importálása

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // igaz
console.log(areFinite(b)); // hamis
console.log(areFinite(c)); // hamis

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areFinite(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>A fájl 30 January 2026 at 16:35:04 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>