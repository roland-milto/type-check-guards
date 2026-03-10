# areBigInts

## Kirjeldus

`areBigInts` määrab, kas väärtus on mittetühi massiiv, mis sisaldab ainult `bigint` väärtusi.

### Kasutusjuht

Valideeri tundmatu sisend (nt parsitud JSON-laadne andmestik, API päringukeha või funktsiooni parameetrid, mis on
tüübitud kui `unknown`), et tagada enne töötlemist, et see on mittetühi `bigint` väärtuste massiiv; tagastab `true`
ainult siis, kui kõik elemendid on `bigint`, vastasel juhul `false`.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areBigInts` käitusaja kaitsjana enne `bigint`-ainult toimingute (nt aritmeetika, võrdlused) tegemist tundmatu
> sisendi peal.

### Eelised

- Tagab, et iga element on `bigint`, tagastades `true` ainult siis, kui kogu massiiv vastab tingimusele.
- Lükkab mitte-massiivid ja tühjad massiivid disaini järgi tagasi (läbi `isFilledArray`), vältides kehtetute sisendite
  juhuslikku aktsepteerimist.
- Kiire katkestus: tagastab `false` niipea, kui leitakse element, mis ei ole `bigint`.

## Kasutus

### Süntaks

Funktsioon:

- `areBigInts(array)`

Parameetrid:

- `array`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // tõene
console.log(areBigInts(b)); // väär
console.log(areBigInts(c)); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areBigInts(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Fail loodi 31 January 2026 at 23:25:41 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>