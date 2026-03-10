# isInteger

## Kirjeldus

Määrab, kas antud `value` on ohutu täisarv.

### Kasutusjuht

Valideeri ebausaldusväärne sisend (nt päringuparameetrid, JSON-payloadid, keskkonnamuutujad) enne, kui kasutad seda
täisarvuna massiivi indeksite, lehekülgede jaotuse, loendurite või andmebaasi ID-de jaoks.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isInteger`-it tundmatu sisendi valideerimiseks enne, kui käsitled seda arvulise täisarvuna; see tagastab
`true` ainult väärtuste puhul, mille korral `typeof value === "number"` ja `Number.isSafeInteger(value)`.

### Eelised

- Kontrollib nii tüübi kui ka arvulise ohutuse: tagastab `true` ainult siis, kui sisend on arv ja ohutu täisarv.
- Väldib levinud komistuskive arvulisest teisendusest: stringid nagu "5" tagastavad korrektselt `false`.
- Lükkab tagasi mitte-täisarvud ja ebaturvalised täisarvud, mistõttu sobib ID-de, loendurite ja massiivide
  indekseerimise jaoks.

## Kasutus

### Süntaks

Funktsioon:

- `isInteger(value)`

Parameetrid:

- `value`: Väärtus, mille täisarvu staatust kontrollida.

### Funktsiooni kohalik import

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // tõene
const b = isInteger(-100);   // tõene
const c = isInteger("5");    // väär
const d = isInteger(5.5);    // väär
const e = isInteger(null);   // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isInteger(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Fail loodi 31 January 2026 at 00:49:39 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>