# isFinite

## Kirjeldus

Määrab, kas antud `value` on lõplik `number`.

### Kasutusjuht

Kasuta `isFinite`-i tundmatu sisendi (nt JSON-ist, vormidest või API-dest) valideerimiseks enne arvutuste tegemist,
tagades, et väärtus on reaalne, lõplik arv.

> **Märkus TypeScripti kasutajatele:**
>
> `isFinite` tagastab `true` ainult lõplike arvude korral; see tagastab `false` väärtuste `NaN`, `Infinity` ja mis tahes
> mittearvulise väärtuse puhul.

### Eelised

- Kasutab usaldusväärseks lõplikkuse kontrolliks sisseehitatud `Number.isFinite`-i.
- Tagastab `true` ainult lõplike arvude korral; tagastab `false` väärtuste `NaN`, `Infinity` ja mittearvuliste sisendite
  puhul.
- Lihtne, kõrvalmõjudeta predikaat, mis sobib valideerimiseks ja kaitselogikaks.

## Kasutus

### Süntaks

Funktsioon:

- `isFinite(value)`

Parameetrid:

- `value`: Väärtus, mille lõplikkust kontrollida.

### Funktsiooni kohalik import

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers on: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value on siin lõplik arv
  const doubled = value * 2;
  console.log(doubled);
}
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isFinite(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Fail loodi 30 January 2026 at 16:29:39 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>