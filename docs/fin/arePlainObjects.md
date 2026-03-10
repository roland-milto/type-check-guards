# arePlainObjects

## Kuvaus

Tarkistaa, ovatko taulukon kaikki alkiot tavallisia objekteja, ja palauttaa `true` vain, jos jokainen alkio täyttää
ehdon.

### Käyttötapaus

Validoi ulkoinen tai tyypittämätön data (esim. jäsennetty JSON, API-payloadit, lomakelähetykset) varmistaaksesi, että
sait ei-tyhjän taulukon, jossa jokainen alkio on tavallinen objekti, ennen kuin iteroit ja luet ominaisuuksia.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `arePlainObjects`-funktiota tuntemattoman syötteen validoimiseen ennen kuin käsittelet sitä TypeScriptissä
> tyyppinä `Record<string, unknown>[]` (tai tiukempana objektimuotona).

### Edut

- Varmistaa, että jokainen syöttötaulukon alkio on tavallinen objekti, ja palauttaa `true` vain, kun kaikki alkiot
  täsmäävät.
- Hylkää virheelliset syötteet varhain (ei-taulukot tai tyhjät taulukot) palauttamalla `false`.
- Käsittelee sekä objektikirjaimella luodut objektit että `Object.create(null)` -objektit kelvollisina tavallisina
  objekteina.

## Käyttö

### Syntaksi

Funktio:

- `arePlainObjects(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan tavallisia objekteja olevat alkiot.

### Funktion paikallinen tuonti

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // tosi
const b = arePlainObjects([{}, Object.create(null)]); // tosi
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // epätosi
const d = arePlainObjects([] as unknown[]); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.arePlainObjects(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 16:25:08 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>