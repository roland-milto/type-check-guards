# areFloats

## Opis

`areFloats` preveri, ali je dano polje zapolnjeno in ali so vsi njegovi elementi števila s plavajočo vejico.

### Primer uporabe

Uporabite `areFloats`, ko prejmete `unknown[]` (npr. iz JSON, parametrov poizvedbe ali zunanjih API-jev) in morate
zagotoviti, da gre za zapolnjeno polje, kjer je vsak element število s plavajočo vejico, preden zaženete numerično
logiko, kot so povprečenje, interpolacija ali statistični izračuni.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areFloats` kot varovalo za `unknown[]`, preden ga obravnavate kot `number[]`, ki vsebuje samo števila s
> plavajočo vejico; vrne `false` za prazna polja in za vsak element, ki ni število s plavajočo vejico.

### Prednosti

- Vrne `true` samo, ko je vhod neprazno polje in je vsak element število s plavajočo vejico.
- Hitro odpove: vrne `false` takoj, ko najde element, ki ni število s plavajočo vejico.
- Pomaga preveriti neznan vhod, preden izvedete izračune, specifične za števila s plavajočo vejico.

## Uporaba

### Skladnja

Funkcija:

- `areFloats(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede elementov s plavajočo vejico.

### Lokalni uvoz funkcije

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // res
console.log(areFloats(b)); // napačno
console.log(areFloats(c)); // napačno

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areFloats(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 15:59:34 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>