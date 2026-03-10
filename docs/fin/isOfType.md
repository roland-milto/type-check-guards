# isOfType

## Kuvaus

Määrittää, vastaako annettu `value` määritettyä tyyppimerkkijonoa käyttäen `typeof`-operaattoria primitiiveille ja
varamenetelmää monimutkaisille tyypeille.

### Käyttötapaus

Validoi ja tarkenna `unknown`-syötteitä (esim. API-vastaukset, käyttäjän syöte, jäsennetty JSON) tarkistamalla, onko
arvo odotettua tyyppimerkkijonoa, ennen kuin suoritat tyyppikohtaisia operaatioita.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isOfType`-funktiota haarautumiseen ajonaikaisten tyyppien perusteella, kun työskentelet `unknown`-arvojen
> kanssa; se palauttaa `true`/`false` ja käsittelee `null`- ja `undefined`-arvot eksplisiittisesti.

### Edut

- Tarkistaa primitiivit suoraan `typeof`-operaattorilla nopeuden ja selkeyden vuoksi.
- Käsittelee oikein `null`- ja `undefined`-arvot, joita pelkkä `typeof` ei pysty erottamaan tarkoitetulla tavalla.
- Tukee monimutkaisia tai mukautettuja tyyppimerkkijonoja varavertailulla käyttäen `getTypeOf`-funktiota.
- Palauttaa yksinkertaisen totuusarvon (`true`/`false`), joka sopii suojausehtoihin ja haarautumiseen.

## Käyttö

### Syntaksi

Funktio:

- `isOfType(value, type)`

Parametrit:

- `value`: Arvo, jota testataan `type`-parametria vasten.
- `type`: Tyyppimerkkijonon esitys, jota vasten tarkistus tehdään.

### Funktion paikallinen tuonti

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input on tässä numero
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input on tässä merkkijono
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isOfType(value, type)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 16:59:32 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>