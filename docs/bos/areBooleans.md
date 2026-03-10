# areBooleans

## Opis

`areBooleans` provjerava da li dati neprazan niz sadrži samo booleanske vrijednosti, vraćajući `true` ako je tako i
`false` u suprotnom.

### Slučaj upotrebe

Validirajte podatke koje je dostavio korisnik ili eksterni izvori (npr. JSON payloadovi, parametri upita,
konfiguracijski nizovi) kako biste osigurali da neprazna lista sadrži samo booleanske vrijednosti prije primjene
booleanske logike ili prosljeđivanja API-jima koji očekuju `boolean[]`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areBooleans` da validirate `unknown[]` prije nego što ga tretirate kao `boolean[]`; vraća `false` za prazne
> nizove, pa taj slučaj eksplicitno obradite ako bi prazna lista trebala biti dozvoljena.

### Prednosti

- Vraća `true` samo kada je svaki element booleanski i kada je ulaz neprazan niz.
- Sprječava lažno pozitivne rezultate odbacivanjem praznih nizova (vraća `false`).
- Dobro služi kao runtime zaštita prije operacija koje rade samo s booleans (npr. `every`, `some`, logičke redukcije).

## Upotreba

### Sintaksa

Funkcija:

- `areBooleans(array)`

Parametri:

- `array`: Niz koji se provjerava da li sadrži booleanske elemente.

### Lokalni uvoz funkcije

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areBooleans(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 14:39:26 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>