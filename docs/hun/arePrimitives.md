# arePrimitives

## Leírás

Az `arePrimitives` kiértékeli, hogy egy megadott, nem üres tömb minden eleme primitív típus-e.

### Használati eset

Ellenőrizd, hogy a bejövő adatok (pl. lekérdezési paraméterek, CSV-sor értékei, vagy azonosítók/címkék listája) csak
primitív értékeket tartalmaznak-e szerializálás, hashelés, naplózás előtt, illetve mielőtt olyan API-knak adnád át,
amelyek nem kaphatnak objektumokat.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `arePrimitives` függvényt, amikor biztosítani kell, hogy egy `unknown[]` csak primitív értékeket (string,
> number, bigint, boolean, symbol, undefined vagy null) tartalmazzon a további feldolgozás előtt.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem primitív érték, így szigorú őr a „nincsenek objektumok/funkciók”
  tömbökhöz.
- Gyorsan elbukik: `false` értéket ad vissza, amint nem primitív elemet talál.
- Nem tömbök és üres tömbök esetén is `false` értéket ad vissza (a nem üres tömb ellenőrzésén keresztül), megelőzve az
  érvénytelen bemenet véletlen elfogadását.

## Használat

### Szintaxis

Függvény:

- `arePrimitives(array)`

Paraméterek:

- `array`: Az a tömb, amelyet primitív típusú elemek szempontjából ellenőrizni kell.

### Függvény helyi importálása

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // igaz
const r2 = arePrimitives(b); // igaz
const r3 = arePrimitives(c); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.arePrimitives(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>A fájl 31 January 2026 at 00:04:57 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>