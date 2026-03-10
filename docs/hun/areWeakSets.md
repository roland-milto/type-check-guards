# areWeakSets

## Leírás

Ellenőrzi, hogy a bemenet egy nem üres tömb-e, amelynek minden eleme `WeakSet`, és csak ebben az esetben ad vissza
`true` értéket.

### Használati eset

Futásidejű bemenet (pl. API-kból, konfigurációból vagy felhasználó által megadott adatokból) ellenőrzése annak
biztosítására, hogy a továbblépés előtt egy nem üres `WeakSet` példánylistával rendelkezz, mielőtt olyan logikát
futtatnál, amely a `WeakSet` viselkedésére támaszkodik.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `areWeakSets` használatával érvényesítheted az ismeretlen bemenetet, mielőtt `WeakSet[]`-ként kezelnéd. Üres tömbök
> és nem tömbök esetén `false` értéket ad vissza.

### Előnyök

- Biztosítja, hogy a bemeneti tömb minden eleme `WeakSet` legyen.
- `false` értéket ad vissza üres tömbök esetén, megelőzve a hiányzó adatok miatti véletlen „minden érvényes”
  eredményeket.
- Biztonságosan hibázik: `false` értékkel tér vissza, ha a bemenet nem egy feltöltött tömb (beleértve a `null` értéket
  is).
- Hasznos őrfeltételként olyan műveletek előtt, amelyek `WeakSet` példányokat igényelnek.

## Használat

### Szintaxis

Függvény:

- `areWeakSets(array)`

Paraméterek:

- `array`: Az a tömb, amelyet `WeakSet` objektumok szempontjából kell ellenőrizni.

### Függvény helyi importálása

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a egy nem üres tömb WeakSet példányokból
}

console.log(areWeakSets(a)); // igaz
console.log(areWeakSets(b)); // hamis
console.log(areWeakSets(c)); // hamis
console.log(areWeakSets(null as unknown)); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areWeakSets(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>A fájl 30 January 2026 at 14:09:02 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>