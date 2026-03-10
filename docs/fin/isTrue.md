# isTrue

## Kuvaus

`isTrue` määrittää, onko annettu arvo täsmälleen sama kuin `true`.

### Käyttötapaus

Käytä `isTrue`-funktiota validoimaan liput, ominaisuuskytkimet tai konfiguraatioarvot, joissa vain literaali `true`
tulee hyväksyä ja kaikkea muuta on käsiteltävä arvona `false`.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isTrue`-funktiota, kun sinun täytyy hyväksyä vain boolean-literaali `true`, ei pelkästään totuusarvoisia
> arvoja.

### Edut

- Tarjoaa tiukan tarkistuksen boolean-literaalille `true` (ei tyyppimuunnosta).
- Auttaa erottamaan `true`-arvon totuusarvoisista arvoista, kuten `1`, `"true"` tai `{}`.
- Yksinkertainen ja ennustettava toiminta, joka sopii suojauksiin ja validointiputkiin.

## Käyttö

### Syntaksi

Funktio:

- `isTrue(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // tosi
const b = isTrue(1);         // epätosi
const c = isTrue("true");   // epätosi

if (isTrue(a)) {
  // a on tässä tosi
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isTrue(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 13:42:16 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>