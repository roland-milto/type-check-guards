# areNumbers

## Kirjeldus

`areNumbers` kontrollib, kas väärtus on mittetühi massiiv, mille kõik elemendid on arvud.

### Kasutusjuht

Valideeri kasutaja või API poolt edastatud andmed, et tagada, et tegu on mittetühja arvude massiiviga enne summade,
keskmiste või muude arvuliste koonduste arvutamist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areNumbers` tundmatute massiivide valideerimiseks enne arvuliste arvutuste tegemist; see tagastab `false`
> tühjade massiivide korral ja massiivide korral, mis sisaldavad mõnda mittearvulist väärtust.

### Eelised

- Tagastab `true` ainult siis, kui sisend on mittetühi massiiv ja iga element on arv.
- Väldib valepositiivseid tulemusi, lükates tagasi tühjad massiivid ja mittemassiivi sisendid.
- Kasulik kaitsemehhanismina enne arvulisi toiminguid (nt summeerimine, keskmistamine), et vältida käitusaja vigu.

## Kasutus

### Süntaks

Funktsioon:

- `areNumbers(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse arvuliste elementide suhtes.

### Funktsiooni kohalik import

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areNumbers(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Fail loodi 30 January 2026 at 13:04:05 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>