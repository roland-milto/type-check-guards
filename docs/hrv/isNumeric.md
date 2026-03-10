# isNumeric

## Opis

`isNumeric` određuje smatra li se zadana `value` numeričkom tako što provjerava njezin razriješeni tip u odnosu na
`NUMERIC_TYPES`.

### Slučaj uporabe

Koristite `isNumeric` za validaciju ulaza (npr. API payloadova, vrijednosti iz obrazaca, konfiguracije) prije izvođenja
numeričkih operacija te za dosljedno prihvaćanje numerički sličnih tipova (kao što je `BigInt`) prema `NUMERIC_TYPES`.

> **Napomena za TypeScript korisnike:**
>
> `isNumeric` je predikat koji vraća booleovu vrijednost; tretirajte ga kao provjeru u izvođenju (runtime) pripada li
> vrijednost skupu numeričkih tipova definiranom u biblioteci.

### Prednosti

- Koristi `getTypeOf` zajedno s `NUMERIC_TYPES` kako bi se centralizirala logika prepoznavanja numeričkih tipova i kako
  bi provjere bile dosljedne kroz cijelu bazu koda.
- Vraća jednostavnu booleovu vrijednost (`true`/`false`) za lako grananje i korištenje u stilu zaštitnih provjera (
  guard).
- Podržava više numeričkih prikaza (npr. `number`, `BigInt`) kako je definirano u `NUMERIC_TYPES`.

## Uporaba

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isNumeric(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 15:52:49 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>