# isSet

## Opis

Određuje je li zadana vrijednost `Set`.

### Slučaj uporabe

Validirajte ulaze iz vanjskih izvora (npr. parsiranje JSON-a, korisnički unos ili API-ji trećih strana) kako biste
osigurali da je vrijednost `Set` prije izvođenja `Set` operacija.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isSet` za sužavanje vrijednosti tipa `unknown` prije pozivanja API-ja specifičnih za `Set`, kao što su
`.add`, `.has` ili `.size`.

### Prednosti

- Pruža jednostavnu provjeru u izvođenju kako bi se potvrdilo je li vrijednost `Set`.
- Pomaže spriječiti pogreške tipova omogućujući rano grananje kada vrijednost nije `Set`.
- Radi s bilo kojim sadržajem `Set`-a (prazan ili popunjen) i dosljedno vraća `true`/`false`.

## Uporaba

### Sintaksa

Funkcija:

- `isSet(value)`

Parametri:

- `value`: Vrijednost za provjeru.

### Lokalni uvoz funkcije

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a je Set tijekom izvođenja
  console.log(a.size);
}

console.log(isSet(b)); // netočno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isSet(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isSet](../_analysis/isSet.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 23:09:49 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>