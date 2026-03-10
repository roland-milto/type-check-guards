# isArray

## Opis

`isArray` provjerava je li zadana vrijednost polje i vraća `true` ako jest, inače `false`.

### Slučaj uporabe

Validirajte nepoznate podatke (npr. parsirani JSON ili API odgovore) kako biste osigurali da je vrijednost polje prije
iteriranja, indeksiranja ili pristupanja `.length`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isArray` kada trebate provjeru polja u runtimeu; vraća booleovu vrijednost i sigurno ga je pozvati s
> vrijednostima tipa `unknown`.

### Prednosti

- Koristi ugrađeni `Array.isArray` za pouzdano otkrivanje polja kroz različite realmove (npr. iframeove).
- Vraća jednostavan booleovski rezultat (`true`/`false`) prikladan za guardove i grananje logike.
- Radi s bilo kojom vrstom ulaza jer je parametar tipa `unknown`.

## Uporaba

### Sintaksa

Funkcija:

- `isArray(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input je polje tijekom izvođenja
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isArray(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isArray](../_analysis/isArray.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 11:30:41 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>