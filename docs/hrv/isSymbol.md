# isSymbol

## Opis

`isSymbol` određuje je li zadana vrijednost tipa `symbol`, vraćajući `true` za simbole i `false` u suprotnom.

### Slučaj uporabe

Provjerite je li vrijednost tipa `unknown` `symbol` prije nego što je upotrijebite kao jedinstveni identifikator, ključ
registra ili izračunati ključ svojstva u objektima i mapama.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isSymbol` za sužavanje `unknown` na `symbol` prije pozivanja funkcija povezanih sa simbolima ili korištenja
> simbola kao izračunatog ključa svojstva.

### Prednosti

- Pruža jednostavnu i pouzdanu provjeru u izvođenju za JavaScript primitivni tip `symbol`.
- Pomaže suziti vrijednosti tipa `unknown` prije korištenja API-ja specifičnih za simbole ili spremanja simbola kao
  ključeva.
- Izbjegava lažno pozitivne rezultate korištenjem `typeof`, što je kanonski način za otkrivanje vrijednosti tipa
  `symbol`.

## Uporaba

### Sintaksa

Funkcija:

- `isSymbol(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input je ovdje simbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isSymbol(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 14:27:03 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>