# areOneOfType

## Opis

`areOneOfType` provjerava da li su svi elementi u nepraznom nizu jednog od navedenih runtime tipova.

### Slučaj upotrebe

Validirajte dolazne podatke (npr. parsirani JSON) gdje polje mora biti neprazan niz čije su stavke ograničene na poznati
skup primitivnih tipova; vratite `false` kada je niz prazan ili sadrži bilo koji nedozvoljeni tip.

> **Napomena za TypeScript korisnike:**
>
> Ova funkcija vraća boolean i ne sužava tipove elemenata niza u vrijeme kompajliranja; koristite je kao korak runtime
> validacije prije daljnje obrade.

### Prednosti

- Osigurava da svaki element u nizu odgovara barem jednom dozvoljenom runtime tipu, vraćajući `true` samo kada cijeli
  niz prođe provjeru.
- Rano odbacuje nevažeće ulaze: vraća `false` kada je `array` ili `types` prazan ili nije popunjen niz.
- Korisno za validaciju kolekcija miješanih tipova (npr. brojevi i stringovi) jednim pozivom funkcije `areOneOfType`.

## Upotreba

### Sintaksa

Funkcija:

- `areOneOfType(array, types)`

Parametri:

- `array`: Niz elemenata koje treba provjeriti u odnosu na navedene tipove.
- `types`: Niz stringova koji predstavljaju tipove podataka prema kojima se vrši provjera.

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

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areOneOfType(array, types)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 23:36:10 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>