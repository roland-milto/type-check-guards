# isDate

## Kuvaus

`isDate` määrittää, onko annettu arvo `Date`, palauttaen `true` `Date`-instansseille ja `false` muussa tapauksessa.

### Käyttötapaus

Validoi ja kavenna tuntemattomat arvot (esim. pyyntödata, konfiguraatioarvot tai jäsennetty JSON) ennen `Date`
-operaatioiden suorittamista, kuten muotoilua, vertailuja tai `toISOString()`-kutsua.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isDate`-funktiota kaventaaksesi `unknown`-tyypin `Date`-tyypiksi ajonaikaisesti; se palauttaa `true` vain
> todellisille `Date`-instansseille (ei päivämäärämerkkijonoille).

### Edut

- Tarjoaa yksinkertaisen ajonaikaisen suojauksen sen varmistamiseksi, onko arvo `Date`.
- Auttaa ehkäisemään tyyppivirheitä varmistamalla, että vain `Date`-instanssit läpäisevät validoinnin.
- Hyödyllinen tuntemattomien syötteiden (esim. API-payloadien) validointiin ennen päivämääräkohtaisien metodien käyttöä.

## Käyttö

### Syntaksi

Funktio:

- `isDate(value)`

Parametrit:

- `value`: Arvo, jonka `Date`-tyyppi tarkistetaan.

### Funktion paikallinen tuonti

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input on tässä Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isDate(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isDate](../_analysis/isDate.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 15:37:16 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>