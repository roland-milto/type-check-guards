# isFilledArray

## Kirjeldus

Kontrollib, kas `value` on massiiv, milles on vähemalt üks element, tagastades `true` või `false`.

### Kasutusjuht

Kasuta `isFilledArray`, et valideerida sissetulevaid andmeid (nt API payload’id, vormi väärtused, konfiguratsioon) enne
iteratsiooni, esimese elemendi kasutamist või loogika rakendamist, mis nõuab vähemalt ühte elementi.

> **Märkus TypeScripti kasutajatele:**
>
> `isFilledArray` on käitusaja kaitse (runtime guard), mis tagastab tõeväärtuse; see ei kitsenda elementide tüüpe
> kaugemale kui kinnitab, et massiiv ei ole tühi.

### Eelised

- Lihtne ja kiire kontroll mittetühja massiivi jaoks, kasutades `Array.isArray` ja pikkuse kontrolli.
- Aitab vältida käitusaja vigu, kui kood eeldab, et massiivis on vähemalt üks element.
- Selge tõeväärtuslik tulemus: tagastab `true` mittetühjade massiivide korral ja `false` muul juhul.

## Kasutus

### Süntaks

Funktsioon:

- `isFilledArray(value)`

Parameetrid:

- `value`: Väärtus, mida kontrollida, kas see on mittetühi massiiv.

### Funktsiooni kohalik import

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // sisend on käitusajal mittetühi massiiv
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isFilledArray(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Fail loodi 6 February 2026 at 11:46:56 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>