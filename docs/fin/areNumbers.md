# areNumbers

## Kuvaus

`areNumbers` tarkistaa, onko arvo ei-tyhjä taulukko, jossa kaikki alkiot ovat numeroita.

### Käyttötapaus

Validoi käyttäjän tai API:n toimittama data varmistaaksesi, että se on ei-tyhjä numerotaulukko ennen summien,
keskiarvojen tai muiden numeeristen aggregointien laskemista.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areNumbers`-funktiota tuntemattomien taulukoiden validointiin ennen numeeristen laskutoimitusten tekemistä; se
> palauttaa `false` tyhjille taulukoille ja taulukoille, jotka sisältävät minkä tahansa ei-numeerisen arvon.

### Edut

- Palauttaa `true` vain silloin, kun syöte on ei-tyhjä taulukko ja jokainen alkio on numero.
- Estää virheelliset osumat hylkäämällä tyhjät taulukot ja ei-taulukkomuotoiset syötteet.
- Hyödyllinen suojana ennen numeerisia operaatioita (esim. summaus, keskiarvon laskeminen) ajonaikaisten virheiden
  välttämiseksi.

## Käyttö

### Syntaksi

Funktio:

- `areNumbers(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan, että alkiot ovat numeroita.

### Funktion paikallinen tuonti

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areNumbers(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 13:04:13 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>