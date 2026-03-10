# areFinite

## Kirjeldus

`areFinite` kontrollib, kas väärtus on mittetühi massiiv, mille elemendid on kõik lõplikud arvud, tagastades sel juhul
`true` ja muul juhul `false`.

### Kasutusjuht

Valideeri arvuliste sisendmassiivide (nt diagrammiseeriad, koordinaatide loendid, mõõteproovid) enne arvutuste tegemist,
tagades, et tulemus on `true` ainult siis, kui kõik väärtused on lõplikud arvud.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areFinite`, kui pead tagama, et massiiv on mittetühi ja sisaldab ainult lõplikke arve; see tagastab `false`
> tühjade massiivide ning `NaN`-i või lõpmatusi sisaldavate massiivide korral.

### Eelised

- Tagastab `true` ainult siis, kui sisend on mittetühi massiiv ja iga element on lõplik arv.
- Lükkab tagasi `Infinity`, `-Infinity` ja `NaN`, tuginedes iga elemendi `isFinite`-kontrollile.
- Pakub lihtsat tõeväärtuslikku tulemust (`true`/`false`), mis sobib kaitseteks ja valideerimisvoogudeks.

## Kasutus

### Süntaks

Funktsioon:

- `areFinite(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse selle kõigi elementide lõplikkuse suhtes.

### Funktsiooni kohalik import

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // tõene
console.log(areFinite(b)); // väär
console.log(areFinite(c)); // väär

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areFinite(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Fail loodi 30 January 2026 at 16:34:28 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>