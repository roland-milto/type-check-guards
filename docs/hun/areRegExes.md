# areRegExes

## Leírás

Az `areRegExes` ellenőrzi, hogy egy érték egy feltöltött tömb-e, amely kizárólag `RegExp` objektumokat tartalmaz.

### Használati eset

Ellenőrizd, hogy egy konfigurációs opció (pl. engedélyező/tiltó minták listája) nem üres reguláris kifejezésekből álló
tömb-e, mielőtt egyeztetésre használnád.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areRegExes` függvényt az `unknown` `RegExp[]` típusra szűkítéséhez iterálás vagy minták összefűzése
> előtt.

### Előnyök

- Biztosítja, hogy egy érték nem üres tömb legyen, amelyben minden elem egy `RegExp` példány.
- Egyszerű logikai őrt (`true`/`false`) ad a felhasználói bemenet vagy konfiguráció ellenőrzéséhez.
- Segít megelőzni a futásidejű hibákat, amikor a későbbi kód feltételezi, hogy minden elem támogatja a reguláris
  kifejezésekkel végzett műveleteket.

## Használat

### Szintaxis

Függvény:

- `areRegExes(array)`

Paraméterek:

- `array`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // a patterns itt RegExp-ek tömbje
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areRegExes(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>A fájl 30 January 2026 at 23:18:52 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>