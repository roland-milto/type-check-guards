# areWeakSets

## Opis

Provjerava da li je ulaz neprazan niz u kojem je svaki element `WeakSet`, vraćajući `true` samo u tom slučaju.

### Slučaj upotrebe

Validirajte ulaz u runtime-u (npr. iz API-ja, konfiguracije ili podataka koje je dostavio korisnik) kako biste osigurali
da imate nepraznu listu instanci `WeakSet` prije nastavka s logikom koja zavisi od ponašanja `WeakSet`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areWeakSets` za validaciju nepoznatog ulaza prije nego što ga tretirate kao `WeakSet[]`. Vraća `false` za
> prazne nizove i za vrijednosti koje nisu nizovi.

### Prednosti

- Osigurava da je svaki element u ulaznom nizu `WeakSet`.
- Vraća `false` za prazne nizove, sprječavajući slučajne rezultate tipa „sve je ispravno” kada podaci nedostaju.
- Sigurno ne uspijeva tako što vraća `false` kada ulaz nije popunjen niz (uključujući `null`).
- Korisno kao provjera prije izvođenja operacija koje zahtijevaju instance `WeakSet`.

## Upotreba

### Sintaksa

Funkcija:

- `areWeakSets(array)`

Parametri:

- `array`: Niz koji treba provjeriti na `WeakSet` objekte.

### Lokalni uvoz funkcije

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a je neprazan niz instanci WeakSet
}

console.log(areWeakSets(a)); // tačno
console.log(areWeakSets(b)); // netačno
console.log(areWeakSets(c)); // netačno
console.log(areWeakSets(null as unknown)); // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areWeakSets(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 14:07:50 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>