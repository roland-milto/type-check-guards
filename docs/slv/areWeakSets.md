# areWeakSets

## Opis

Preveri, ali je vhod neprazno polje, kjer je vsak element `WeakSet`, in vrne `true` samo v tem primeru.

### Primer uporabe

Preverite vhodne podatke med izvajanjem (npr. iz API-jev, konfiguracije ali podatkov, ki jih posreduje uporabnik), da
zagotovite neprazen seznam primerkov `WeakSet`, preden nadaljujete z logiko, ki je odvisna od vedenja `WeakSet`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areWeakSets` za preverjanje neznanega vhoda, preden ga obravnavate kot `WeakSet[]`. Za prazna polja in
> ne-polja vrne `false`.

### Prednosti

- Zagotavlja, da je vsak element v vhodnem polju `WeakSet`.
- Za prazna polja vrne `false`, s čimer prepreči nenamerne rezultate »vse veljavno« pri manjkajočih podatkih.
- Varno odpove tako, da vrne `false`, ko vhod ni zapolnjeno polje (vključno z `null`).
- Uporabno kot varovalo pred izvajanjem operacij, ki zahtevajo primerke `WeakSet`.

## Uporaba

### Skladnja

Funkcija:

- `areWeakSets(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede objektov `WeakSet`.

### Lokalni uvoz funkcije

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a je neprazno polje primerkov WeakSet
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areWeakSets(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 14:10:47 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>