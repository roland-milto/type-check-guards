# isUndefined

## Kirjeldus

Kontrollib, kas antud väärtus on `undefined`.

### Kasutusjuht

Kasuta `isUndefined` valikuliste sisendite valvamiseks, puuduvate omaduste tuvastamiseks või eristamiseks „pole
esitatud” (`undefined`) ja „selgesõnaliselt tühi” (`null`) vahel.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isUndefined`, kui sul on konkreetselt vaja tuvastada `undefined` (mitte `null`). See on ohutu, sest tugineb
> tingimusele `typeof value === "undefined"`.

### Eelised

- Pakub selge ja üheselt mõistetava kontrolli `undefined` jaoks, kasutades `typeof`, vältides erijuhtumeid
  deklareerimata muutujatega.
- Tagastab lihtsa tõeväärtuse (`true`/`false`), mis sobib valvuriteks, hargnemiseks ja valideerimisloogikaks.
- Aitab eristada `undefined` teistest „tühjadest” väärtustest nagu `null`, `0`, `""` või `NaN`.

## Kasutus

### Süntaks

Funktsioon:

- `isUndefined(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x on siin määratlemata
} else {
  // x ei ole siin määratlemata
}

const a = isUndefined(undefined); // tõene
const b = isUndefined(null);      // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isUndefined(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:02:34 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>