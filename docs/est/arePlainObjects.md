# arePlainObjects

## Kirjeldus

Kontrollib, kas massiivi kõik elemendid on tavalised objektid, tagastades `true` ainult siis, kui iga element
kvalifitseerub.

### Kasutusjuht

Valideeri väliseid või tüübistamata andmeid (nt parsitud JSON, API päringute koormad, vormi esitused), et tagada, et
said mittetühja massiivi, kus iga kirje on tavaline objekt, enne kui hakkad iteratsiooniga omadusi lugema.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `arePlainObjects`, et valideerida tundmatu sisend enne, kui käsitled seda TypeScriptis kui
`Record<string, unknown>[]` (või rangema objektikujuga) tüüpi.

### Eelised

- Tagab, et iga sisendmassiivi element on tavaline objekt, tagastades `true` ainult siis, kui kõik elemendid vastavad
  tingimusele.
- Lükkab vigased sisendid varakult tagasi (mitte-massiivid või tühjad massiivid), tagastades `false`.
- Käsitleb nii objektliteraale kui ka `Object.create(null)` abil loodud objekte kehtivate tavaliste objektidena.

## Kasutus

### Süntaks

Funktsioon:

- `arePlainObjects(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse tavaliste objektide elementide suhtes.

### Funktsiooni kohalik import

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // tõene
const b = arePlainObjects([{}, Object.create(null)]); // tõene
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // väär
const d = arePlainObjects([] as unknown[]); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.arePlainObjects(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Fail loodi 30 January 2026 at 16:24:59 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>