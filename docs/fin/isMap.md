# isMap

## Kuvaus

Tarkistaa, onko annettu `value` `Map`, palauttaen `true`, jos on, ja `false` muussa tapauksessa.

### Käyttötapaus

Käytä `isMap`-funktiota, kun saat `unknown`-arvon (esim. JSON-jäsennyksestä, ulkoisista rajapinnoista tai käyttäjän
syötteestä) ja sinun täytyy varmistaa, että se on `Map` ennen `Map`-operaatioiden suorittamista.

> **Huomautus TypeScript-käyttäjille:**
>
> `isMap` on ajonaikainen tarkistin, joka palauttaa `true`, kun arvo on `Map`, ja `false` muussa tapauksessa; käytä sitä
`unknown`-arvon tarkentamiseen ennen `Map`-rajapintojen kutsumista.

### Edut

- Tarjoaa nopean ajonaikaisen tarkistuksen siitä, onko arvo `Map`.
- Auttaa ehkäisemään tyyppivirheitä suojaamalla koodipolut, jotka edellyttävät `Map`-metodeja kuten `get`, `set` ja
  `has`.
- Toimii hyvin kevyenä validointivaiheena käsiteltäessä `unknown`-syötteitä.

## Käyttö

### Syntaksi

Funktio:

- `isMap(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isMap(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isMap](../_analysis/isMap.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 16:04:26 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>