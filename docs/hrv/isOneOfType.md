# isOneOfType

## Opis

`isOneOfType` određuje podudara li se zadani `value` s barem jednim od ponuđenih nizova tipova, vraćajući `true` ako je
pronađeno bilo kakvo podudaranje, a `false` u suprotnom.

### Slučaj uporabe

Validirajte labavo tipizirane ili vanjske podatke (npr. parsirani JSON, parametri upita) dopuštajući više prihvatljivih
tipova u izvođenju (kao što su `number` ili `string`) prije nastavka s daljnjom logikom.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isOneOfType` kada želite provjeru u izvođenju da se vrijednost podudara s bilo kojim od nekoliko dopuštenih
> tipova; vraća `true` ako se podudara barem jedan tip, inače `false`.

### Prednosti

- Provjerava vrijednost u odnosu na više dopuštenih tipova u jednom pozivu, vraćajući `true` pri prvom podudaranju.
- Radi s ulazima tipa `unknown`, što ga čini korisnim na granicama izvođenja (npr. vanjski podaci, korisnički unos).
- Jednostavan booleovski rezultat (`true`/`false`) koji se dobro kombinira s uvjetnom logikom i ranim povratima.

## Uporaba

### Sintaksa

Funkcija:

- `isOneOfType(value, types)`

Parametri:

- `value`: Vrijednost koju treba provjeriti u odnosu na navedene tipove.
- `types`: Polje nizova tipova koje predstavljaju moguće tipove vrijednosti.

### Lokalni uvoz funkcije

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input je objekt u vrijeme izvođenja
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isOneOfType(value, types)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 23:43:31 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>