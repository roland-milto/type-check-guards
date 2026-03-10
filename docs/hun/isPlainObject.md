# isPlainObject

## Leírás

Ellenőrzi, hogy a megadott `value` egyszerű objektum-e, és ha igen, `true`-t ad vissza, különben `false`-t.

### Használati eset

Ellenőrizze, hogy egy `unknown` bemenet (pl. feldolgozott JSON, külső adatok vagy függvényargumentumok) egyszerű
objektum-e, mielőtt kulcsokat olvasna ki belőle, vagy egy típusos konfigurációs objektummá alakítaná.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isPlainObject` hasznos az `unknown` szűkítéséhez, mielőtt rekord-szerű objektumként kezelnénk; csak olyan
> értékekre ad vissza `true`-t, amelyek belső címkéje `[object Object]`.

### Előnyök

- Egyszerű, megbízható ellenőrzést biztosít annak megállapítására, hogy egy érték egyszerű objektum-e (azaz `Object` /
  `{}`), és `true`-t vagy `false`-t ad vissza.
- Segít megkülönböztetni az egyszerű objektumokat a tömböktől, függvényektől, `null`-tól és más, nem egyszerű objektum
  típusoktól.
- Hasznos TypeScript típusőrként az `unknown` értékek szűkítéséhez, mielőtt objektumtulajdonságokat érnénk el.

## Használat

### Szintaxis

Függvény:

- `isPlainObject(value)`

Paraméterek:

- `value`: Az érték, amelyet egyszerű objektum státusz szempontjából vizsgálunk.

### Függvény helyi importálása

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // itt az input egy egyszerű objektum
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // igaz
console.log(isPlainObject([])); // hamis
console.log(isPlainObject(null)); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isPlainObject(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>A fájl 6 February 2026 at 12:17:56 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>