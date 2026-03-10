# isOneOfType

## Opis

`isOneOfType` određuje da li se dati `value` podudara s barem jednim od ponuđenih stringova tipa, vraćajući `true` ako
je pronađeno bilo kakvo podudaranje, a `false` u suprotnom.

### Slučaj upotrebe

Validirajte labavo tipizirane ili eksterne podatke (npr. parsirani JSON, parametri upita) tako što dopuštate više
prihvatljivih runtime tipova (kao što su `number` ili `string`) prije nastavka s daljom logikom.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isOneOfType` kada želite provjeru u runtime-u da se vrijednost podudara s bilo kojim od nekoliko
> dozvoljenih tipova; vraća `true` ako se barem jedan tip podudara, inače `false`.

### Prednosti

- Provjerava vrijednost u odnosu na više dozvoljenih tipova u jednom pozivu, vraćajući `true` pri prvom podudaranju.
- Radi s ulazima tipa `unknown`, što ga čini korisnim na granicama izvršavanja (npr. eksterni podaci, korisnički unos).
- Jednostavan booleanski rezultat (`true`/`false`) koji se dobro uklapa s uslovnom logikom i ranim povratima.

## Upotreba

### Sintaksa

Funkcija:

- `isOneOfType(value, types)`

Parametri:

- `value`: Vrijednost koju treba provjeriti u odnosu na navedene tipove.
- `types`: Niz stringova tipova koji predstavljaju potencijalne tipove vrijednosti.

### Lokalni uvoz funkcije

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input je objekat u vrijeme izvršavanja
}

console.log(isOneOfType(3, ["number", "string"])); // tačno
console.log(isOneOfType("hello", ["number", "boolean"])); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isOneOfType(value, types)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 23:42:33 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>