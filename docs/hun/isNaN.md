# isNaN

## Leírás

Meghatározza, hogy a megadott `value` `number` típusú `NaN`-e stringek konvertálása nélkül.

### Használati eset

Nem megbízható vagy lazán tipizált bemenet (pl. API payloadok, űrlapértékek, feldolgozott JSON) validálása a speciális
`NaN` érték felismeréséhez és explicit kezeléséhez, miközben a nem szám típusú bemeneteket nem `NaN`-ként kezeled.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isNaN`-t, amikor a speciális numerikus `NaN` értéket kell felismerned úgy, hogy közben biztosítod: a
> bemenet valóban `number` (nincs stringből számmá konverzió).

### Előnyök

- Ellenőrzi, hogy egy érték `NaN`-e anélkül, hogy a nem számokat (pl. stringeket) számmá kényszerítené.
- Csak azoknál az értékeknél ad vissza `true`-t, amelyek egyszerre `number` típusúak és `NaN`-ek.
- Biztonságos `unknown` bemenetekhez, és elkerüli az implicit konverziókból származó téves pozitív találatokat.

## Használat

### Szintaxis

Függvény:

- `isNaN(value)`

Paraméterek:

- `value`: Az az érték, amelyről ellenőrizni kell, hogy `number` típusú `NaN`-e.

### Függvény helyi importálása

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // igaz
console.log(isNaN(b)); // hamis
console.log(isNaN(c)); // hamis

if (isNaN(a)) {
  // a egy szám, és konkrétan NaN
}
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isNaN(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>A fájl 30 January 2026 at 15:46:26 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>