# isDecimal

## Kuvaus

`isDecimal` tarkistaa, onko arvo desimaaliluvun merkkijonoesitys ilman alussa/lopussa olevaa välilyöntiä ja
kelvollisessa desimaalimuodossa.

### Käyttötapaus

Validoi lomakekentät, API-payloadit tai konfiguraatioarvot, jotka on annettava desimaalimerkkijonona (valinnaisesti
etumerkillä) ilman ympäröiviä välilyöntejä, ennen jäsentämistä tai tallentamista.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isDecimal`-funktiota käyttäjän syötteen validoimiseen ennen sen muuntamista (esim. `Number(value)`),
> erityisesti silloin kun välilyönnit on hylättävä.

### Edut

- Varmistaa tiukasti, että syöte on merkkijono ja vastaa desimaalilitteraalin kaavaa.
- Hylkää alussa ja lopussa olevan välilyönnin (mukaan lukien ohjausmerkit) välttääkseen epäselvän jäsentämisen.
- Nopeat esitäsmäytykset (tyyppitarkistus sekä ensimmäinen/viimeinen merkki) ennen säännöllisen lausekkeen
  suorittamista.
- Palauttaa yksinkertaisen totuusarvon (`true`/`false`), joka sopii suojausehtoihin ja syötteen validointiin.

## Käyttö

### Syntaksi

Funktio:

- `isDecimal(value)`

Parametrit:

- `value`: Arvo, josta tarkistetaan desimaalimerkkijonon muoto.

### Funktion paikallinen tuonti

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v on tässä merkkijono (ajonaikaisesti validoitu)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isDecimal(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 15:52:14 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>