# areRegExes

## Kuvaus

`areRegExes` tarkistaa, onko arvo täytetty taulukko, joka sisältää vain `RegExp`-olioita.

### Käyttötapaus

Varmista, että konfiguraatioasetus (esim. sallittujen/estettyjen patternien lista) on ei-tyhjä säännöllisten
lausekkeiden taulukko ennen kuin käytät sitä täsmäytykseen.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areRegExes`-funktiota kaventaaksesi tyypin `unknown` muotoon `RegExp[]` ennen iterointia tai patternien
> koostamista.

### Edut

- Varmistaa, että arvo on ei-tyhjä taulukko, jossa jokainen alkio on `RegExp`-instanssi.
- Tarjoaa yksinkertaisen boolean-vartijan (`true`/`false`) käyttäjän syötteen tai konfiguraation validoimiseen.
- Auttaa ehkäisemään ajonaikaisia virheitä, kun myöhempi koodi olettaa, että kaikki alkiot tukevat säännöllisten
  lausekkeiden operaatioita.

## Käyttö

### Syntaksi

Funktio:

- `areRegExes(array)`

Parametrit:

- `array`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns on tässä RegExp-taulukko
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areRegExes(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 23:17:58 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>