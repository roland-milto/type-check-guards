# areArrays

## Kirjeldus

`areArrays` määrab, kas väärtus on täidetud kahemõõtmeline massiiv, mille kõik elemendid on massiivid.

### Kasutusjuht

Kasuta `areArrays` tabeli- või maatriksilaadsete sisendite (nt CSV read, ruudustikuandmed või rühmitatud loendid)
valideerimiseks enne rea/veeru operatsioonide tegemist; see tagastab `false`, kui sisend ei ole massiiv, on tühi või
sisaldab mõnda elementi, mis ei ole massiiv.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areArrays`, kui pead enne pesastatud massiivide läbimist või indekseerimist veenduma, et väärtus on mittetühi
> 2D massiiv ja et iga rida on massiiv.

### Eelised

- Valideerib, et sisend on mittetühi kahemõõtmeline massiiv, kus iga element on massiiv.
- Tagastab lihtsa tõeväärtuse (`true`/`false`), mis sobib kaitseteks ja varajasteks väljumisteks.
- Aitab vältida käitusaja vigu, kui hilisem kood eeldab pesastatud massiivioperatsioone (nt ridade map'imist).

## Kasutus

### Süntaks

Funktsioon:

- `areArrays(array)`

Parameetrid:

- `array`: Kontrollitav sisend.

### Funktsiooni kohalik import

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value on 2D massiiv, mille elementideks on massiivid
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areArrays(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Fail loodi 6 February 2026 at 13:39:24 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>