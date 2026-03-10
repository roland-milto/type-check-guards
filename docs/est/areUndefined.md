# areUndefined

## Kirjeldus

`areUndefined` kontrollib, kas iga element antud massiivis on `undefined`.

### Kasutusjuht

Valideeri, et valikuliste tulemuste loend ei sisalda ühtegi tegelikku väärtust (ainult `undefined`), nt pärast otsingute
map'imist, kus puuduvad kirjed on esitatud kui `undefined`, ja soovid kinnitada, et kõik otsingud ebaõnnestusid.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areUndefined`, kui pead kinnitama, et `unknown[]` sisaldab ainult `undefined` väärtusi; see tagastab `false`
> tühjade massiivide ning mitte-massiivi/kehtetute sisendite korral sisemise `isFilledArray` kontrolli tõttu.

### Eelised

- Tagastab `false` mitte-massiivide ja tühjade massiivide korral, nõudes `isFilledArray` abil täidetud massiivi.
- Tagab, et iga element on `undefined`, mitte ainult mõned, muutes kavatsuse selgesõnaliseks.
- Kasulik kaitse-stiilis predikaadina tundmatute sisendkogumite valideerimisel.

## Kasutus

### Süntaks

Funktsioon:

- `areUndefined(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollida `undefined` elementide suhtes.

### Funktsiooni kohalik import

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Märkus: tagastab tühjade massiivide puhul false
const r4 = areUndefined([]); // false
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areUndefined(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Fail loodi 30 January 2026 at 13:55:33 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>