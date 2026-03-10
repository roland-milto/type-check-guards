# isFalse

## Kuvaus

`isFalse` tarkistaa, onko annettu arvo tiukasti yhtä suuri kuin boolean-literaali `false`.

### Käyttötapaus

Validoi tuntematonta dataa (esim. JSONista, kyselyparametreista tai käyttäjän syötteestä), jossa vain eksplisiittinen
boolean-arvo `false` tulee käsitellä kelvollisena lippuna ja kaikki muu tulee hylätä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isFalse`-funktiota, kun sinun täytyy hyväksyä vain literaali `false` ja hylätä kaikki muut epätoset arvot; se
> palauttaa `true` vain tapauksessa `value === false`.

### Edut

- Tarjoaa tiukan tarkistuksen boolean-literaalille `false` ilman tyyppimuunnosta.
- Auttaa erottamaan `false` muista epätosista arvoista, kuten `0`, `""`, `null` ja `undefined`.
- Parantaa luettavuutta tekemällä tarkoituksen selväksi tuntematonta syötettä validoitaessa.

## Käyttö

### Syntaksi

Funktio:

- `isFalse(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input on tässä täsmälleen false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isFalse(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 16:21:31 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>