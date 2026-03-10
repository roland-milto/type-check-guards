# isValidDate

## Kuvaus

`isValidDate` tarkistaa, onko annettu arvo kelvollinen `Date`-objekti, ja palauttaa `true` vain oikeille,
ei-virheellisille päivämäärille.

### Käyttötapaus

Validoi käyttäjän syöte tai API-data, joka voi sisältää päivämääriä, varmistaen että arvo on oikea `Date`-instanssi eikä
virheellinen päivämäärä ennen päivämäärälaskentaa, muotoilua tai vertailuja.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isValidDate`-funktiota ennen `Date`-metodien (esim. `toISOString`, `getTime`) kutsumista arvoille, joiden
> tyyppi on `unknown`, jotta varmistat niiden olevan kelvollisia `Date`-objekteja.

### Edut

- Varmistaa, että arvo on `Date`-instanssi eikä pelkästään päivämäärää muistuttava merkkijono tai numero.
- Hylkää virheelliset päivämäärät (esim. `new Date("invalid")`) tarkistamalla `NaN`-aika-arvot.
- Yksinkertainen boolean-tyyppinen tarkistin, jota on helppo käyttää ehtolauseissa ja validointiputkissa.
- Auttaa ehkäisemään ajonaikaisia virheitä kutsuttaessa päivämäärämetodeja varmistamalla syötteen ensin.

## Käyttö

### Syntaksi

Funktio:

- `isValidDate(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input on kelvollinen Date-instanssi
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // epätosi
console.log(isValidDate("2025-12-22")); // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isValidDate(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 16:39:52 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>