# areOctals

## Kirjeldus

`areOctals` määrab, kas antud väärtus on mittetühi kehtivate kaheksandsüsteemi stringide massiiv.

### Kasutusjuht

Kasuta `areOctals` kasutajasisendi, konfiguratsiooniväärtuste või API päringuandmete valideerimisel, mis peavad
sisaldama kaheksandsüsteemi literaale (nt faililubade režiimid nagu `0o755`), ning kui soovid tühjad massiivid või mis
tahes vigased kirjed tagasi lükata, tagastades `false`.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areOctals`, et veenduda, et sul on mittetühi `unknown[]`, kus iga kirje on kehtiv kaheksandsüsteemi string,
> enne teisendamist (nt `Number(...)` või kohandatud parsimise kaudu).

### Eelised

- Kontrollib, et väärtus on mittetühi massiiv, kus iga element on kaheksandsüsteemi string, tagastades `true` ainult
  siis, kui kõik elemendid läbivad kontrolli.
- Ebaõnnestub kiiresti: tagastab `false` niipea, kui leitakse mitte-kaheksandsüsteemi element.
- Kasulik kaitsemehhanismina enne kaheksandsüsteemi stringide parsimist või teisendamist, et vältida käitusaja vigu ja
  ebaühtlast sisendi käsitlemist.

## Kasutus

### Süntaks

Funktsioon:

- `areOctals(array)`

Parameetrid:

- `array`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value on mittetühi kaheksandsüsteemi stringide massiiv
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areOctals(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:44:51 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>