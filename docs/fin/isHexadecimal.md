# isHexadecimal

## Kuvaus

`isHexadecimal` tarkistaa, onko annettu arvo heksadesimaalinen merkkijonoliteraali, jossa on pakollinen `0x`/`0X`
-etuliite.

### Käyttötapaus

Käytä `isHexadecimal`-funktiota konfiguraatioarvojen, API-pyyntökuormien kenttien tai CLI-argumenttien validointiin, kun
niiden on oltava heksadesimaalisia merkkijonoliteraaleja (esim. tunnisteet, maskit tai osoitteet) eikä niissä saa olla
ympäröiviä välilyöntejä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isHexadecimal`-funktiota, kun sinun täytyy validoida käyttäjän syöte tai sarjoitettu data tiukkana
> heksadesimaalisena literaalimerkkijonona (mukaan lukien `0x`/`0X`-etuliite) ennen sen jäsentämistä tai muuntamista.

### Edut

- Varmistaa, että arvo on merkkijono ja vastaa tiukkaa heksadesimaalisen literaalin muotoa (edellyttää `0x`/`0X`
  -etuliitettä).
- Hylkää merkkijonot, joissa on alussa tai lopussa välilyöntejä, mikä auttaa välttämään vahingossa hyväksytyn
  täyteväleillä varustetun syötteen.
- Tukee valinnaista etumerkkiä ja ei välitä kirjainkoosta etuliitteessä ja numeroissa, palauttaen `true`/`false`
  ennustettavasti.

## Käyttö

### Syntaksi

Funktio:

- `isHexadecimal(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // tosi
isHexadecimal("-0Xff"); // tosi
isHexadecimal("1A2B"); // epätosi (etuliite puuttuu)
isHexadecimal(" 0x1A2B"); // epätosi (alussa välilyönti)
isHexadecimal(0x1a2b); // epätosi (ei merkkijono)
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isHexadecimal(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 22:58:38 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>