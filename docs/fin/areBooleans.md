# areBooleans

## Kuvaus

`areBooleans` tarkistaa, sisältääkö annettu ei-tyhjä taulukko vain boolean-arvoja, palauttaen `true`, jos näin on, ja
`false` muussa tapauksessa.

### Käyttötapaus

Validoi käyttäjän antama tai ulkoinen data (esim. JSON-payloadit, kyselyparametrit, konfiguraatiotaulukot)
varmistaaksesi, että ei-tyhjä lista sisältää vain booleaneja ennen boolean-logiikan soveltamista tai ennen sen
välittämistä API:lle, joka odottaa `boolean[]`.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areBooleans`-funktiota validoimaan `unknown[]` ennen kuin käsittelet sitä `boolean[]`-taulukkona; se palauttaa
`false` tyhjille taulukoille, joten käsittele tämä tapaus erikseen, jos tyhjä lista pitäisi sallia.

### Edut

- Palauttaa `true` vain silloin, kun jokainen alkio on boolean ja syöte on ei-tyhjä taulukko.
- Estää väärät positiiviset tulokset hylkäämällä tyhjät taulukot (palauttaa `false`).
- Toimii hyvin ajonaikaisena vartijana ennen vain booleaneille tarkoitettuja operaatioita (esim. `every`, `some`,
  loogiset reduktiot).

## Käyttö

### Syntaksi

Funktio:

- `areBooleans(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan boolean-alkiot.

### Funktion paikallinen tuonti

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areBooleans(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:40:04 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>