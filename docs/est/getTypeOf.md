# getTypeOf

## Kirjeldus

`getTypeOf` tagastab antud väärtuse jaoks detailse, inimesele loetava tüübisildi, sh täpsustatud numbritüübid ja
konkreetsed objektiklassid.

### Kasutusjuht

Kasuta `getTypeOf`, et ühtlustada tüübivastet sisendi valideerimisel ja diagnostikas—näiteks, et tagasi lükata `nan`,
aktsepteerida ainult `integer` ID-sid, käsitleda numbrilisi stringe nagu `decimal` teisiti kui tavalist `string`, või
logida täpseid objektiklasside liike nagu `date` ja `regexp`.

> **Märkus TypeScripti kasutajatele:**
>
> Tagastustüüp on `DataTypeAsString | string`. Käsitle seda kirjeldava sildina; hargnemisel võrdle tuntud literaalidega
> nagu `integer`, `float`, `nan`, `array`, `null` ja `undefined`.

### Eelised

- Tagastab detailsema tüübistringi kui JavaScripti `typeof`, sh numbrilised alamtüübid nagu `integer`, `float` ja `nan`.
- Eristab `null` ja `undefined` selgesõnaliselt kui `null` ja `undefined`.
- Tuvastab levinud numbriliste stringide vormingud ja raporteerib need kui `binary`, `octal`, `decimal` või
  `hexadecimal` tavalise `string` asemel.
- Tuvastab massiivid kui `array` ning kasutab `Object.prototype.toString`, et anda spetsiifilisi objektitüübi nimesid (
  nt `date`, `regexp`, `map`, `set`).
- Kasulik valideerimiseks, logimiseks ja silumiseks, kui on vaja järjepidevaid, inimesele loetavaid tüübisilte.

## Kasutus

### Süntaks

Funktsioon:

- `getTypeOf(value)`

Parameetrid:

- `value`: Väärtus, mille andmetüüp määrata.

### Funktsiooni kohalik import

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Näidiskontrollid
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.getTypeOf(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Fail loodi 6 February 2026 at 13:06:12 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>