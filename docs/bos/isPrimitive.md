# isPrimitive

## Opis

`isPrimitive` određuje da li je data vrijednost primitiv (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Slučaj upotrebe

Validirajte ulaze u runtime-u (npr. polja API payload-a, konfiguracijske vrijednosti ili podatke koje je korisnik unio)
kako biste osigurali da je vrijednost primitiv prije serijalizacije, logovanja ili primjene operacija koje važe samo za
primitive.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isPrimitive` da zaštitite `unknown` ulaze prije nego što ih tretirate kao objekte ili funkcije; vraća
`true` za primitive i `false` za objekte i funkcije.

### Prednosti

- Brza provjera bez alokacija da li je vrijednost JavaScript primitiv.
- Ispravno tretira `null` kao primitiv (iako je `typeof null` `"object"`).
- Pomaže suziti `unknown` vrijednosti prije izvođenja operacija koje važe samo za objekte.

## Upotreba

### Sintaksa

Funkcija:

- `isPrimitive(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti da li je primitivnog tipa.

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

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isPrimitive(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 23:55:35 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>