# isRegEx

## Kuvaus

Määrittää, onko annettu arvo `RegExp`-instanssi.

### Käyttötapaus

Validoi käyttäjän antamat tai dynaamiset arvot (esim. konfiguraatio, API-payloadit, lisäosien syötteet) ennen kuin
käsittelet niitä säännöllisenä lausekkeena.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isRegEx`-funktiota `unknown`- (tai union-) arvojen tarkentamiseen ennen RegExp-kohtaisten ominaisuuksien tai
> metodien käyttöä; se palauttaa `true` vain arvoille, jotka ovat `RegExp`-instansseja.

### Edut

- Tarjoaa yksinkertaisen ajonaikaisen tyyppivartijan, jolla voidaan tarkistaa, onko arvo `RegExp`.
- Auttaa ehkäisemään virheitä, kun koodi odottaa säännöllistä lauseketta (esim. ennen `test`- tai `exec`-kutsua tai
  `source`-ominaisuuden lukemista).
- Toimii sekä regex-literaalien että `new RegExp(...)`-kutsulla luotujen instanssien kanssa.
- Palauttaa selkeän boolean-tuloksen (`true`/`false`) heittämättä poikkeusta ei-regex-syötteille.

## Käyttö

### Syntaksi

Funktio:

- `isRegEx(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input on tässä RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isRegEx(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 23:29:13 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>