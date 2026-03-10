# areMaps

## Leírás

Az `areMaps` meghatározza, hogy egy adott tömb nem üres-e, és minden eleme `Map` példány-e.

### Használati eset

Ismeretlen bemenet (pl. JSON-parszolásból, külső API-kból vagy dinamikus forrásokból) validálása, mielőtt nem üres `Map`
objektumok listájaként kezelnéd.

> **Megjegyzés TypeScript felhasználóknak:**
>
> `false` értéket ad vissza üres tömb esetén; csak akkor ad vissza `true` értéket, ha a tömb nem üres, és minden elem
`Map`.

### Előnyök

- Biztosítja, hogy minden elem `Map` példány legyen, és csak akkor ad vissza `true` értéket, ha a teljes tömb átmegy az
  ellenőrzésen.
- Tervezésből adódóan elutasítja az üres tömböket, megelőzve, hogy a „nincs adat” véletlenül érvényes bemenetként legyen
  elfogadva.
- Hasznos őrfeltételként, mielőtt `Map`-specifikus műveleteket (pl. `.get()`, `.set()`, iterálás) végeznél egy
  gyűjteményen.

## Használat

### Szintaxis

Függvény:

- `areMaps(array)`

Paraméterek:

- `array`: Az ellenőrizendő tömb.

### Függvény helyi importálása

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // az items futásidőben garantáltan a Map példányok nem üres tömbje
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // hamis: üres tömbök esetén, vagy olyan tömbök esetén, amelyek bármilyen nem-Map értéket tartalmaznak
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areMaps(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>A fájl 31 January 2026 at 16:12:56 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>