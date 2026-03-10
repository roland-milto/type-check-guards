# arePromises

## Kuvaus

`arePromises` määrittää, ovatko kaikki taulukon alkiot `Promise`-instansseja.

### Käyttötapaus

Varmista, että dynaamisesti rakennettu tai ulkoisesti toimitettu lista sisältää vain lupauksia ennen niiden
yhdistämistä (esim. `Promise.all`:lla).

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `arePromises`-funktiota `unknown[]`:n validoimiseen ennen `Promise.all`-kutsua tai muita vain lupauksille
> tarkoitettuja operaatioita; se palauttaa `false` tyhjille taulukoille.

### Edut

- Varmistaa, että jokainen alkio on `Promise` ennen kuin jatkat lupauskohtaista logiikkaa.
- Palauttaa `false` täyttämättömille taulukoille, mikä estää epäselvät tulokset tyhjille syötteille.
- Hyödyllinen ajonaikaisena vartijana, kun työskennellään ulkoisista lähteistä tulevan `unknown[]`:n kanssa.

## Käyttö

### Syntaksi

Funktio:

- `arePromises(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan Promise-instanssit.

### Funktion paikallinen tuonti

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values on ajonaikaisesti Promise-instanssien taulukko
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.arePromises(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 23:48:10 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>