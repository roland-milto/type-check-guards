# areBooleans

## Leírás

Az `areBooleans` ellenőrzi, hogy egy adott nem üres tömb kizárólag logikai (boolean) értékeket tartalmaz-e; ha igen,
`true`-t ad vissza, egyébként `false`-t.

### Használati eset

Felhasználó által megadott vagy külső adatok (pl. JSON payloadok, lekérdezési paraméterek, konfigurációs tömbök)
validálása annak biztosítására, hogy egy nem üres lista csak logikai értékeket tartalmazzon, mielőtt logikai műveleteket
alkalmaznál rajta, vagy olyan API-knak adnád át, amelyek `boolean[]`-t várnak.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Használd az `areBooleans` függvényt `unknown[]` validálására, mielőtt `boolean[]`-ként kezelnéd; üres tömbök esetén
`false`-t ad vissza, ezért ezt az esetet kezeld külön, ha az üres lista megengedett kell legyen.

### Előnyök

- Csak akkor ad vissza `true` értéket, ha minden elem logikai (boolean), és a bemenet egy nem üres tömb.
- Megakadályozza a téves pozitív találatokat az üres tömbök elutasításával (`false`-t ad vissza).
- Jól működik futásidejű őrként (runtime guard) kizárólag logikai műveletek előtt (pl. `every`, `some`, logikai
  redukciók).

## Használat

### Szintaxis

Függvény:

- `areBooleans(array)`

Paraméterek:

- `array`: A tömb, amelyet logikai (boolean) elemek szempontjából kell ellenőrizni.

### Függvény helyi importálása

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.areBooleans(array)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>A fájl 30 January 2026 at 14:40:38 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>