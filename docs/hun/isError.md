# isError

## Leírás

Ellenőrzi, hogy egy adott `value` az `Error` egy példánya-e.

### Használati eset

Használd az `isError`-t, amikor egy `unknown` értéket kapsz (például egy `catch` blokkból, egy callbackből vagy egy
külső könyvtárból), és biztonságosan meg kell állapítanod, hogy `Error`-e, mielőtt kiolvasnád a `message`, `name` vagy
`stack` értékét.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isError`-t az `unknown` értékek (pl. `catch`-ből származók) őrzésére, mielőtt `Error`-ként kezelnéd őket.

### Előnyök

- Egyszerű futásidejű ellenőrzést biztosít annak megállapítására, hogy egy érték `Error` példány-e.
- Segít leszűkíteni az ismeretlen bemeneteket, mielőtt hozzáférnél az olyan `Error` tulajdonságokhoz, mint a `message`
  vagy a `stack`.
- Csökkenti a futásidejű kivételek kockázatát, amikor a `catch`-ből, külső API-kból vagy típus nélküli forrásokból
  származó értékeket kezelsz.

## Használat

### Szintaxis

Függvény:

- `isError(value)`

Paraméterek:

- `value`: Az az érték, amelyet az `Error` típushoz viszonyítva ellenőrizni kell.

### Függvény helyi importálása

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isError(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isError](../_analysis/isError.md)

<br>

---

<small>A fájl 6 February 2026 at 12:45:54 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>