# isString

## Opis

`isString` određuje je li zadana vrijednost string.

### Slučaj uporabe

Provjerite korisnički unos, polja API payload-a ili konfiguracijske vrijednosti u runtimeu kako biste osigurali da je
vrijednost string prije primjene string operacija (npr. trimanje, splitanje, promjena veličine slova).

> **Napomena za TypeScript korisnike:**
>
> Koristite `isString` za provjeru vrijednosti tipa `unknown` ili labavo tipiziranih vrijednosti prije pozivanja string
> metoda; vraća `true` samo kada `typeof value === "string"`.

### Prednosti

- Jednostavna i brza provjera pomoću `typeof`.
- Vraća predvidljiv booleovski rezultat: `true` za stringove, inače `false`.
- Radi i za prazne i za neprazne stringove.
- Korisno kao lagana runtime zaštita prije izvođenja operacija specifičnih za string.

## Uporaba

### Sintaksa

Funkcija:

- `isString(value)`

Parametri:

- `value`: Vrijednost koju treba testirati je li tipa string.

### Lokalni uvoz funkcije

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input je ovdje niz znakova
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isString(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isString](../_analysis/isString.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 13:14:10 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>