# isString

## Leírás

Az `isString` meghatározza, hogy egy adott érték karakterlánc-e.

### Használati eset

Felhasználói bemenet, API payload mezők vagy konfigurációs értékek futásidejű validálása annak biztosítására, hogy az
érték karakterlánc legyen, mielőtt karakterlánc-műveleteket alkalmaznál (pl. trimelés, darabolás, kis- és nagybetűs
átalakítás).

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isString` függvényt `unknown` vagy lazán tipizált értékek ellenőrzésére, mielőtt karakterlánc-metódusokat
> hívnál; csak akkor ad vissza `true` értéket, ha `typeof value === "string"`.

### Előnyök

- Egyszerű és gyors ellenőrzés a `typeof` használatával.
- Kiszámítható logikai eredményt ad vissza: `true` karakterláncok esetén, egyébként `false`.
- Üres és nem üres karakterláncok esetén is működik.
- Hasznos könnyűsúlyú futásidejű őrként, mielőtt karakterlánc-specifikus műveleteket végeznénk.

## Használat

### Szintaxis

Függvény:

- `isString(value)`

Paraméterek:

- `value`: A vizsgálandó érték, hogy karakterlánc típusú-e.

### Függvény helyi importálása

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // itt az input egy karakterlánc
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isString(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isString](../_analysis/isString.md)

<br>

---

<small>A fájl 30 January 2026 at 13:14:17 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>