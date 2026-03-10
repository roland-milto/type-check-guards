# isNumeric

## Opis

`isNumeric` određuje da li se dati `value` smatra numeričkim tako što provjerava njegov razriješeni tip u odnosu na
`NUMERIC_TYPES`.

### Slučaj upotrebe

Koristite `isNumeric` za validaciju ulaza (npr. API payloadovi, vrijednosti iz formi, konfiguracija) prije izvođenja
numeričkih operacija, te za dosljedno prihvatanje numeričkih tipova (kao što je `BigInt`) u skladu s `NUMERIC_TYPES`.

> **Napomena za TypeScript korisnike:**
>
> `isNumeric` je predikat koji vraća boolean; tretirajte ga kao runtime provjeru da li vrijednost pripada skupu
> numeričkih tipova definisanom u biblioteci.

### Prednosti

- Koristi `getTypeOf` zajedno s `NUMERIC_TYPES` kako bi centralizirao logiku detekcije numeričkih tipova i održao
  provjere dosljednim kroz cijelu bazu koda.
- Vraća jednostavan boolean (`true`/`false`) za lako grananje i upotrebu u stilu guard provjera.
- Podržava više numeričkih reprezentacija (npr. `number`, `BigInt`) kako je definisano u `NUMERIC_TYPES`.

## Upotreba

### Sintaksa

Funkcija:

- `isNumeric(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti za numerički tip.

### Lokalni uvoz funkcije

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v se smatra numeričkim prema pravilima tipova biblioteke
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isNumeric(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 15:51:51 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>