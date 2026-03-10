# areRegExes

## Opis

`areRegExes` provjerava da li je vrijednost popunjen niz koji sadrži samo `RegExp` objekte.

### Slučaj upotrebe

Validirajte da je opcija konfiguracije (npr. lista allow/deny obrazaca) neprazan niz regularnih izraza prije nego što je
upotrijebite za podudaranje.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areRegExes` da suzite `unknown` na `RegExp[]` prije iteriranja ili sastavljanja obrazaca.

### Prednosti

- Osigurava da je vrijednost neprazan niz u kojem je svaki element instanca `RegExp`.
- Pruža jednostavnu booleovsku provjeru (`true`/`false`) za validaciju korisničkog unosa ili konfiguracije.
- Pomaže spriječiti greške u izvođenju kada kasniji kod pretpostavlja da sve stavke podržavaju operacije regularnih
  izraza.

## Upotreba

### Sintaksa

Funkcija:

- `areRegExes(array)`

Parametri:

- `array`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns je ovdje niz RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areRegExes(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 23:16:59 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>