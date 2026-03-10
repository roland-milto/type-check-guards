# isNaN

## Kirjeldus

Määrab, kas antud `value` on tüüpi `number` `NaN`, ilma stringe teisendamata.

### Kasutusjuht

Valideeri ebausaldusväärset või lõdvalt tüübitud sisendit (nt API payloadid, vormiväärtused, parsitud JSON), et
tuvastada eriline `NaN` väärtus ja käsitleda seda selgesõnaliselt, käsitledes mittenumbrilisi sisendeid kui mitte-`NaN`.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isNaN`, kui pead tuvastama erilise arvulise väärtuse `NaN`, tagades samal ajal, et sisend on tegelikult
`number` (ilma stringi-numbriks teisenduseta).

### Eelised

- Kontrollib, kas väärtus on `NaN`, ilma mittenumbreid (nt stringe) numbriteks sundteisendamata.
- Tagastab `true` ainult väärtuste puhul, mis on nii tüüpi `number` kui ka `NaN`.
- Ohutu `unknown` sisendite korral ja väldib valepositiivseid tulemusi kaudsete teisenduste tõttu.

## Kasutus

### Süntaks

Funktsioon:

- `isNaN(value)`

Parameetrid:

- `value`: Väärtus, mida kontrollitakse, kas see on tüüpi `number` `NaN`.

### Funktsiooni kohalik import

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // tõene
console.log(isNaN(b)); // väär
console.log(isNaN(c)); // väär

if (isNaN(a)) {
  // a on arv ja täpsemalt NaN
}
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isNaN(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Fail loodi 30 January 2026 at 15:45:49 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>