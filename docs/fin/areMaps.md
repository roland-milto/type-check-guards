# areMaps

## Kuvaus

`areMaps` määrittää, onko annettu taulukko ei-tyhjä ja ovatko kaikki sen alkiot `Map`-instansseja.

### Käyttötapaus

Validoi tuntematon syöte (esim. JSON-jäsennyksestä, ulkoisista API-rajapinnoista tai dynaamisista lähteistä) ennen kuin
sitä käsitellään ei-tyhjänä `Map`-olioiden listana.

> **Huomautus TypeScript-käyttäjille:**
>
> Palauttaa `false` tyhjälle taulukolle; se palauttaa `true` vain, kun taulukko on täytetty ja jokainen alkio on `Map`.

### Edut

- Varmistaa, että jokainen alkio on `Map`-instanssi, ja palauttaa `true` vain silloin, kun koko taulukko läpäisee
  tarkistuksen.
- Hylkää tyhjät taulukot suunnitellusti, mikä estää “ei dataa” -tilanteen vahingossa hyväksymisen kelvolliseksi
  syötteeksi.
- Hyödyllinen suojana ennen `Map`-kohtaisia operaatioita (esim. `.get()`, `.set()`, iterointi) kokoelman yli.

## Käyttö

### Syntaksi

Funktio:

- `areMaps(array)`

Parametrit:

- `array`: Tarkistettava taulukko.

### Funktion paikallinen tuonti

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items on taattu olevan ajonaikaisesti ei-tyhjä taulukko Map-instansseja
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // epätosi: tyhjille taulukoille tai taulukoille, jotka sisältävät minkä tahansa ei-Map-arvon
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areMaps(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 16:12:27 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>