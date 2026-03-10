# isObject

## Kirjeldus

Määrab, kas antud `value` on `object` (välja arvatud `null`).

### Kasutusjuht

Kasuta `isObject`, et valideerida tundmatuid sisendeid (nt parsitud JSON, API vastused, sündmuse payload’id) enne
omadustele ligipääsu, tagades, et väärtus on objekt ega ole `null`.

> **Märkus TypeScripti kasutajatele:**
>
> `isObject` on käitusaja kaitsefunktsioon, mis tagastab tõeväärtuse; see ei kitsenda tüüpi konkreetse objekti kujuni.
> Kui vajad tugevamat tüübistamist, kombineeri see täiendavate kontrollidega (nt omaduse olemasolu).

### Eelised

- Tagastab `true` ainult mitte-`null` väärtuste puhul, mille `typeof` on `"object"`.
- Väldib levinud JavaScripti komistuskivi, kus `null` muidu käsitletaks objektina.
- Töötab nii tavaliste objektide kui ka sisseehitatud objektieksemplaridega (nt `Date`, `RegExp`).
- Lihtne ja kiire käitusaja kontroll, sobib kaitsvaks programmeerimiseks ja sisendi valideerimiseks.

## Kasutus

### Süntaks

Funktsioon:

- `isObject(value)`

Parameetrid:

- `value`: Väärtus, mida kontrollitakse, kas see on `object`.

### Funktsiooni kohalik import

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // sisend on käitusajal mittenull-objekt
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isObject(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isObject](../_analysis/isObject.md)

<br>

---

<small>Fail loodi 31 January 2026 at 00:18:15 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>