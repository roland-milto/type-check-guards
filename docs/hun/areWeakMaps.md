# areWeakMaps

## Leírás

Az `areWeakMaps` ellenőrzi, hogy egy érték nem üres tömb-e, amelyben minden elem `WeakMap`; csak ebben az esetben ad
vissza `true`-t, egyébként `false`-t.

### Használati eset

Futásidejű adatok (pl. feldolgozott JSON, bővítménybemenetek vagy lazán tipizált konfiguráció) validálása annak
biztosítására, hogy nem üres, `WeakMap` példányokból álló tömb legyen, mielőtt bejárnád és `WeakMap` metódusokat hívnál;
`false`-t ad vissza, ha bármely elem nem `WeakMap`, vagy ha a tömb üres.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areWeakMaps` függvényt ismeretlen bemenet ellenőrzésére, mielőtt nem üres `WeakMap[]`-ként kezelnéd; üres
> tömbök esetén `false`-t ad vissza.

### Előnyök

- Biztosítja, hogy a megadott tömb minden eleme `WeakMap` példány legyen.
- `false` értéket ad vissza üres tömbök esetén, megelőzve, hogy a „nincs adat” véletlenül érvényes bemenetként legyen
  elfogadva.
- Hasznos őrfeltételként, mielőtt `WeakMap`-specifikus műveleteket végeznél az összes elemen.

## Használat

### Szintaxis

Függvény:

- `areWeakMaps(array)`

Paraméterek:

- `array`: Az a tömb, amelyet `WeakMap` példányok szempontjából ellenőrizni kell.

### Függvény helyi importálása

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // a list a WeakMap-példányok nem üres tömbje
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nem nem üres WeakMap[]
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areWeakMaps(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>A fájl 30 January 2026 at 13:37:35 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>