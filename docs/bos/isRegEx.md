# isRegEx

## Opis

Određuje da li je data vrijednost instanca `RegExp`.

### Slučaj upotrebe

Validirajte vrijednosti koje daje korisnik ili dinamičke vrijednosti (npr. konfiguracija, API payloadovi, ulazi
dodataka) prije nego što ih tretirate kao regularni izraz.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isRegEx` da suzite vrijednosti tipa `unknown` (ili unije) prije korištenja svojstava ili metoda specifičnih
> za RegExp; vraća `true` samo za vrijednosti koje su instance `RegExp`.

### Prednosti

- Pruža jednostavan runtime čuvar tipa za provjeru da li je vrijednost `RegExp`.
- Pomaže u sprječavanju grešaka kada kod očekuje regularni izraz (npr. prije pozivanja `test`, `exec` ili čitanja
  `source`).
- Radi i sa regex literalima i sa instancama kreiranim putem `new RegExp(...)`.
- Vraća jasan booleanski rezultat (`true`/`false`) bez bacanja greške za ulaze koji nisu regex.

## Upotreba

### Sintaksa

Funkcija:

- `isRegEx(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input je ovdje RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isRegEx(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 23:28:40 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>