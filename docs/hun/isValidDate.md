# isValidDate

## Leírás

Az `isValidDate` ellenőrzi, hogy egy adott érték érvényes `Date` objektum-e, és csak valódi, nem érvénytelen dátumok
esetén ad vissza `true` értéket.

### Használati eset

Felhasználói bemenet vagy API-adatok validálása, amelyek tartalmazhatnak dátumokat; biztosítja, hogy az érték valódi
`Date` példány legyen, és ne érvénytelen dátum, mielőtt dátumszámításokat, formázást vagy összehasonlításokat végeznél.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isValidDate` függvényt, mielőtt `Date` metódusokat (pl. `toISOString`, `getTime`) hívnál `unknown` típusú
> értékeken, hogy biztosan érvényes `Date` objektumok legyenek.

### Előnyök

- Biztosítja, hogy az érték egy `Date` példány, és nem csupán egy dátumszerű karakterlánc vagy szám.
- Elutasítja az érvénytelen dátumokat (pl. `new Date("invalid")`) a `NaN` időértékek ellenőrzésével.
- Egyszerű logikai őr (boolean guard), amely könnyen használható feltételekben és validációs folyamatokban.
- Segít megelőzni a futásidejű hibákat a dátum metódusok hívásakor azáltal, hogy előbb ellenőrzi a bemenetet.

## Használat

### Szintaxis

Függvény:

- `isValidDate(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input egy érvényes Date példány
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // hamis
console.log(isValidDate("2025-12-22")); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isValidDate(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>A fájl 30 January 2026 at 16:40:27 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>