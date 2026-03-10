# isNumeric

## Kuvaus

`isNumeric` määrittää, pidetäänkö annettua `value`-arvoa numeerisena tarkistamalla sen ratkaistun tyypin `NUMERIC_TYPES`
-määrittelyä vasten.

### Käyttötapaus

Käytä `isNumeric`-funktiota syötteiden (esim. API-payloadit, lomakearvot, konfiguraatio) validointiin ennen numeeristen
operaatioiden suorittamista sekä numeerisen kaltaisten tyyppien (kuten `BigInt`) johdonmukaiseen hyväksymiseen
`NUMERIC_TYPES`-määrittelyn mukaisesti.

> **Huomautus TypeScript-käyttäjille:**
>
> `isNumeric` on totuusarvon palauttava predikaatti; käsittele sitä ajonaikaisena tarkistuksena sille, kuuluuko arvo
> kirjaston määrittelemään numeeristen tyyppien joukkoon.

### Edut

- Käyttää `getTypeOf`-funktiota yhdessä `NUMERIC_TYPES`-määrittelyn kanssa keskittääkseen numeerisen tunnistuksen
  logiikan ja pitääkseen tarkistukset yhdenmukaisina koko koodipohjassa.
- Palauttaa yksinkertaisen totuusarvon (`true`/`false`) helppoa haarautumista ja guard-tyylistä käyttöä varten.
- Tukee useita numeerisia esitysmuotoja (esim. `number`, `BigInt`) `NUMERIC_TYPES`-määrittelyn mukaisesti.

## Käyttö

### Syntaksi

Funktio:

- `isNumeric(value)`

Parametrit:

- `value`: Arvo, jonka numeerinen tyyppi tarkistetaan.

### Funktion paikallinen tuonti

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v katsotaan numeeriseksi kirjaston tyyppisääntöjen mukaan
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isNumeric(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 15:52:31 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>