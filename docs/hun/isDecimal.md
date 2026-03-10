# isDecimal

## Leírás

Az `isDecimal` ellenőrzi, hogy egy érték decimális string reprezentáció-e, kezdő/záró szóközök nélkül és érvényes
decimális formátummal.

### Használati eset

Űrlapmezők, API payloadok vagy konfigurációs értékek validálása, amelyeket decimális stringként (opcionálisan előjellel)
kell megadni, bármilyen környező szóköz nélkül, még a feldolgozás vagy tárolás előtt.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `isDecimal` függvényt a felhasználói bemenet ellenőrzésére az átalakítás előtt (pl. `Number(value)`),
> különösen akkor, ha a szóközöket el kell utasítani.

### Előnyök

- Szigorúan ellenőrzi, hogy a bemenet string, és megfelel-e egy decimális literál mintának.
- Elutasítja a kezdő és záró szóközöket (beleértve a vezérlőkaraktereket is), hogy elkerülje a kétértelmű értelmezést.
- Gyors előellenőrzéseket végez (típusellenőrzés és az első/utolsó karakter vizsgálata) a regex futtatása előtt.
- Egyszerű logikai eredményt (`true`/`false`) ad vissza, amely alkalmas őrfeltételekhez és bemenetellenőrzéshez.

## Használat

### Szintaxis

Függvény:

- `isDecimal(value)`

Paraméterek:

- `value`: Az érték, amelyet decimális string formátum szempontjából kell ellenőrizni.

### Függvény helyi importálása

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v itt egy string (futásidőben ellenőrizve)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isDecimal(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>A fájl 31 January 2026 at 15:52:44 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>