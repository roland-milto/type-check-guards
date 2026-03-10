# isBuffer

## Kirjeldus

Kontrollib, kas väärtus on Node.js `Buffer`, ja tagastab `true` või `false`.

### Kasutusjuht

Valideeri sisendeid käitusajal (nt API payload’id, failide andmed või sõnumipuhvrid), et enne töötlemist veenduda, et
väärtus on `Buffer`, ning saada usaldusväärselt `false`, kui käitatakse väljaspool Node.js-i, kus `Buffer` ei pruugi
olemas olla.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isBuffer`, et kitsendada `unknown` väärtused tüübiks `Buffer` enne Bufferi-spetsiifiliste meetodite kutsumist.

### Eelised

- Tuvastab turvaliselt Node.js `Buffer`-i eksemplare, kasutades `Buffer.isBuffer`.
- Tagastab `false` keskkondades, kus `Buffer` pole saadaval, vältides käitusaja vigu.
- Töötab `unknown` sisendiga, mistõttu sobib käitusaja valideerimiseks ja tüübi kitsendamiseks.

## Kasutus

### Süntaks

Funktsioon:

- `isBuffer(value)`

Parameetrid:

- `value`: Testitav väärtus.

### Funktsiooni kohalik import

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // tõene
console.log(isBuffer(b)); // väär

if (isBuffer(a)) {
  // a on siin Buffer
  console.log(a.toString("utf8"));
}
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isBuffer(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Fail loodi 31 January 2026 at 16:31:26 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>