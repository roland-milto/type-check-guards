# areOneOfType

## Opis

`areOneOfType` provjerava jesu li svi elementi u nepraznom polju jednog od navedenih runtime tipova.

### Slučaj uporabe

Validirajte dolazne podatke (npr. parsirani JSON) gdje polje mora biti neprazno, a stavke ograničene na poznati skup
primitivnih tipova; vratite `false` kada je polje prazno ili sadrži bilo koji nedopušteni tip.

> **Napomena za TypeScript korisnike:**
>
> Ova funkcija vraća boolean i ne sužava tipove elemenata polja u vrijeme kompilacije; koristite je kao korak runtime
> validacije prije daljnje obrade.

### Prednosti

- Osigurava da svaki element u polju odgovara barem jednom dopuštenom runtime tipu, vraćajući `true` samo kada cijelo
  polje prođe provjeru.
- Rano odbacuje nevaljane ulaze: vraća `false` kada je `array` ili `types` prazan ili nije popunjeno polje.
- Korisno za validaciju kolekcija miješanih tipova (npr. brojevi i stringovi) jednim pozivom `areOneOfType`.

## Uporaba

### Sintaksa

Funkcija:

- `areOneOfType(array, types)`

Parametri:

- `array`: Polje elemenata koje treba provjeriti u odnosu na zadane tipove.
- `types`: Polje stringova koje predstavlja tipove podataka prema kojima se provjerava.

### Lokalni uvoz funkcije

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areOneOfType(array, types)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 23:37:04 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>