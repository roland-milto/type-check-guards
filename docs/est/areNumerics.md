# areNumerics

## Kirjeldus

`areNumerics` kontrollib, kas väärtus on mittetühi massiiv, mille kõik elemendid on arvulised.

### Kasutusjuht

Kasuta `areNumerics`-i välise või tüübistamata andmestiku (nt JSON-päringute sisu, päringuparameetrid, vormisisend)
valideerimiseks enne summade, keskmiste või muude arvuliste toimingute arvutamist, tagades, et sisend on mittetühi
arvuline massiiv, ning tagastades vastasel juhul `false`.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areNumerics`-i `unknown` sisendi kaitseks enne, kui käsitled seda arvulise massiivina; see tagastab `false`
> mitte-massiivide ja tühjade massiivide korral.

### Eelised

- Tagastab `true` ainult siis, kui sisend on mittetühi massiiv ja iga element on arvuline.
- Ebaõnnestub kiiresti: lõpetab kontrollimise niipea, kui leitakse mittearvuline element, tagastades `false`.
- Aitab tundmatut sisendit turvaliselt valideerida enne arvuliste toimingute tegemist.

## Kasutus

### Süntaks

Funktsioon:

- `areNumerics(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollida arvuliste elementide suhtes.

### Funktsiooni kohalik import

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // tõene
console.log(areNumerics(b)); // tõene
console.log(areNumerics(c)); // väär
console.log(areNumerics(d)); // väär
console.log(areNumerics(e)); // väär

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areNumerics(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Fail loodi 6 February 2026 at 16:04:50 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>