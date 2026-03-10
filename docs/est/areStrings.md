# areStrings

## Kirjeldus

`areStrings` kontrollib, kas massiiv on mittetühi ja kõik selle elemendid on stringid, tagastades `true` ainult sel
juhul.

### Kasutusjuht

Valideeri väliseid või kasutaja esitatud andmeid (nt päringuparameetrid, JSON-päringukeha, CSV-väljad), et enne
töötlemist tagada, et sul on mittetühi stringide loend.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areStrings`, et valideerida tundmatuid massiive enne ainult stringidele mõeldud loogika rakendamist; see
> tagastab tühjade massiivide korral `false`.

### Eelised

- Tagab, et iga element on string, ja lükkab segatüübilised massiivid tagasi, tagastades `false`.
- Lükkab tühjad massiivid tagasi, seega `true` näitab ainult mittetühja stringide loendit.
- Kasulik kiireks käitusaja kontrolliks enne ainult stringidele mõeldud toimingute tegemist (nt `trim`, `toLowerCase`).

## Kasutus

### Süntaks

Funktsioon:

- `areStrings(value)`

Parameetrid:

- `value`: Expected type `string[]`.

### Funktsiooni kohalik import

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input on käitusajal mittetühi string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areStrings(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Fail loodi 30 January 2026 at 13:17:58 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>