# areTrue

## Kirjeldus

Kontrollib, kas mittetühi massiiv sisaldab ainult tõeväärtusi `true`.

### Kasutusjuht

Kasuta `areTrue`, et valideerida, et eeltingimuste või funktsioonilippude kogum on kõik lubatud (kõik väärtused on
`true`) enne jätkamist, käsitledes tühje või vigaseid sisendeid kui mittetäidetud (`false`).

> **Märkus TypeScripti kasutajatele:**
>
> `areTrue` tagastab `false` tühja massiivi korral ja massiivide korral, mis sisaldavad mis tahes väärtust, mis ei ole
> rangelt `true`.

### Eelised

- Tagastab `true` ainult siis, kui iga element on rangelt `true` ja massiiv ei ole tühi.
- Ebaõnnestub kiiresti: tagastab `false` niipea, kui leitakse väärtus, mis ei ole `true`.
- Lükkab vigased sisendid (mitte-massiivid või tühjad massiivid) tagasi, tagastades `false`.

## Kasutus

### Süntaks

Funktsioon:

- `areTrue(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse, kas kõik väärtused on `true`.

### Funktsiooni kohalik import

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areTrue(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Fail loodi 30 January 2026 at 13:51:04 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>