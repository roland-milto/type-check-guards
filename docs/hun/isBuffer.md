# isBuffer

## Leírás

Ellenőrzi, hogy egy érték Node.js `Buffer`-e, és `true` vagy `false` értéket ad vissza.

### Használati eset

Bemenetek futásidejű validálása (pl. API payloadok, fájladatok vagy üzenetbufferek) annak biztosítására, hogy egy érték
`Buffer` legyen a feldolgozás előtt, és megbízhatóan `false` értéket kapj, ha Node.js-en kívül fut, ahol a `Buffer`
esetleg nem létezik.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isBuffer` függvényt az `unknown` értékek `Buffer` típusra szűkítéséhez, mielőtt Buffer-specifikus
> metódusokat hívnál.

### Előnyök

- Biztonságosan felismeri a Node.js `Buffer` példányokat a `Buffer.isBuffer` használatával.
- Olyan környezetekben, ahol a `Buffer` nem érhető el, `false` értéket ad vissza, elkerülve a futásidejű hibákat.
- Működik `unknown` bemenettel, így alkalmas futásidejű validálásra és típus-szűkítésre.

## Használat

### Szintaxis

Függvény:

- `isBuffer(value)`

Paraméterek:

- `value`: A tesztelendő érték.

### Függvény helyi importálása

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // igaz
console.log(isBuffer(b)); // hamis

if (isBuffer(a)) {
  // itt az a egy Buffer
  console.log(a.toString("utf8"));
}
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isBuffer(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>A fájl 31 January 2026 at 16:31:56 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>