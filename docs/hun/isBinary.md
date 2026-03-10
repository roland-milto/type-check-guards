# isBinary

## Leírás

Az `isBinary` meghatározza, hogy egy érték bináris karakterlánc-e (opcionálisan `0b`/`0B` előtaggal), és `true` vagy
`false` értéket ad vissza.

### Használati eset

Felhasználó által megadott karakterláncok (pl. űrlapmezők, CLI argumentumok, konfigurációs értékek) validálása annak
biztosítására, hogy kizárólag bináris számjegyeket tartalmazzanak, opcionálisan `0b`/`0B` előtaggal, további feldolgozás
előtt.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isBinary` függvényt típusőrként, mielőtt egy karakterláncot `BigInt`/`Number` típusra parszolnál vagy
> konvertálnál, hogy elkerüld az érvénytelen bemenetet.

### Előnyök

- Elfogad bináris karakterláncokat `0b`/`0B` előtaggal vagy anélkül.
- Elutasítja az üres karakterláncokat és azokat, amelyek elején/végén szóköz (ASCII ≤ 32) található.
- `true`/`false` értéket ad vissza kivételdobás nélkül, így ismeretlen bemenetek esetén is biztonságos.

## Használat

### Szintaxis

Függvény:

- `isBinary(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // igaz
const b = isBinary("1010");   // igaz
const c = isBinary("0b1020"); // hamis
const d = isBinary(0b1010);     // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isBinary(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>A fájl 31 January 2026 at 23:10:09 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>