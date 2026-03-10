# isDate

## Leírás

Az `isDate` meghatározza, hogy a megadott érték `Date`-e: `true`-t ad vissza `Date` példányok esetén, egyébként pedig
`false`-t.

### Használati eset

Ismeretlen értékek (pl. kérésadatok, konfigurációs értékek vagy parse-olt JSON) validálása és szűkítése, mielőtt `Date`
műveleteket végeznénk, például formázást, összehasonlításokat, vagy a `toISOString()` meghívását.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isDate`-et az `unknown` futásidejű szűkítéséhez `Date`-re; csak valódi `Date` példányokra ad vissza
`true`-t (nem dátum stringekre).

### Előnyök

- Egyszerű futásidejű őrt biztosít annak ellenőrzésére, hogy egy érték `Date`-e.
- Segít megelőzni a típushibákat azzal, hogy csak a `Date` példányok mennek át az ellenőrzésen.
- Hasznos ismeretlen bemenetek (pl. API payloadok) validálásához, mielőtt dátumspecifikus metódusokat használnánk.

## Használat

### Szintaxis

Függvény:

- `isDate(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték, hogy `Date` típusú-e.

### Függvény helyi importálása

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // az input itt egy Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isDate(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isDate](../_analysis/isDate.md)

<br>

---

<small>A fájl 31 January 2026 at 15:37:42 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>