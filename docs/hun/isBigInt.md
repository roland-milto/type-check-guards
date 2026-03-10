# isBigInt

## Leírás

Az `isBigInt` ellenőrzi, hogy egy adott érték `bigint` típusú-e; BigInt primitívek esetén `true`-t, egyébként `false`-t
ad vissza.

### Használati eset

Típus nélküli forrásokból (pl. JSON feldolgozás, felhasználói bevitel, külső API-k) érkező értékek validálása és
leszűkítése BigInt-specifikus számítások elvégzése vagy BigInt-kizárólagos mezőkben történő tárolás előtt.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isBigInt` függvényt az `unknown` `bigint` típusra szűkítéséhez BigInt aritmetika (pl. `+`, `*`) előtt,
> amely BigInt operandusokat igényel.

### Előnyök

- Egyszerű, megbízható futásidejű ellenőrzést biztosít a `bigint` primitív típushoz.
- Segít leszűkíteni az `unknown` értékeket BigInt-kizárólagos műveletek végrehajtása előtt.
- Elkerüli a téves pozitív találatokat: a hagyományos számok, karakterláncok és más típusok `false` értéket adnak
  vissza.

## Használat

### Szintaxis

Függvény:

- `isBigInt(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // igaz
console.log(isBigInt(10));  // hamis
console.log(isBigInt("10")); // hamis
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isBigInt(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>A fájl 31 January 2026 at 23:32:06 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>