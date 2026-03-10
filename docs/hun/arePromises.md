# arePromises

## Leírás

Az `arePromises` meghatározza, hogy egy tömb minden eleme `Promise` példány-e.

### Használati eset

Ellenőrizd, hogy egy dinamikusan felépített vagy külsőleg biztosított lista kizárólag promise-okat tartalmaz-e, mielőtt
összesítenéd őket (pl. `Promise.all` használatával).

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `arePromises` használatával érvényesítheted az `unknown[]` tömböt a `Promise.all` vagy más, csak promise-okra
> vonatkozó műveletek meghívása előtt; üres tömbök esetén `false` értéket ad vissza.

### Előnyök

- Biztosítja, hogy minden elem `Promise` legyen, mielőtt promise-specifikus logikával folytatnád.
- `false` értéket ad vissza nem kitöltött tömbök esetén, megelőzve a kétértelmű eredményeket üres bemenetnél.
- Hasznos futásidejű őrként, amikor külső forrásból származó `unknown[]` tömbökkel dolgozol.

## Használat

### Szintaxis

Függvény:

- `arePromises(array)`

Paraméterek:

- `array`: Az a tömb, amelyet `Promise` példányok szempontjából ellenőrizni kell.

### Függvény helyi importálása

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // a values futásidőben Promise példányok tömbje
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.arePromises(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>A fájl 30 January 2026 at 23:48:35 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>