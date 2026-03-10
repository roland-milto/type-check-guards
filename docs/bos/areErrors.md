# areErrors

## Opis

Provjerava da li niz nije prazan i sadrži samo `Error` objekte, vraćajući `true` ili `false`.

### Slučaj upotrebe

Validirajte da je runtime-dostavljeni `unknown[]` (npr. agregirani neuspjesi, rezultati validacije ili deserijalizirani
podaci) neprazna lista `Error` objekata prije iteriranja, logovanja ili ponovnog bacanja.

> **Napomena za TypeScript korisnike:**
>
> `areErrors` vraća `true` samo za popunjen niz u kojem je svaka stavka `Error`; vraća `false` za prazan niz ili ako
> bilo koji element nije `Error`.

### Prednosti

- Osigurava da je svaki element instanca `Error`, omogućavajući sigurno rukovanje greškama i logovanje.
- Odbacuje prazne nizove, sprječavajući da se slučajna stanja „bez grešaka” tretiraju kao važeće liste grešaka.
- Dobro funkcioniše kao runtime zaštita pri radu s ulazima tipa `unknown[]` (npr. iz API-ja ili `catch` blokova).

## Upotreba

### Sintaksa

Funkcija:

- `areErrors(array)`

Parametri:

- `array`: Niz koji se provjerava na `Error` objekte.

### Lokalni uvoz funkcije

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value je neprazan niz objekata Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areErrors(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 12:32:53 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>