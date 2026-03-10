# isPromise

## Kuvaus

Määrittää, onko annettu arvo `Promise`.

### Käyttötapaus

Käytä `isPromise`-funktiota tuntemattomien syötteiden validoimiseen ennen kuin käsittelet niitä `Promise`-arvona,
esimerkiksi kun käsitellään lisäosien palauttamia arvoja, dynaamisia importteja tai löyhästi tyypitettyjä
API-rajapintoja.

> **Huomautus TypeScript-käyttäjille:**
>
> `isPromise` tarkistaa `instanceof Promise` -tarkistuksella, joten se palauttaa `true` vain aidoille `Promise`
> -instansseille (ei yleisille thenable-olioille).

### Edut

- Tarjoaa yksinkertaisen ajonaikaisen tarkistuksen sille, onko arvo `Promise`.
- Auttaa suojaamaan koodipolkuja, jotka edellyttävät aitoa `Promise`-instanssia, palauttaen ennustettavasti `true` tai
  `false`.
- Välttää väärät positiiviset tulokset “thenable”-olioista (esim. `{ then() {} }`) vaatimalla todellisen `Promise`
  -instanssin.

## Käyttö

### Syntaksi

Funktio:

- `isPromise(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // tosi
console.log(isPromise(b)); // epätosi
console.log(isPromise(123)); // epätosi
console.log(isPromise(null)); // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isPromise(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 23:52:42 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>