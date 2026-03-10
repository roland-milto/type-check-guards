# areErrors

## Opis

Provjerava je li niz neprazan i sadrži samo objekte tipa `Error`, vraćajući `true` ili `false`.

### Slučaj uporabe

Provjerite da je u izvođenju dostavljeni `unknown[]` (npr. agregirani neuspjesi, rezultati validacije ili
deserializirani podaci) neprazan popis objekata tipa `Error` prije iteriranja, zapisivanja u log ili ponovnog bacanja.

> **Napomena za TypeScript korisnike:**
>
> `areErrors` vraća `true` samo za popunjeni niz u kojem je svaka stavka instanca `Error`; vraća `false` za prazan niz
> ili ako bilo koji element nije `Error`.

### Prednosti

- Osigurava da je svaki element instanca `Error`, što omogućuje sigurno rukovanje pogreškama i zapisivanje u log.
- Odbacuje prazne nizove, sprječavajući da se slučajna stanja „bez pogrešaka” tretiraju kao valjani popisi pogrešaka.
- Dobro funkcionira kao zaštita u izvođenju pri radu s ulazima tipa `unknown[]` (npr. iz API-ja ili `catch` blokova).

## Uporaba

### Sintaksa

Funkcija:

- `areErrors(array)`

Parametri:

- `array`: Niz koji se provjerava na objekte tipa `Error`.

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areErrors(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 12:33:50 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>