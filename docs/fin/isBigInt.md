# isBigInt

## Kuvaus

`isBigInt` tarkistaa, onko annettu arvo tyyppiä `bigint`, palauttaen `true` BigInt-primitiiveille ja `false` muussa
tapauksessa.

### Käyttötapaus

Validoi ja kaventaa tyypittämättömistä lähteistä (esim. JSON-jäsennys, käyttäjän syöte, ulkoiset API:t) tulevia arvoja
ennen BigInt-kohtaisten laskelmien tekemistä tai niiden tallentamista vain BigIntille tarkoitettuihin kenttiin.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isBigInt`-funktiota kaventaaksesi `unknown`-tyypin `bigint`-tyypiksi ennen BigInt-aritmetiikkaa (esim. `+`,
`*`), joka edellyttää BigInt-operandeja.

### Edut

- Tarjoaa yksinkertaisen ja luotettavan ajonaikaisen tarkistuksen `bigint`-primitiivityypille.
- Auttaa kaventamaan `unknown`-arvoja ennen vain BigIntille sallittujen operaatioiden suorittamista.
- Välttää väärät positiiviset: tavalliset numerot, merkkijonot ja muut tyypit palauttavat `false`.

## Käyttö

### Syntaksi

Funktio:

- `isBigInt(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // tosi
console.log(isBigInt(10));  // epätosi
console.log(isBigInt("10")); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isBigInt(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 23:31:45 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>