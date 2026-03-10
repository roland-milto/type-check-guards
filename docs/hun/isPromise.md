# isPromise

## Leírás

Meghatározza, hogy egy adott érték `Promise`-e.

### Használati eset

Használd az `isPromise`-t ismeretlen bemenetek validálására, mielőtt `Promise`-ként kezelnéd őket, például pluginek
által visszaadott értékek, dinamikus importok vagy lazán típusos API-k esetén.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isPromise` az `instanceof Promise` ellenőrzéssel vizsgál, így csak valódi `Promise` példányokra ad vissza `true`
> -t (nem általános thenable-ökre).

### Előnyök

- Egyszerű futásidejű ellenőrzést biztosít annak megállapítására, hogy egy érték `Promise`-e.
- Segít védeni azokat a kódútvonalakat, amelyek valódi `Promise` példányt igényelnek, és kiszámíthatóan `true`-t vagy
  `false`-t ad vissza.
- Elkerüli a hamis pozitív találatokat a „thenable” objektumoknál (pl. `{ then() {} }`), mivel tényleges `Promise`
  példányt követel meg.

## Használat

### Szintaxis

Függvény:

- `isPromise(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // igaz
console.log(isPromise(b)); // hamis
console.log(isPromise(123)); // hamis
console.log(isPromise(null)); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isPromise(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>A fájl 30 January 2026 at 23:53:05 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>