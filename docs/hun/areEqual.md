# areEqual

## Leírás

Az `areEqual` ellenőrzi, hogy egy tömb minden eleme megegyezik-e egy adott elvárt értékkel; csak nem üres tömbök esetén
ad vissza `true`-t, amikor minden elem egyezik.

### Használati eset

Annak validálása, hogy egy lista kizárólag egyetlen megengedett értéket tartalmaz (pl. minden státuszjelző `true`,
minden szerepkör `"admin"`, vagy minden numerikus bejegyzés egy kötelező konstanssal egyezik), miközben az üres
bemenetet érvénytelennek (`false`) tekinti.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areEqual` függvényt, amikor szigorú „minden elem” ellenőrzésre van szükséged; `false`-t ad vissza üres
> tömbökre, valamint bármilyen nem tömb vagy nem feltöltött bemenetre.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem megegyezik az elvárt értékkel; ellenkező esetben `false`-t ad
  vissza.
- Gyorsan megbukik: az ellenőrzést azonnal leállítja, amint nem egyező elemet talál.
- Védi a hibás bemenettől azzal, hogy `false`-t ad vissza, ha a bemenet nem egy feltöltött tömb.

## Használat

### Szintaxis

Függvény:

- `areEqual(value, expected)`

Paraméterek:

- `value`: Az ellenőrizendő tömb.
- `expected`: Az az elem, amelyhez minden tömbelemet hasonlít.

### Függvény helyi importálása

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areEqual(value, expected)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>A fájl 31 January 2026 at 23:50:48 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>