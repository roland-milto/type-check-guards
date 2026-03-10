# isDecimal

## Opis

`isDecimal` provjerava da li je vrijednost decimalna reprezentacija u obliku stringa bez vodećih/završnih razmaka i s
važećim decimalnim formatom.

### Slučaj upotrebe

Validirajte polja formulara, API payloadove ili konfiguracijske vrijednosti koje moraju biti navedene kao decimalni
string (opcionalno sa znakom) bez ikakvih okolnih razmaka, prije parsiranja ili pohranjivanja.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isDecimal` za validaciju korisničkog unosa prije konverzije (npr. pomoću `Number(value)`), posebno kada
> razmaci moraju biti odbačeni.

### Prednosti

- Strogo provjerava da je ulaz string i da odgovara obrascu decimalnog literala.
- Odbacuje vodeće i završne razmake (uključujući kontrolne znakove) kako bi se izbjeglo dvosmisleno parsiranje.
- Brze prethodne provjere (provjera tipa i prvog/zadnjeg znaka) prije pokretanja regexa.
- Vraća jednostavan booleanski rezultat (`true`/`false`) pogodan za guardove i validaciju unosa.

## Upotreba

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
    // v je ovdje string (provjereno u toku izvršavanja)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isDecimal(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 15:51:30 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>