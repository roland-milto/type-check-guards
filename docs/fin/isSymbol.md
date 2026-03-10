# isSymbol

## Kuvaus

`isSymbol` määrittää, onko annettu arvo tyyppiä `symbol`, palauttaen `true` symboleille ja `false` muussa tapauksessa.

### Käyttötapaus

Varmista, että `unknown`-arvo on `symbol`, ennen kuin käytät sitä yksilöllisenä tunnisteena, rekisteriavaimena tai
laskettuna ominaisuusavaimena objekteissa ja mapeissa.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isSymbol`-funktiota rajaamaan `unknown` tyyppiin `symbol` ennen symboliin liittyvien funktioiden kutsumista tai
> sen käyttämistä laskettuna ominaisuusavaimena.

### Edut

- Tarjoaa yksinkertaisen ja luotettavan ajonaikaisen tarkistuksen JavaScriptin `symbol`-primitiivityypille.
- Auttaa rajaamaan `unknown`-arvoja ennen symbolikohtaisten API:en käyttöä tai niiden tallentamista avaimiksi.
- Välttää väärät positiiviset tulokset käyttämällä `typeof`-operaattoria, joka on kanoninen tapa tunnistaa `symbol`
  -arvot.

## Käyttö

### Syntaksi

Funktio:

- `isSymbol(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input on tässä symboli
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isSymbol(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:26:45 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>