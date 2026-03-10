# areOfType

## Kirjeldus

Kontrollib, kas kõik antud `array` elemendid on määratud `type` tüüpi.

### Kasutusjuht

Kasuta `areOfType`, et valideerida tundmatut sisendit (nt parsitud JSON, API payload’id, kasutaja sisend) enne, kui teed
massiivi iga elemendi peal tüübispetsiifilisi toiminguid.

> **Märkus TypeScripti kasutajatele:**
>
> Kuna `areOfType` on tüübi kaitse (type guard), kitsendab TypeScript massiivi `if (areOfType(...)) {}` ploki sees
> tüübile `Array<DataTypeOf<T>>`.

### Eelised

- Pakub TypeScripti tüübi kaitset (type guard): kui see tagastab `true`, kitsendatakse sisend tüübile
  `Array<DataTypeOf<T>>`.
- Valideerib iga elemendi nõutud käitusaja tüübi vastu, takistades segatüübiliste massiivide läbipääsu.
- Ebaõnnestub kiiresti: tagastab `false` niipea, kui leitakse mittevastav element.
- Lükkab disaini järgi tagasi mitte-massiivid ja tühjad massiivid (sõltub `isFilledArray`).

## Kasutus

### Süntaks

Funktsioon:

- `areOfType(array, type)`

Parameetrid:

- `array`: Kontrollitav massiiv.
- `type`: Tüüp, mille vastu kontrollitakse massiivi iga elementi.

### Funktsiooni kohalik import

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values on nüüd number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areOfType(array, type)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Fail loodi 30 January 2026 at 17:09:19 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>