# isOneOfType

## Përshkrim

`isOneOfType` përcakton nëse një `value` e dhënë përputhet me të paktën një nga vargjet e tipit të ofruara, duke kthyer
`true` nëse gjendet ndonjë përputhje dhe `false` përndryshe.

### Rast përdorimi

Valido të dhëna me tipizim të lirshëm ose të jashtme (p.sh., JSON i parsuar, parametra të query) duke lejuar disa tipe
të pranueshme në kohë ekzekutimi (si `number` ose `string`) përpara se të vazhdosh me logjikë të mëtejshme.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isOneOfType` kur dëshiron një kontroll në kohë ekzekutimi që një vlerë përputhet me cilindo nga disa tipe të
> lejuara; kthen `true` nëse të paktën një tip përputhet, përndryshe `false`.

### Përparësi

- Kontrollon një vlerë kundrejt disa tipeve të lejuara në një thirrje të vetme, duke kthyer `true` në përputhjen e parë.
- Punon me hyrje `unknown`, duke e bërë të dobishëm në kufijtë e ekzekutimit (p.sh., të dhëna të jashtme, hyrje nga
  përdoruesi).
- Ofron një rezultat të thjeshtë boolean (`true`/`false`) që kombinohet mirë me logjikën kushtore dhe kthimet e hershme.

## Përdorim

### Sintaksë

Funksion:

- `isOneOfType(value, types)`

Parametra:

- `value`: Vlera që do të kontrollohet kundrejt tipeve të specifikuara.
- `types`: Një varg (array) me vargje (string) tipesh që përfaqësojnë tipet e mundshme të vlerës.

### Import lokal i funksionit

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input është një objekt në kohën e ekzekutimit
}

console.log(isOneOfType(3, ["number", "string"])); // e vërtetë
console.log(isOneOfType("hello", ["number", "boolean"])); // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isOneOfType(value, types)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 13:54:22 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>