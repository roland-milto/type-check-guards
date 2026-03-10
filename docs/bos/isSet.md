# isSet

## Opis

Utvrđuje da li je data vrijednost `Set`.

### Slučaj upotrebe

Validirajte ulaze iz eksternih izvora (npr. parsiranje JSON-a, korisnički unos ili API-ji trećih strana) kako biste
osigurali da je vrijednost `Set` prije izvođenja `Set` operacija.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isSet` da suzite `unknown` vrijednosti prije pozivanja API-ja specifičnih za `Set`, kao što su `.add`,
`.has` ili `.size`.

### Prednosti

- Pruža jednostavnu provjeru u runtime-u kako bi se potvrdilo da li je vrijednost `Set`.
- Pomaže u sprječavanju grešaka tipa omogućavajući rano grananje kada vrijednost nije `Set`.
- Radi sa bilo kojim sadržajem `Set`-a (prazan ili popunjen) i dosljedno vraća `true`/`false`.

## Upotreba

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
  // a je Set u vrijeme izvršavanja
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isSet(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isSet](../_analysis/isSet.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 23:09:00 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>