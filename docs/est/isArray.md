# isArray

## Kirjeldus

`isArray` kontrollib, kas antud väärtus on massiiv, ja tagastab `true`, kui on, vastasel juhul `false`.

### Kasutusjuht

Valideeri tundmatuid andmeid (nt parsitud JSON või API vastused), et tagada väärtuse massiiviks olemine enne
itereerimist, indekseerimist või `.length`-ile ligipääsu.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isArray`-i, kui vajad massiivide jaoks käitusaja kontrolli; see tagastab tõeväärtuse ja seda on ohutu kutsuda
`unknown` väärtustega.

### Eelised

- Kasutab sisseehitatud `Array.isArray`-i usaldusväärseks massiivi tuvastamiseks erinevates kontekstides (nt
  iframe’ides).
- Tagastab lihtsa tõeväärtuse (`true`/`false`), mis sobib valvuriteks ja haruloogikaks.
- Töötab mis tahes sisendtüübiga, kuna parameeter on `unknown`.

## Kasutus

### Süntaks

Funktsioon:

- `isArray(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input on käitusajal massiiv
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isArray(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isArray](../_analysis/isArray.md)

<br>

---

<small>Fail loodi 6 February 2026 at 11:30:15 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>