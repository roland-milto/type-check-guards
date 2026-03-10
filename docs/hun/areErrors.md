# areErrors

## Leírás

Ellenőrzi, hogy egy tömb nem üres-e, és csak `Error` objektumokat tartalmaz-e, és `true` vagy `false` értékkel tér
vissza.

### Használati eset

Ellenőrizd, hogy egy futásidőben kapott `unknown[]` (pl. összesített hibák, validációs eredmények vagy deszerializált
adatok) nem üres `Error` objektumlistát alkot-e, mielőtt bejárnád, naplóznád vagy újradobnád.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `areErrors` csak akkor ad vissza `true` értéket, ha egy feltöltött tömbről van szó, ahol minden elem `Error`;
`false`-t ad vissza üres tömb esetén, vagy ha bármelyik elem nem `Error`.

### Előnyök

- Biztosítja, hogy minden elem egy `Error` példány legyen, így biztonságos hibakezelést és naplózást tesz lehetővé.
- Elutasítja az üres tömböket, megelőzve, hogy a véletlen „nincsenek hibák” állapotot érvényes hibalistaként kezeljék.
- Jól működik futásidejű őrként `unknown[]` bemenetek kezelésekor (pl. API-kból vagy `catch` blokkokból).

## Használat

### Szintaxis

Függvény:

- `areErrors(array)`

Paraméterek:

- `array`: Az ellenőrizendő tömb `Error` objektumok szempontjából.

### Függvény helyi importálása

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value egy nem üres Error objektumokból álló tömb
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areErrors(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>A fájl 6 February 2026 at 12:33:58 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>