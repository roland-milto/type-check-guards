# isHexadecimal

## Beschrijving

`isHexadecimal` controleert of een gegeven waarde een hexadecimale string-literal is met een verplichte `0x`/`0X`
-prefix.

### Use case

Gebruik `isHexadecimal` om configuratiewaarden, velden in API-payloads of CLI-argumenten te valideren die als
hexadecimale string-literals moeten worden aangeleverd (bijv. ID's, masks of addresses) en geen omringende witruimte
mogen bevatten.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isHexadecimal` wanneer je gebruikersinvoer of geserialiseerde data moet valideren als een strikte
> hexadecimale literal-string (inclusief de `0x`/`0X`-prefix) voordat je deze parseert of converteert.

### Voordelen

- Valideert dat een waarde een string is en overeenkomt met een strikt hexadecimaal literal-formaat (vereist de `0x`/
  `0X`-prefix).
- Wijst strings met voor- of achterliggende witruimte af, wat helpt om onbedoelde acceptatie van opgevulde invoer te
  voorkomen.
- Ondersteunt een optioneel teken en is niet hoofdlettergevoelig voor de prefix en cijfers, en retourneert voorspelbaar
  `true`/`false`.

## Gebruik

### Syntax

Functie:

- `isHexadecimal(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // waar
isHexadecimal("-0Xff"); // waar
isHexadecimal("1A2B"); // onwaar (prefix ontbreekt)
isHexadecimal(" 0x1A2B"); // onwaar (voorafgaande witruimte)
isHexadecimal(0x1a2b); // onwaar (geen string)
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isHexadecimal(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 22:59:45 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>