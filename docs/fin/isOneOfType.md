# isOneOfType

## Kuvaus

`isOneOfType` määrittää, vastaako annettu `value` vähintään yhtä annetuista tyyppimerkkijonoista, palauttaen `true`, jos
jokin osuma löytyy, ja `false` muussa tapauksessa.

### Käyttötapaus

Validoi löyhästi tyypitettyä tai ulkoista dataa (esim. jäsennetty JSON, kyselyparametrit) sallimalla useita
hyväksyttäviä ajonaikaisia tyyppejä (kuten `number` tai `string`) ennen jatkamista muun logiikan kanssa.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isOneOfType`-funktiota, kun haluat ajonaikaisen tarkistuksen siitä, että arvo vastaa jotakin useista
> sallituista tyypeistä; se palauttaa `true`, jos vähintään yksi tyyppi täsmää, muuten `false`.

### Edut

- Tarkistaa arvon useita sallittuja tyyppejä vastaan yhdellä kutsulla ja palauttaa `true` ensimmäisestä osumasta.
- Toimii `unknown`-syötteiden kanssa, mikä tekee siitä hyödyllisen ajonaikaisissa rajapinnoissa (esim. ulkoinen data,
  käyttäjän syöte).
- Yksinkertainen totuusarvotulos (`true`/`false`), joka toimii hyvin yhteen ehdollisen logiikan ja varhaisten
  palautusten kanssa.

## Käyttö

### Syntaksi

Funktio:

- `isOneOfType(value, types)`

Parametrit:

- `value`: Arvo, joka tarkistetaan määritettyjä tyyppejä vastaan.
- `types`: Taulukko tyyppimerkkijonoja, jotka edustavat arvon mahdollisia tyyppejä.

### Funktion paikallinen tuonti

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input on ajonaikaisesti objekti
}

console.log(isOneOfType(3, ["number", "string"])); // tosi
console.log(isOneOfType("hello", ["number", "boolean"])); // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isOneOfType(value, types)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 23:43:15 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>