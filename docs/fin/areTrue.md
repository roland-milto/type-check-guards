# areTrue

## Kuvaus

Tarkistaa, sisältääkö ei-tyhjä taulukko ainoastaan boolean-arvon `true`.

### Käyttötapaus

Käytä `areTrue`-funktiota validoidaksesi, että joukko esiehtoja tai ominaisuuslippuja on kaikki käytössä (kaikki arvot
ovat `true`) ennen jatkamista, samalla kun tyhjät tai virheellisesti muotoillut syötteet käsitellään ei-täytettyinä (
`false`).

> **Huomautus TypeScript-käyttäjille:**
>
> `areTrue` palauttaa `false` tyhjälle taulukolle sekä taulukoille, jotka sisältävät minkä tahansa arvon, joka ei ole
> täsmälleen `true`.

### Edut

- Palauttaa `true` vain, kun jokainen alkio on täsmälleen `true` ja taulukko ei ole tyhjä.
- Epäonnistuu nopeasti: palauttaa `false` heti, kun löytyy arvo, joka ei ole `true`.
- Hylkää virheelliset syötteet (ei-taulukot tai tyhjät taulukot) palauttamalla `false`.

## Käyttö

### Syntaksi

Funktio:

- `areTrue(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan, että kaikki arvot ovat `true`.

### Funktion paikallinen tuonti

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areTrue(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 13:51:07 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>