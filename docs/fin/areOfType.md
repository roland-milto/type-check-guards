# areOfType

## Kuvaus

Tarkistaa, ovatko kaikki annetun `array`-taulukon alkiot määritettyä `type`-tyyppiä.

### Käyttötapaus

Käytä `areOfType`-funktiota tuntemattoman syötteen (esim. jäsennetty JSON, API-payloadit, käyttäjän syöte) validoimiseen
ennen kuin suoritat tyyppikohtaisia operaatioita taulukon jokaiselle alkiolle.

> **Huomautus TypeScript-käyttäjille:**
>
> Koska `areOfType` on tyyppivartija, TypeScript kaventaa taulukon `if (areOfType(...)) {}` -lohkon sisällä muotoon
`Array<DataTypeOf<T>>`.

### Edut

- Tarjoaa TypeScript-tyyppivartijan: kun se palauttaa `true`, syöte kaventuu muotoon `Array<DataTypeOf<T>>`.
- Validoi jokaisen alkion pyydettyä ajonaikaista tyyppiä vasten, estäen sekoitetun tyyppiset taulukot pääsemästä läpi.
- Epäonnistuu nopeasti: palauttaa `false` heti, kun löytyy alkio, joka ei täsmää.
- Hylkää ei-taulukot ja tyhjät taulukot suunnitellusti (riippuu `isFilledArray`-funktiosta).

## Käyttö

### Syntaksi

Funktio:

- `areOfType(array, type)`

Parametrit:

- `array`: Tarkistettava taulukko.
- `type`: Tyyppi, jota vasten taulukon jokainen alkio tarkistetaan.

### Funktion paikallinen tuonti

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values on nyt number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areOfType(array, type)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 17:09:26 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>