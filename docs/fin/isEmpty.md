# isEmpty

## Kuvaus

Määrittää, onko annettu arvo tyhjä, palauttaen `true` arvoille `null`, `undefined`, tyhjille/pelkkiä välilyöntejä
sisältäville merkkijonoille, tyhjille taulukoille, tyhjille `Map`/`Set`-kokoelmille tai olioille, joilla ei ole omia
enumeroitavia ominaisuuksia.

### Käyttötapaus

Käytä `isEmpty`-funktiota syötteiden validointiin ja puuttuvien/tyhjien arvojen havaitsemiseen useissa tietotyypeissä (
esim. lomakekentät, API-payloadit, konfiguraatio-oliot), joissa `null`, `undefined`, pelkkiä välilyöntejä sisältävät
merkkijonot, tyhjät kokoelmat ja ominaisuudettomat oliot tulisi käsitellä tyhjinä.

> **Huomautus TypeScript-käyttäjille:**
>
> `isEmpty` on totuusarvon palauttava apufunktio (ei TypeScriptin tyyppipredikaatti), joten se ei itsessään tarkenna
> tyyppejä; käytä sitä validointiin/haarauttamiseen eikä käännösaikaiseen tyypin tarkentamiseen.

### Edut

- Käsittelee `null`- ja `undefined`-arvot tyhjyystarkistuksissa `true`-arvoisina.
- Pitää pelkistä välilyönneistä koostuvat merkkijonot tyhjinä trimmaamalla ennen pituuden tarkistamista.
- Tukee yleisiä säiliötyyppejä (taulukot, `Map`, `Set`) sekä tavallisia olioita, joilla ei ole omia enumeroitavia
  ominaisuuksia.
- Välttää perittyjen ominaisuuksien laskemisen käyttämällä `hasOwnProperty`-tarkistuksia.
- Palauttaa yksinkertaisen totuusarvotuloksen (`true`/`false`), joka sopii suojauksiin ja validointiin.

## Käyttö

### Syntaksi

Funktio:

- `isEmpty(value)`

Parametrit:

- `value`: Arvo, jonka tyhjyyttä tarkistetaan.

### Funktion paikallinen tuonti

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isEmpty(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 16:18:22 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>