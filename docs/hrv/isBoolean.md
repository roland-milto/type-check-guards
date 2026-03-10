# isBoolean

## Opis

Određuje je li zadana vrijednost tipa `boolean`.

### Slučaj uporabe

Provjerite vanjske ili netipizirane podatke (npr. varijable okruženja, JSON payloadove, parametre upita) kako biste
osigurali da je vrijednost tipa `boolean` prije korištenja u uvjetnoj logici.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isBoolean` kako biste suzili `unknown` na `boolean` prije primjene boolean operacija.

### Prednosti

- Jednostavna i brza provjera u izvođenju pomoću `typeof`.
- Pomaže provjeriti nepoznati ulaz prije logike specifične za booleane.
- Vraća predvidljiv rezultat tipa `boolean` (`true`/`false`).

## Uporaba

### Sintaksa

Funkcija:

- `isBoolean(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isBoolean(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 14:36:30 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>