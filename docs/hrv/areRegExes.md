# areRegExes

## Opis

`areRegExes` provjerava je li vrijednost popunjen niz koji sadrži samo objekte `RegExp`.

### Slučaj uporabe

Provjerite da je konfiguracijska opcija (npr. popis allow/deny uzoraka) neprazan niz regularnih izraza prije nego što je
upotrijebite za podudaranje.

> **Napomena za TypeScript korisnike:**
>
> Upotrijebite `areRegExes` kako biste suzili `unknown` na `RegExp[]` prije iteriranja ili sastavljanja uzoraka.

### Prednosti

- Osigurava da je vrijednost neprazan niz u kojem je svaki element instanca `RegExp`.
- Pruža jednostavnu booleovsku provjeru (`true`/`false`) za validaciju korisničkog unosa ili konfiguracije.
- Pomaže spriječiti pogreške u izvođenju kada kasniji kod pretpostavlja da svi elementi podržavaju operacije regularnih
  izraza.

## Uporaba

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
  // patterns je ovdje niz RegExp objekata
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areRegExes(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 23:18:36 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>