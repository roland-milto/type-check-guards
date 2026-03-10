# isSymbol

## Leírás

Az `isSymbol` meghatározza, hogy egy adott érték `symbol` típusú-e, szimbólumok esetén `true`-t, egyébként `false`-t ad
vissza.

### Használati eset

Ellenőrizd, hogy egy `unknown` érték `symbol`-e, mielőtt egyedi azonosítóként, regiszterkulcsként, vagy számított
tulajdonságkulcsként használnád objektumokban és map-ekben.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isSymbol`-t az `unknown` `symbol`-lá szűkítéséhez, mielőtt szimbólumokkal kapcsolatos függvényeket
> hívnál, vagy számított tulajdonságkulcsként használnád.

### Előnyök

- Egyszerű, megbízható futásidejű ellenőrzést biztosít a JavaScript `symbol` primitív típushoz.
- Segít leszűkíteni az `unknown` értékeket, mielőtt szimbólum-specifikus API-kat használnál, vagy kulcsként tárolnád
  őket.
- Elkerüli a téves pozitív találatokat a `typeof` használatával, ami a `symbol` értékek felismerésének kanonikus módja.

## Használat

### Szintaxis

Függvény:

- `isSymbol(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // itt az input egy szimbólum
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isSymbol(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>A fájl 30 January 2026 at 14:27:05 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>