# isPrimitive

## Opis

`isPrimitive` određuje je li zadana vrijednost primitiv (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Slučaj uporabe

Validirajte ulaze u vrijeme izvođenja (npr. polja API payload-a, konfiguracijske vrijednosti ili podatke koje je unio
korisnik) kako biste osigurali da je vrijednost primitiv prije serijalizacije, zapisivanja u log ili primjene operacija
koje vrijede samo za primitive.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isPrimitive` za zaštitu ulaza tipa `unknown` prije nego što ih tretirate kao objekte ili funkcije; vraća
`true` za primitive i `false` za objekte i funkcije.

### Prednosti

- Brza provjera bez alokacija je li vrijednost JavaScript primitiv.
- Ispravno tretira `null` kao primitiv (iako je `typeof null` `"object"`).
- Pomaže suziti vrijednosti tipa `unknown` prije izvođenja operacija koje su namijenjene samo objektima.

## Uporaba

### Sintaksa

Funkcija:

- `isPrimitive(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti je li primitivnog tipa.

### Lokalni uvoz funkcije

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isPrimitive(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 23:56:24 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>