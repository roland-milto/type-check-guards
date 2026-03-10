# areNumbers

## Leírás

Az `areNumbers` ellenőrzi, hogy egy érték nem üres tömb-e, amelynek minden eleme szám.

### Használati eset

Felhasználó által megadott vagy API-ból származó adatok validálása annak biztosítására, hogy nem üres számokat
tartalmazó tömb legyen, mielőtt összegeket, átlagokat vagy más numerikus aggregációkat számítanál.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areNumbers` függvényt ismeretlen tömbök validálására numerikus számítások előtt; `false` értéket ad
> vissza üres tömbök esetén, illetve olyan tömböknél, amelyek bármilyen nem szám értéket tartalmaznak.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha a bemenet nem üres tömb, és minden eleme szám.
- Megakadályozza a téves pozitív találatokat az üres tömbök és a nem tömb típusú bemenetek elutasításával.
- Hasznos őrfeltételként numerikus műveletek (pl. összegzés, átlagolás) előtt a futásidejű hibák elkerülésére.

## Használat

### Szintaxis

Függvény:

- `areNumbers(array)`

Paraméterek:

- `array`: Az a tömb, amelyet ellenőrizni kell, hogy szám elemeket tartalmaz-e.

### Függvény helyi importálása

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areNumbers(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>A fájl 30 January 2026 at 13:04:36 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>