# areRegExes

## Kirjeldus

`areRegExes` kontrollib, kas väärtus on täidetud massiiv, mis sisaldab ainult `RegExp`-objekte.

### Kasutusjuht

Valideeri, et konfiguratsioonivalik (nt lubamise/keelamise mustrite loend) on mittetühi regulaaravaldiste massiiv enne,
kui kasutad seda sobitamiseks.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areRegExes`, et kitsendada `unknown` tüübiks `RegExp[]` enne iteratsiooni või mustrite koostamist.

### Eelised

- Tagab, et väärtus on mittetühi massiiv, kus iga element on `RegExp`-i eksemplar.
- Pakub lihtsat tõeväärtuslikku kaitset (`true`/`false`) kasutaja sisendi või konfiguratsiooni valideerimiseks.
- Aitab vältida käitusaja vigu, kui hilisem kood eeldab, et kõik üksused toetavad regulaaravaldiste toiminguid.

## Kasutus

### Süntaks

Funktsioon:

- `areRegExes(array)`

Parameetrid:

- `array`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns on siin RegExp massiiv
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areRegExes(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Fail loodi 30 January 2026 at 23:17:47 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>