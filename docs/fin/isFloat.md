# isFloat

## Kuvaus

`isFloat` määrittää, onko annettu `value` äärellinen liukuluku (eli `number`, joka ei ole kokonaisluku).

### Käyttötapaus

Validoi käyttäjän antama numeerinen syöte, jossa vaaditaan murtolukuja (esim. hinnat, mittaukset, nopeudet), ja hylkää
kokonaisluvut, `NaN` ja äärettömyydet.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isFloat`-funktiota, kun sinun täytyy hyväksyä vain äärelliset, ei-kokonaislukuiset numeeriset syötteet; se
> hylkää kokonaisluvut ja ei-äärelliset luvut.

### Edut

- Palauttaa `true` vain äärellisille, ei-kokonaislukuisille luvuille (sulkee pois kokonaisluvut, `NaN`:n, `Infinity`:n
  ja `-Infinity`:n).
- Toimii minkä tahansa syötetyypin (`unknown`) kanssa ja kaventaa tyypin turvallisesti tarkistamalla
  `typeof value === "number"`.
- Käyttää sisäänrakennettuja numeerisia tarkistuksia (`Number.isInteger`, `Number.isFinite`) ennustettavaa toimintaa
  varten.

## Käyttö

### Syntaksi

Funktio:

- `isFloat(value)`

Parametrit:

- `value`: Arvo, joka tarkistetaan sen varalta, onko se liukuluku.

### Funktion paikallinen tuonti

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // arvo on ajonaikana numero; se on äärellinen eikä kokonaisluku
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isFloat(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 16:07:37 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>