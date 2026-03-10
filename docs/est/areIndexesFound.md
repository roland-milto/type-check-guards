# areIndexesFound

## Kirjeldus

`areIndexesFound` kontrollib, kas väärtus on mittetühi massiiv, mille kõik elemendid on kehtivad indeksid, tagastades
`true`, kui nii on, ja `false` muul juhul.

### Kasutusjuht

Valideeri kasutaja esitatud või välised andmed (nt parsitud JSON), millelt eeldatakse indeksite loendit, enne nende
kasutamist massiividele ligipääsuks või massiivide lõikamiseks.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areIndexesFound`, et valideerida tundmatu sisend enne selle elementide käsitlemist massiivi indeksitena; see
> tagastab `false` tühjade massiivide korral ja massiivide korral, mis sisaldavad mitteindeksi väärtusi.

### Eelised

- Tagastab `true` ainult siis, kui sisend on täidetud massiiv ja iga element on kehtiv indeks.
- Ebaõnnestub kiiresti: tagastab `false` niipea, kui leitakse mitteindeksi element.
- Kasulik kaitsekontrollina enne väärtuste kasutamist massiivi positsioonide või nihete (offset’ite) jaoks.

## Kasutus

### Süntaks

Funktsioon:

- `areIndexesFound(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse indeksinõuetele vastavuse suhtes.

### Funktsiooni kohalik import

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // Siin kinnitatakse, et `a` on täidetud indeksite massiiv.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areIndexesFound(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Fail loodi 31 January 2026 at 00:41:37 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>