# areSets

## Leírás

Ellenőrzi, hogy egy adott nem üres tömb kizárólag `Set` példányokat tartalmaz-e; ha igen, `true`-t ad vissza, különben
`false`-t.

### Használati eset

Ellenőrizd, hogy egy érték (pl. felhasználói bemenetből, JSON-parszolásból vagy külső API-kból) egy nem üres, `Set`
objektumokból álló tömb-e, mielőtt minden halmazt feldolgoznál.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areSets` függvényt ismeretlen bemenet ellenőrzésére, mielőtt végigiterálnál rajta, és minden elemen `Set`
> API-kat (pl. `.size`, `.has`, `.add`) hívnál.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha a bemenet egy nem üres tömb, és minden elem egy `Set` példány.
- Megakadályozza a hamis pozitív találatokat üres tömbök esetén azzal, hogy `false` értéket ad vissza, amikor a tömbnek
  nincsenek elemei.
- Hasznos futásidejű őrként, mielőtt minden elemen `Set`-specifikus műveleteket végeznénk.

## Használat

### Szintaxis

Függvény:

- `areSets(array)`

Paraméterek:

- `array`: Az a tömb, amelyet `Set` példányok szempontjából ellenőrizni kell.

### Függvény helyi importálása

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a futásidőben Set példányokból álló tömb
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // hamis
console.log(areSets(c)); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areSets(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areSets](../_analysis/areSets.md)

<br>

---

<small>A fájl 30 January 2026 at 23:13:47 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>