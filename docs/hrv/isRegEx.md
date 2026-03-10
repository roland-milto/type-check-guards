# isRegEx

## Opis

Utvrđuje je li zadana vrijednost instanca `RegExp`.

### Slučaj uporabe

Validirajte vrijednosti koje pruža korisnik ili dinamičke vrijednosti (npr. konfiguracija, payloadovi API-ja, ulazi
dodataka) prije nego što ih tretirate kao regularni izraz.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isRegEx` za sužavanje vrijednosti tipa `unknown` (ili unije) prije korištenja svojstava ili metoda
> specifičnih za RegExp; vraća `true` samo za vrijednosti koje su instance `RegExp`.

### Prednosti

- Pruža jednostavnu runtime provjeru tipa (type guard) za utvrđivanje je li vrijednost `RegExp`.
- Pomaže spriječiti pogreške kada kod očekuje regularni izraz (npr. prije pozivanja `test`, `exec` ili čitanja
  `source`).
- Radi i s regex literalima i s instancama stvorenima putem `new RegExp(...)`.
- Vraća jasan booleovski rezultat (`true`/`false`) bez bacanja iznimke za ulaze koji nisu regex.

## Uporaba

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isRegEx(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 23:29:33 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>