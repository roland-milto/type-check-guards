# areFloats

## Kirjeldus

`areFloats` kontrollib, kas antud massiiv on täidetud ja kõik selle elemendid on ujukomaarvud.

### Kasutusjuht

Kasuta `areFloats`-i siis, kui saad `unknown[]` (nt JSON-ist, päringuparameetritest või välistest API-dest) ja pead
veenduma, et see on täidetud massiiv, kus iga element on ujukomaarv, enne kui käivitad numbriloogika, nagu
keskmistamine, interpolatsioon või statistilised arvutused.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areFloats`-i `unknown[]` kaitsmiseks enne, kui käsitled seda kui `number[]`, mis sisaldab ainult ujukomaarve;
> see tagastab `false` tühjade massiivide ja mis tahes mitte-ujukomaarvulise elemendi korral.

### Eelised

- Tagastab `true` ainult siis, kui sisend on mittetühi massiiv ja iga element on ujukomaarv.
- Ebaõnnestub kiiresti: tagastab `false` niipea, kui leitakse element, mis ei ole ujukomaarv.
- Aitab valideerida tundmatut sisendit enne ujukomaarvudele spetsiifiliste arvutuste tegemist.

## Kasutus

### Süntaks

Funktsioon:

- `areFloats(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollida ujukomaarvuliste elementide suhtes.

### Funktsiooni kohalik import

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // tõene
console.log(areFloats(b)); // väär
console.log(areFloats(c)); // väär

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areFloats(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Fail loodi 30 January 2026 at 15:57:09 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>