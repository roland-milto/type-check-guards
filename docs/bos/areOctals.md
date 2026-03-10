# areOctals

## Opis

`areOctals` određuje da li je data vrijednost neprazan niz važećih oktalnih stringova.

### Slučaj upotrebe

Koristite `areOctals` pri validaciji korisničkog unosa, konfiguracijskih vrijednosti ili API payloadova koji moraju
sadržavati oktalne literale (npr. modovi dozvola datoteka poput `0o755`) i kada želite odbaciti prazne nizove ili bilo
koje nevažeće unose vraćanjem `false`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areOctals` da osigurate da imate neprazan `unknown[]` u kojem je svaki unos važeći oktalni string prije
> konverzije (npr. putem `Number(...)` ili prilagođenog parsiranja).

### Prednosti

- Validira da je vrijednost neprazan niz u kojem je svaki element oktalni string, vraćajući `true` samo kada sve stavke
  prođu provjeru.
- Brzo prekida: vraća `false` čim se pronađe ne-oktalni element.
- Korisno kao zaštita prije parsiranja ili konverzije oktalnih stringova kako bi se izbjegle greške u izvođenju i
  nedosljedno rukovanje ulazom.

## Upotreba

### Sintaksa

Funkcija:

- `areOctals(array)`

Parametri:

- `array`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // vrijednost je neprazan niz oktalnih stringova
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areOctals(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 14:44:12 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>