# areBinaries

## Leírás

Ellenőrzi, hogy a megadott érték nem üres, érvényes bináris karakterláncokból álló tömb-e, és csak akkor ad vissza
`true` értéket, ha minden elem átmegy az ellenőrzésen.

### Használati eset

Használd az `areBinaries` függvényt, amikor ismeretlen listát kapsz (pl. JSON-ból, űrlapokból vagy API-kból), és a
feldolgozás vagy értelmezés előtt biztosítani szeretnéd, hogy az nem üres, bináris karakterláncokból álló tömb.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areBinaries` függvényt ismeretlen bemenet ellenőrzésére, mielőtt a bináris karakterláncokat
> számokká/BigInt-ekké alakítanád; biztosítja, hogy a tömb nem üres, és minden elem érvényes bináris karakterlánc.

### Előnyök

- Ellenőrzi, hogy egy érték nem üres tömb-e, amelyben minden elem érvényes bináris karakterlánc.
- Egyszerű logikai eredményt (`true`/`false`) ad vissza, amely alkalmas őrfeltételekhez, korai visszatéréshez és
  bemenetellenőrzéshez.
- Megelőzi a későbbi feldolgozási hibákat azzal, hogy elutasítja azokat a tömböket, amelyek bármilyen nem bináris
  bejegyzést tartalmaznak.

## Használat

### Szintaxis

Függvény:

- `areBinaries(array)`

Paraméterek:

- `array`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // igaz
console.log(areBinaries(b)); // hamis
console.log(areBinaries([])); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areBinaries(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>A fájl 31 January 2026 at 23:14:49 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>