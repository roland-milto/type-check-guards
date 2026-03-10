# isString

## Kuvaus

`isString` määrittää, onko annettu arvo merkkijono.

### Käyttötapaus

Validoi käyttäjän syöte, API-payloadin kentät tai konfiguraatioarvot ajonaikaisesti varmistaaksesi, että arvo on
merkkijono ennen merkkijono-operaatioiden (esim. trimmaus, pilkkominen, kirjainkoon muunnos) käyttämistä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isString`-funktiota `unknown`- tai löyhästi tyypitettyjen arvojen validointiin ennen merkkijonometodien
> kutsumista; se palauttaa `true` vain, kun `typeof value === "string"`.

### Edut

- Yksinkertainen ja nopea tarkistus `typeof`-operaattorilla.
- Palauttaa ennustettavan totuusarvotuloksen: `true` merkkijonoille, muuten `false`.
- Toimii sekä tyhjille että ei-tyhjille merkkijonoille.
- Hyödyllinen kevyenä ajonaikaisena vartijana ennen merkkijonokohtaisten operaatioiden suorittamista.

## Käyttö

### Syntaksi

Funktio:

- `isString(value)`

Parametrit:

- `value`: Arvo, jonka merkkijonotyyppi testataan.

### Funktion paikallinen tuonti

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input on tässä merkkijono
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isString(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isString](../_analysis/isString.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 13:13:52 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>