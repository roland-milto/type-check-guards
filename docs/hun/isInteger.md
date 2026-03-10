# isInteger

## Leírás

Meghatározza, hogy egy adott `value` biztonságos egész szám-e.

### Használati eset

Nem megbízható bemenet (pl. lekérdezési paraméterek, JSON payloadok, környezeti változók) validálása, mielőtt egész
számként használnád tömbindexekhez, lapozáshoz, számlálókhoz vagy adatbázis-azonosítókhoz.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isInteger` használatával érvényesítheted az ismeretlen bemenetet, mielőtt numerikus egész számként kezelnéd; csak
> azoknál az értékeknél ad vissza `true`-t, ahol `typeof value === "number"` és `Number.isSafeInteger(value)`.

### Előnyök

- Ellenőrzi a típust és a numerikus biztonságot is: csak akkor ad vissza `true` értéket, ha a bemenet szám és
  biztonságos egész szám.
- Megelőzi a numerikus kényszerítés gyakori buktatóit: az olyan stringek, mint az "5", helyesen `false` értéket adnak.
- Elutasítja a nem egész számokat és a nem biztonságos egész számokat, így alkalmas azonosítókhoz, számlálókhoz és
  tömbindexeléshez.

## Használat

### Szintaxis

Függvény:

- `isInteger(value)`

Paraméterek:

- `value`: Az érték, amelynek egész szám státuszát ellenőrizni kell.

### Függvény helyi importálása

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // igaz
const b = isInteger(-100);   // igaz
const c = isInteger("5");    // hamis
const d = isInteger(5.5);    // hamis
const e = isInteger(null);   // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isInteger(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>A fájl 31 January 2026 at 00:50:08 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>