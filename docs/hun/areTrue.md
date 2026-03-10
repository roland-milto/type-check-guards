# areTrue

## Leírás

Ellenőrzi, hogy egy nem üres tömb kizárólag a logikai `true` értékeket tartalmazza-e.

### Használati eset

Használd az `areTrue` függvényt annak ellenőrzésére, hogy az előfeltételek vagy funkciójelzők mind engedélyezve
vannak-e (minden érték `true`) a folytatás előtt, miközben az üres vagy hibás bemeneteket nem teljesültnek (`false`)
tekinted.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `areTrue` `false` értéket ad vissza üres tömb esetén, valamint olyan tömböknél, amelyek bármilyen olyan értéket
> tartalmaznak, ami nem szigorúan `true`.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem szigorúan `true`, és a tömb nem üres.
- Gyorsan leáll: `false` értéket ad vissza, amint egy nem `true` értéket talál.
- Az érvénytelen bemeneteket (nem tömbök vagy üres tömbök) `false` visszaadásával elutasítja.

## Használat

### Szintaxis

Függvény:

- `areTrue(array)`

Paraméterek:

- `array`: A tömb, amelyben ellenőrizni kell, hogy minden érték `true`.

### Függvény helyi importálása

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areTrue(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>A fájl 30 January 2026 at 13:51:28 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>