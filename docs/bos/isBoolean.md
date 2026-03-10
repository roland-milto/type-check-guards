# isBoolean

## Opis

Određuje da li je data vrijednost tipa `boolean`.

### Slučaj upotrebe

Validirajte eksterne ili netipizirane podatke (npr. varijable okruženja, JSON payloadove, query parametre) kako biste
osigurali da je vrijednost tipa `boolean` prije nego što je koristite u uslovnoj logici.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isBoolean` da suzite `unknown` na `boolean` prije primjene boolean operacija.

### Prednosti

- Jednostavna i brza provjera u runtime-u koristeći `typeof`.
- Pomaže u validaciji nepoznatog unosa prije logike specifične za boolean.
- Vraća predvidljiv `boolean` rezultat (`true`/`false`).

## Upotreba

### Sintaksa

Funkcija:

- `isBoolean(value)`

Parametri:

- `value`: Vrijednost koja se provjerava.

### Lokalni uvoz funkcije

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input je ovdje boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isBoolean(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 14:35:46 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>