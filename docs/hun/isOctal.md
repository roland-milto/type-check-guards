# isOctal

## Leírás

Meghatározza, hogy egy érték érvényes oktális literál string-e (pl. `0o755`).

### Használati eset

Felhasználói bemenet vagy konfigurációs értékek validálása, amelyeknek oktális literál stringként kell megadva lenniük (
például fájl jogosultsági módok, mint a `0o644`), mielőtt feldolgoznád vagy átalakítanád őket.

> **Megjegyzés TypeScript felhasználóknak:**
>
> Az `isOctal` egy típusőr (`value is string`). `true` eredmény után a TypeScript a vizsgált változót `string` típusra
> szűkíti.

### Előnyök

- Szigorú típusőrt biztosít: csak akkor ad vissza `true` értéket, ha a bemenet egy olyan string, amely megfelel egy
  oktális literál formátumának.
- Elutasítja az üres stringeket és azokat a stringeket, amelyek elején/végén szóköz vagy vezérlőkarakter (ASCII
  control/space) található, csökkentve a véletlen egyezéseket.
- Támogatja az opcionális előjelet, és nem érzékeny a kis-/nagybetűkre a `0o`/`0O` előtag esetén.
- Megengedő a nem string bemenetekkel: kivételdobás helyett `false` értéket ad vissza.

## Használat

### Szintaxis

Függvény:

- `isOctal(value)`

Paraméterek:

- `value`: Az ellenőrizendő érték.

### Függvény helyi importálása

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // igaz
console.log(isOctal(b)); // igaz
console.log(isOctal(c)); // hamis
console.log(isOctal(d)); // hamis

if (isOctal(a)) {
  // itt az a string
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Objektum globális importálása

A függvények globális objektummódszerként történő importálásához használd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

A következő metódus ezután globálisan elérhető lesz:

- `Type.isOctal(value)`

## Függvényanalízis

Itt található a táblázatos elemzés arról, milyen kimenet keletkezik, ha különböző paramétereket adsz meg a
függvényeknek: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>A fájl 30 January 2026 at 15:41:33 (UTC)-án/-én készült a *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** használatával,
készítette: **[Roland Milto](https://roland-milto.de/)**.</small>