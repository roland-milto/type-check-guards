# areOctals

## Leírás

Az `areOctals` meghatározza, hogy a megadott érték érvényes oktális karakterláncok nem üres tömbje-e.

### Használati eset

Használja az `areOctals` függvényt felhasználói bemenet, konfigurációs értékek vagy API payloadok ellenőrzésekor,
amelyeknek oktális literálokat kell tartalmazniuk (pl. fájl jogosultsági módok, mint a `0o755`), és szeretné elutasítani
az üres tömböket vagy bármely érvénytelen bejegyzést `false` visszaadásával.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használja az `areOctals` függvényt annak biztosítására, hogy egy nem üres `unknown[]` álljon rendelkezésre, ahol
> minden bejegyzés érvényes oktális karakterlánc, mielőtt konvertálná (pl. `Number(...)` segítségével vagy egyéni
> feldolgozással).

### Előnyök

- Ellenőrzi, hogy egy érték nem üres tömb-e, amelyben minden elem oktális karakterlánc, és csak akkor ad vissza `true`
  értéket, ha minden elem megfelel.
- Gyorsan meghiúsul: `false` értékkel tér vissza, amint nem oktális elemet talál.
- Hasznos őrként az oktális karakterláncok feldolgozása vagy konvertálása előtt, hogy elkerülje a futásidejű hibákat és
  a következetlen bemenetkezelést.

## Használat

### Szintaxis

Függvény:

- `areOctals(array)`

Paraméterek:

- `array`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value egy nem üres oktális karakterláncokból álló tömb
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areOctals(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>A fájl 30 January 2026 at 14:56:45 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>