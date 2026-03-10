# isNumber

## Leírás

Az `isNumber` ellenőrzi, hogy egy érték véges, nem `NaN` szám-e.

### Használati eset

Nem megbízható forrásból származó numerikus bemenet (űrlapok, lekérdezési paraméterek, JSON payloadok) validálása
számítás, tárolás vagy tartományellenőrzés előtt, biztosítva, hogy csak véges számok menjenek át (`true`), és minden más
`false` értéket adjon vissza.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isNumber` függvényt `unknown` értékek validálására aritmetikai műveletek előtt; elutasítja a `NaN`, az
`Infinity` és a `-Infinity` értékeket.

### Előnyök

- Csak valódi JavaScript-számokra ad vissza `true` értéket (típusellenőrzés, valamint a `NaN` és a végtelen értékek
  elutasítása).
- Megelőzi azokat a gyakori validációs hibákat, amikor a `NaN`, az `Infinity` vagy a `-Infinity` véletlenül számként
  átmegy.
- Jól működik futásidejű őrként ismeretlen bemenethez (pl. JSON, felhasználói input, külső API-k).
- Egyszerű, gyors, és mellékhatásmentes.

## Használat

### Szintaxis

Függvény:

- `isNumber(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input érvényes, véges szám
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isNumber(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>A fájl 30 January 2026 at 13:09:18 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>