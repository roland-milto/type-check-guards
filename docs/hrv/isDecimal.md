# isDecimal

## Opis

`isDecimal` provjerava je li vrijednost decimalna reprezentacija u obliku stringa bez vodećih/završnih razmaka i s
valjanim decimalnim formatom.

### Slučaj uporabe

Validirajte polja obrasca, API payloadove ili konfiguracijske vrijednosti koje moraju biti zadane kao decimalni string (
opcionalno s predznakom) bez ikakvih okolnih razmaka, prije parsiranja ili pohrane.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isDecimal` za validaciju korisničkog unosa prije pretvaranja (npr. s `Number(value)`), osobito kada se
> razmaci moraju odbaciti.

### Prednosti

- Strogo provjerava je li ulazni podatak string i odgovara uzorku decimalnog literala.
- Odbacuje vodeće i završne razmake (uključujući kontrolne znakove) kako bi se izbjeglo dvosmisleno parsiranje.
- Brze prethodne provjere (provjera tipa i prvog/zadnjeg znaka) prije pokretanja regularnog izraza.
- Vraća jednostavan booleovski rezultat (`true`/`false`) prikladan za guardove i validaciju unosa.

## Uporaba

### Sintaksa

Funkcija:

- `isDecimal(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti za format decimalnog stringa.

### Lokalni uvoz funkcije

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v je ovdje niz znakova (provjereno tijekom izvođenja)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isDecimal(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 15:52:36 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>