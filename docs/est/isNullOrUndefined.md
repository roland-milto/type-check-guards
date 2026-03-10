# isNullOrUndefined

## Kirjeldus

Kontrollib, kas antud väärtus on `null` või `undefined`.

### Kasutusjuht

Kasuta `isNullOrUndefined`, kui pead käsitlema nii `null` kui ka `undefined` kui „väärtus puudub”, näiteks valikuliste
sisendite valideerimisel, API payload’ide normaliseerimisel või koodiharude kaitsmisel enne potentsiaalselt puuduva
väärtuse dereferentseerimist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isNullOrUndefined`, et kaitsta end puuduvate väärtuste eest enne omadustele ligipääsu või meetodite
> väljakutsumist; see tagastab `true` ainult `null` ja `undefined` korral.

### Eelised

- Pakub selge ja korduvkasutatava kaitse `null` ja `undefined` tuvastamiseks ühes kohas.
- Tagastab lihtsa tõeväärtuse (`true`/`false`), mida on lihtne tingimustes ja valideerimistes kombineerida.
- Aitab vältida levinud käitusaja vigu, kontrollides puuduvate väärtuste olemasolu enne omadustele ligipääsu või
  meetodite väljakutsumist.

## Kasutus

### Süntaks

Funktsioon:

- `isNullOrUndefined(value)`

Parameetrid:

- `value`: Väärtus, mida kontrollitakse `null` või `undefined` suhtes.

### Funktsiooni kohalik import

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // käsitle puuduvat väärtust
}

console.log(isNullOrUndefined(b)); // tõene
console.log(isNullOrUndefined(c)); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isNullOrUndefined(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Fail loodi 31 January 2026 at 00:33:32 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>