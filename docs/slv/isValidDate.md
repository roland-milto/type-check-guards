# isValidDate

## Opis

`isValidDate` preveri, ali je dana vrednost veljaven objekt `Date`, in vrne `true` samo za prave, ne-neveljavne datume.

### Primer uporabe

Validirajte uporabniški vnos ali podatke iz API-ja, ki lahko vsebujejo datume, ter zagotovite, da je vrednost pravi
primerek `Date` in ne neveljaven datum, preden izvajate izračune datumov, oblikovanje ali primerjave.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isValidDate` pred klicanjem metod `Date` (npr. `toISOString`, `getTime`) na vrednostih tipa `unknown`, da
> zagotovite, da so veljavni objekti `Date`.

### Prednosti

- Zagotavlja, da je vrednost primerek `Date` in ne le datumu podoben niz ali število.
- Zavrne neveljavne datume (npr. `new Date("invalid")`) s preverjanjem časovnih vrednosti `NaN`.
- Preprosta logična zaščita (boolean guard), ki jo je enostavno uporabiti v pogojih in validacijskih cevovodih.
- Pomaga preprečiti napake med izvajanjem pri klicanju datumskih metod, saj najprej preveri vhod.

## Uporaba

### Skladnja

Funkcija:

- `isValidDate(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input je veljaven primerek Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // napačno
console.log(isValidDate("2025-12-22")); // napačno
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isValidDate(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 16:52:46 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>