# isOctal

## Opis

Određuje je li vrijednost valjan string oktalnog literala (npr. `0o755`).

### Slučaj uporabe

Validirajte korisnički unos ili konfiguracijske vrijednosti koje moraju biti izražene kao string oktalnog literala (na
primjer, načini dozvola datoteka poput `0o644`) prije parsiranja ili pretvaranja.

> **Napomena za TypeScript korisnike:**
>
> `isOctal` je čuvar tipa (`value is string`). Nakon rezultata `true`, TypeScript sužava provjerenu varijablu na
`string`.

### Prednosti

- Pruža strogu provjeru tipa: vraća `true` samo kada je ulaz string koji odgovara formatu oktalnog literala.
- Odbacuje prazne stringove i stringove s vodećim/završnim razmacima (ASCII kontrolni znakovi/razmak), smanjujući
  slučajna podudaranja.
- Podržava opcionalni predznak i ne razlikuje velika/mala slova za prefiks `0o`/`0O`.
- Tolerantno postupa s ulazima koji nisu string tako da vraća `false` umjesto bacanja iznimke.

## Uporaba

### Sintaksa

Funkcija:

- `isOctal(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // istina
console.log(isOctal(b)); // istina
console.log(isOctal(c)); // netočno
console.log(isOctal(d)); // netočno

if (isOctal(a)) {
  // a je ovdje string
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isOctal(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 15:41:27 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>