# isSymbol

## Opis

`isSymbol` određuje da li je data vrijednost tipa `symbol`, vraćajući `true` za symbole i `false` u suprotnom.

### Slučaj upotrebe

Validirajte da je `unknown` vrijednost `symbol` prije nego što je koristite kao jedinstveni identifikator, ključ
registra ili izračunati ključ svojstva u objektima i mapama.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isSymbol` da suzite `unknown` na `symbol` prije pozivanja funkcija povezanih sa symbolima ili korištenja
> kao izračunatog ključa svojstva.

### Prednosti

- Pruža jednostavnu i pouzdanu provjeru u runtime-u za JavaScript primitivni tip `symbol`.
- Pomaže suziti `unknown` vrijednosti prije korištenja API-ja specifičnih za symbole ili prije pohranjivanja kao
  ključeva.
- Izbjegava lažno pozitivne rezultate korištenjem `typeof`, što je kanonski način za detekciju `symbol` vrijednosti.

## Upotreba

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

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isSymbol(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 14:26:06 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>