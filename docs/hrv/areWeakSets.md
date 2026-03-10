# areWeakSets

## Opis

Provjerava je li ulaz neprazno polje u kojem je svaki element `WeakSet`, te vraća `true` samo u tom slučaju.

### Slučaj uporabe

Validirajte ulaz u izvođenju (npr. iz API-ja, konfiguracije ili podataka koje daje korisnik) kako biste osigurali da
imate neprazan popis instanci `WeakSet` prije nastavka s logikom koja ovisi o ponašanju `WeakSet`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areWeakSets` za provjeru nepoznatog ulaza prije nego što ga tretirate kao `WeakSet[]`. Vraća `false` za
> prazna polja i vrijednosti koje nisu polja.

### Prednosti

- Osigurava da je svaki element u ulaznom polju `WeakSet`.
- Vraća `false` za prazna polja, sprječavajući slučajne rezultate tipa „sve je valjano” kod nedostajućih podataka.
- Sigurno ne uspijeva tako da vraća `false` kada ulaz nije popunjeno polje (uključujući `null`).
- Korisno kao zaštitna provjera prije izvođenja operacija koje zahtijevaju instance `WeakSet`.

## Uporaba

### Sintaksa

Funkcija:

- `areWeakSets(array)`

Parametri:

- `array`: Polje koje treba provjeriti za objekte `WeakSet`.

### Lokalni uvoz funkcije

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a je neprazan niz instanci WeakSet
}

console.log(areWeakSets(a)); // istina
console.log(areWeakSets(b)); // laž
console.log(areWeakSets(c)); // laž
console.log(areWeakSets(null as unknown)); // laž
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areWeakSets(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 14:08:51 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>