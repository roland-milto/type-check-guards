# areOctals

## Opis

`areOctals` određuje je li zadana vrijednost neprazan niz valjanih oktalnih stringova.

### Slučaj uporabe

Koristite `areOctals` pri provjeri korisničkog unosa, konfiguracijskih vrijednosti ili API payloadova koji moraju
sadržavati oktalne literale (npr. načine dozvola datoteka poput `0o755`) i želite odbaciti prazne nizove ili bilo koje
nevaljane unose vraćanjem `false`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areOctals` kako biste osigurali da imate neprazan `unknown[]` u kojem je svaki unos valjan oktalni string
> prije pretvaranja (npr. putem `Number(...)` ili prilagođenog parsiranja).

### Prednosti

- Provjerava je li vrijednost neprazan niz u kojem je svaki element oktalni string, vraćajući `true` samo kada sve
  stavke prođu provjeru.
- Brzo prekida: vraća `false` čim se pronađe element koji nije oktalan.
- Korisno kao zaštita prije parsiranja ili pretvaranja oktalnih stringova kako bi se izbjegle pogreške u izvođenju i
  nedosljedno rukovanje ulazom.

## Uporaba

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
  // vrijednost je neprazno polje oktalnih nizova znakova
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areOctals(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 14:56:41 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>