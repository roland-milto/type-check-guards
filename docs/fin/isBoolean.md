# isBoolean

## Kuvaus

Määrittää, onko annettu arvo `boolean`.

### Käyttötapaus

Validoi ulkoinen tai tyypittämätön data (esim. ympäristömuuttujat, JSON-payloadit, kyselyparametrit) varmistaaksesi,
että arvo on `boolean` ennen sen käyttämistä ehdollisessa logiikassa.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isBoolean`-funktiota kaventaaksesi `unknown`-tyypin `boolean`-tyypiksi ennen boolean-operaatioiden käyttämistä.

### Edut

- Yksinkertainen ja nopea ajonaikainen tarkistus `typeof`-operaattorilla.
- Auttaa validoimaan tuntemattoman syötteen ennen boolean-kohtaista logiikkaa.
- Palauttaa ennustettavan `boolean`-tuloksen (`true`/`false`).

## Käyttö

### Syntaksi

Funktio:

- `isBoolean(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input on tässä boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isBoolean(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:36:16 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>