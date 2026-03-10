# isError

## Kuvaus

Tarkistaa, onko annettu `value` `Error`-instanssi.

### Käyttötapaus

Käytä `isError`-funktiota, kun saat `unknown`-arvon (esimerkiksi `catch`-lohkon, callbackin tai ulkoisen kirjaston
kautta) ja sinun täytyy turvallisesti määrittää, onko se `Error`, ennen kuin luet `message`-, `name`- tai `stack`
-ominaisuuksia.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isError`-funktiota suojaamaan `unknown`-arvoja (esim. `catch`-lohkoista) ennen kuin käsittelet niitä `Error`
> -tyyppisinä.

### Edut

- Tarjoaa yksinkertaisen ajonaikaisen tarkistuksen sille, onko arvo `Error`-instanssi.
- Auttaa rajaamaan tuntemattomia syötteitä ennen `Error`-ominaisuuksien, kuten `message` tai `stack`, käyttämistä.
- Vähentää ajonaikaisten poikkeusten riskiä käsiteltäessä arvoja `catch`-lohkoista, ulkoisista API:ista tai
  tyypittämättömistä lähteistä.

## Käyttö

### Syntaksi

Funktio:

- `isError(value)`

Parametrit:

- `value`: Arvo, joka tarkistetaan `Error`-tyyppiä vasten.

### Funktion paikallinen tuonti

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isError(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isError](../_analysis/isError.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 12:45:21 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>