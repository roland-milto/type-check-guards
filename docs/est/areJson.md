# areJson

## Kirjeldus

Kontrollib, kas massiivi kõik elemendid on JSON-stringid, tagastades `true` ainult siis, kui massiiv on täidetud ja iga
kirje on kehtiv JSON; vastasel juhul tagastab `false`.

### Kasutusjuht

Valideeri sissetulevaid andmeid (nt päringuparameetritest, keskkonnamuutujatest või välistest API-dest), kus eeldad
JSON-kodeeritud stringide massiivi ning soovid tühjad massiivid või mis tahes mitte-JSON kirjed tagasi lükata.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areJson`, kui pead valideerima, et `unknown[]` sisaldab enne parsimist (nt `JSON.parse` abil) ainult
> JSON-stringe.

### Eelised

- Tagastab `true` ainult siis, kui iga element on kehtiv JSON-string; vastasel juhul tagastab `false`.
- Ebaõnnestub kiiresti: lõpetab kontrollimise niipea, kui leitakse mitte-JSON element.
- Lükkab tühjad massiivid disaini järgi tagasi, tagastades täitmata sisendi korral `false`.

## Kasutus

### Süntaks

Funktsioon:

- `areJson(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse JSON-stringidest elementide suhtes.

### Funktsiooni kohalik import

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // tõene
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // väär
const empty = areJson([]); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areJson(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areJson](../_analysis/areJson.md)

<br>

---

<small>Fail loodi 30 January 2026 at 16:15:39 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>