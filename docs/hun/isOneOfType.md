# isOneOfType

## Leírás

Az `isOneOfType` meghatározza, hogy egy adott `value` illeszkedik-e legalább az egyik megadott típussztringre; egyezés
esetén `true`-t ad vissza, különben `false`-t.

### Használati eset

Lazán tipizált vagy külső adatok (pl. feldolgozott JSON, lekérdezési paraméterek) validálása úgy, hogy több elfogadható
futásidejű típust (például `number` vagy `string`) engedsz meg, mielőtt további logikával folytatnád.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isOneOfType` függvényt, amikor futásidőben szeretnéd ellenőrizni, hogy egy érték több megengedett típus
> bármelyikének megfelel-e; `true`-t ad vissza, ha legalább egy típus egyezik, különben `false`-t.

### Előnyök

- Egyetlen hívásban ellenőrzi az értéket több megengedett típus ellen, és az első egyezésnél `true` értékkel tér vissza.
- `unknown` bemenetekkel is működik, ezért hasznos futásidejű határfelületeknél (pl. külső adatok, felhasználói
  bevitel).
- Egyszerű logikai eredményt ad (`true`/`false`), amely jól kombinálható feltételes logikával és korai visszatérésekkel.

## Használat

### Szintaxis

Függvény:

- `isOneOfType(value, types)`

Paraméterek:

- `value`: Az érték, amelyet a megadott típusokhoz viszonyítva ellenőrizni kell.
- `types`: Típussztringek tömbje, amelyek az érték lehetséges típusait jelölik.

### Függvény helyi importálása

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // a bemenet futásidőben egy objektum
}

console.log(isOneOfType(3, ["number", "string"])); // igaz
console.log(isOneOfType("hello", ["number", "boolean"])); // hamis

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isOneOfType(value, types)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>A fájl 31 January 2026 at 23:43:37 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>