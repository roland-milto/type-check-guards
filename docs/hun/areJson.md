# areJson

## Leírás

Ellenőrzi, hogy egy tömb minden eleme JSON-karakterlánc-e; csak akkor ad vissza `true` értéket, ha a tömb nem üres és
minden elem érvényes JSON, különben `false` értéket ad vissza.

### Használati eset

Bejövő adatok validálása (pl. lekérdezési paraméterekből, környezeti változókból vagy külső API-kból), amikor
JSON-kódolt karakterláncok tömbjét várod, és el akarod utasítani az üres tömböket vagy bármely nem JSON bejegyzést.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areJson` függvényt, amikor azt kell ellenőrizned, hogy egy `unknown[]` csak JSON-karakterláncokat
> tartalmaz-e a feldolgozásuk (pl. `JSON.parse`-szal) előtt.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem érvényes JSON-karakterlánc; egyébként `false` értéket ad vissza.
- Gyorsan hibázik: az ellenőrzést azonnal leállítja, amint nem JSON elemet talál.
- Tervezetten elutasítja az üres tömböket, a nem kitöltött bemenetre `false` értéket ad vissza.

## Használat

### Szintaxis

Függvény:

- `areJson(array)`

Paraméterek:

- `array`: A tömb, amelyet JSON-karakterlánc elemek szempontjából kell ellenőrizni.

### Függvény helyi importálása

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // igaz
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // hamis
const empty = areJson([]); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areJson(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areJson](../_analysis/areJson.md)

<br>

---

<small>A fájl 30 January 2026 at 16:16:10 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>