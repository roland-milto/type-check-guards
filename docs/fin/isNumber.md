# isNumber

## Kuvaus

`isNumber` tarkistaa, onko arvo äärellinen, ei-`NaN`-numero.

### Käyttötapaus

Validoi numeerinen syöte epäluotettavista lähteistä (lomakkeet, kyselyparametrit, JSON-payloadit) ennen laskentaa,
tallennusta tai raja-arvotarkistuksia varmistaen, että vain äärelliset luvut palauttavat `true` ja kaikki muu palauttaa
`false`.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isNumber`-funktiota `unknown`-arvojen validoimiseen ennen laskutoimituksia; se hylkää `NaN`:n, `Infinity`:n ja
`-Infinity`:n.

### Edut

- Palauttaa `true` vain oikeille JavaScript-numeroille (tyyppitarkistus sekä `NaN`:n ja äärettömyyden hylkäys).
- Ehkäisee yleisiä validointivirheitä, joissa `NaN`, `Infinity` tai `-Infinity` pääsevät vahingossa läpi numeroina.
- Toimii hyvin ajonaikaisena vartijana tuntemattomalle syötteelle (esim. JSON, käyttäjän syöte, ulkoiset API:t).
- Yksinkertainen, nopea ja vailla sivuvaikutuksia.

## Käyttö

### Syntaksi

Funktio:

- `isNumber(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input on kelvollinen äärellinen luku
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isNumber(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 13:08:55 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>