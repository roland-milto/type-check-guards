# areBooleans

## Opis

`areBooleans` provjerava sadrži li zadani neprazan niz samo booleove vrijednosti, vraćajući `true` ako sadrži, a `false`
u suprotnom.

### Slučaj uporabe

Provjerite podatke koje pruža korisnik ili vanjski izvori (npr. JSON payloadovi, parametri upita, konfiguracijski
nizovi) kako biste osigurali da neprazan popis sadrži samo booleove prije primjene booleove logike ili prosljeđivanja
API-jima koji očekuju `boolean[]`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areBooleans` za provjeru `unknown[]` prije nego što ga tretirate kao `boolean[]`; vraća `false` za prazne
> nizove, pa taj slučaj obradite eksplicitno ako bi prazan popis trebao biti dopušten.

### Prednosti

- Vraća `true` samo kada je svaki element booleov i ulaz je neprazan niz.
- Sprječava lažno pozitivne rezultate odbacivanjem praznih nizova (vraća `false`).
- Dobro funkcionira kao zaštita u izvođenju prije operacija koje rade samo s booleovima (npr. `every`, `some`, logičke
  redukcije).

## Uporaba

### Sintaksa

Funkcija:

- `areBooleans(array)`

Parametri:

- `array`: Niz koji treba provjeriti sadrži li booleove elemente.

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areBooleans(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 14:40:31 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>