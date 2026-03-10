# areSets

## Kuvaus

Tarkistaa, sisältääkö annettu ei-tyhjä taulukko vain `Set`-instansseja, palauttaen `true`, jos näin on, ja `false`
muussa tapauksessa.

### Käyttötapaus

Varmista, että arvo (esim. käyttäjän syötteestä, JSON-jäsennyksestä tai ulkoisista API:ista) on ei-tyhjä taulukko `Set`
-olioita ennen jokaisen joukon käsittelyä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areSets`-funktiota tuntemattoman syötteen validoimiseen ennen iterointia ja `Set`-API:en (esim. `.size`,
`.has`, `.add`) kutsumista jokaiselle alkiolle.

### Edut

- Palauttaa `true` vain silloin, kun syöte on ei-tyhjä taulukko ja jokainen alkio on `Set`-instanssi.
- Estää virheelliset osumat tyhjille taulukoille palauttamalla `false`, kun taulukossa ei ole alkioita.
- Hyödyllinen ajonaikaisena vartijana ennen `Set`-kohtaisia operaatioita jokaiselle alkiolle.

## Käyttö

### Syntaksi

Funktio:

- `areSets(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan `Set`-instanssit.

### Funktion paikallinen tuonti

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a on ajonaikaisesti Set-instanssien taulukko
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // epätosi
console.log(areSets(c)); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areSets(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areSets](../_analysis/areSets.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 23:13:19 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>