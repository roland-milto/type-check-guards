# areNumbers

## Opis

`areNumbers` provjerava da li je vrijednost neprazan niz u kojem su svi elementi brojevi.

### Slučaj upotrebe

Validirajte podatke koje pruža korisnik ili API kako biste osigurali da su neprazan niz brojeva prije izračunavanja
ukupnih vrijednosti, prosjeka ili drugih numeričkih agregacija.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areNumbers` za validaciju nepoznatih nizova prije izvođenja numeričkih izračuna; vraća `false` za prazne
> nizove i za nizove koji sadrže bilo koju vrijednost koja nije broj.

### Prednosti

- Vraća `true` samo kada je ulaz neprazan niz i svaki element je broj.
- Sprječava lažno pozitivne rezultate odbacivanjem praznih nizova i ulaza koji nisu nizovi.
- Korisno kao zaštitna provjera prije numeričkih operacija (npr. zbrajanje, izračun prosjeka) kako bi se izbjegle greške
  tokom izvršavanja.

## Upotreba

### Sintaksa

Funkcija:

- `areNumbers(array)`

Parametri:

- `array`: Niz koji se provjerava da li sadrži numeričke elemente.

### Lokalni uvoz funkcije

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areNumbers(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 13:03:36 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>