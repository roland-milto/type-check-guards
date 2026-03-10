# isSet

## Kuvaus

Määrittää, onko annettu arvo `Set`.

### Käyttötapaus

Validoi syötteet ulkoisista lähteistä (esim. JSON-jäsennys, käyttäjän syöte tai kolmannen osapuolen API:t)
varmistaaksesi, että arvo on `Set` ennen `Set`-operaatioiden suorittamista.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isSet`-funktiota `unknown`-arvojen tarkentamiseen ennen `Set`-kohtaisien API:en, kuten `.add`, `.has` tai
`.size`, kutsumista.

### Edut

- Tarjoaa yksinkertaisen ajonaikaisen tarkistuksen sen vahvistamiseksi, onko arvo `Set`.
- Auttaa ehkäisemään tyyppivirheitä mahdollistamalla varhaisen haarautumisen, kun arvo ei ole `Set`.
- Toimii minkä tahansa `Set`-sisällön kanssa (tyhjä tai sisältöä sisältävä) ja palauttaa johdonmukaisesti `true`/
  `false`.

## Käyttö

### Syntaksi

Funktio:

- `isSet(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a on ajonaikaisesti Set
  console.log(a.size);
}

console.log(isSet(b)); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isSet(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isSet](../_analysis/isSet.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 23:09:35 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>