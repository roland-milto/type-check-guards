# areStrings

## Kuvaus

`areStrings` tarkistaa, onko taulukko ei-tyhjä ja ovatko kaikki sen alkiot merkkijonoja, ja palauttaa `true` vain siinä
tapauksessa.

### Käyttötapaus

Validoi ulkoiset tai käyttäjän toimittamat tiedot (esim. kyselyparametrit, JSON-payloadit, CSV-kentät) varmistaaksesi,
että sinulla on ei-tyhjä merkkijonolista ennen käsittelyä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areStrings`-funktiota tuntemattomien taulukoiden validoimiseen ennen pelkkään merkkijonologiikkaan siirtymistä;
> se palauttaa `false` tyhjille taulukoille.

### Edut

- Varmistaa, että jokainen alkio on merkkijono, ja hylkää seka-tyyppiset taulukot palauttamalla `false`.
- Hylkää tyhjät taulukot, joten `true` tarkoittaa vain ei-tyhjää merkkijonolistaa.
- Hyödyllinen nopeana ajonaikaisena tarkistuksena ennen pelkästään merkkijonoille tarkoitettujen operaatioiden
  suorittamista (esim. `trim`, `toLowerCase`).

## Käyttö

### Syntaksi

Funktio:

- `areStrings(value)`

Parametrit:

- `value`: Expected type `string[]`.

### Funktion paikallinen tuonti

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input on ajonaikaisesti ei-tyhjä string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areStrings(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 13:18:06 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>