# arePlainObjects

## Leírás

Ellenőrzi, hogy egy tömb minden eleme egyszerű objektum-e, és csak akkor ad vissza `true` értéket, ha minden elem
megfelel.

### Használati eset

Külső vagy típus nélküli adatok (pl. feldolgozott JSON, API payloadok, űrlapbeküldések) validálása annak biztosítására,
hogy egy nem üres tömböt kaptál, amelyben minden bejegyzés egyszerű objektum, mielőtt végigiterálnál rajta és
tulajdonságokat olvasnál.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `arePlainObjects` függvényt ismeretlen bemenet validálására, mielőtt TypeScriptben
`Record<string, unknown>[]`-ként (vagy egy szigorúbb objektumformaként) kezelnéd.

### Előnyök

- Biztosítja, hogy a bemeneti tömb minden eleme egyszerű objektum legyen, és csak akkor ad vissza `true` értéket, ha
  minden elem megfelel.
- Korán elutasítja az érvénytelen bemeneteket (nem tömbök vagy üres tömbök) azzal, hogy `false` értéket ad vissza.
- Az objektumliterálokból létrehozott objektumokat és az `Object.create(null)`-lal létrehozott objektumokat is érvényes
  egyszerű objektumként kezeli.

## Használat

### Szintaxis

Függvény:

- `arePlainObjects(array)`

Paraméterek:

- `array`: Az a tömb, amelyet egyszerű objektum elemek szempontjából ellenőriz.

### Függvény helyi importálása

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // igaz
const b = arePlainObjects([{}, Object.create(null)]); // igaz
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // hamis
const d = arePlainObjects([] as unknown[]); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.arePlainObjects(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>A fájl 30 January 2026 at 16:25:33 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>