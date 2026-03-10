# isDecimal

## Kirjeldus

`isDecimal` kontrollib, kas väärtus on kümnendstringi esitus ilma alguse/lõpu tühikuteta ja kehtiva kümnendvorminguga.

### Kasutusjuht

Valideeri vormivälju, API payload’e või konfiguratsiooniväärtusi, mis peavad olema esitatud kümnendstringina (
valikuliselt märgiga) ilma ümbritsevate tühikuteta, enne parsimist või salvestamist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isDecimal` kasutaja sisendi valideerimiseks enne selle teisendamist (nt `Number(value)` abil), eriti kui
> tühikud tuleb tagasi lükata.

### Eelised

- Valideerib rangelt, et sisend on string ja vastab kümnendliteraali mustrile.
- Lükkab tagasi alguses ja lõpus oleva tühiku (sh juhtmärgid), et vältida mitmetimõistetavat parsimist.
- Teeb kiired eelkontrollid (tüübi kontroll ja esimese/viimase märgi kontroll) enne regexi käivitamist.
- Tagastab lihtsa tõeväärtuse (`true`/`false`), mis sobib kaitseteks (guards) ja sisendi valideerimiseks.

## Kasutus

### Süntaks

Funktsioon:

- `isDecimal(value)`

Parameetrid:

- `value`: Väärtus, mida kontrollida kümnendstringi vormingu suhtes.

### Funktsiooni kohalik import

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v on siin string (käitusajal valideeritud)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isDecimal(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Fail loodi 31 January 2026 at 15:52:04 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>