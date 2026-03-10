# isOfType

## Опис

Одређује да ли дати `value` одговара наведеној нисци типа, користећи `typeof` за примитиве и резервни механизам за
сложене типове.

### Случај употребе

Валидирајте и сузите `unknown` улазе (нпр. API одговоре, кориснички унос, парсирани JSON) тако што ћете проверити да ли
је вредност очекиваног типа пре извршавања операција специфичних за тај тип.

> **Напомена за TypeScript кориснике:**
>
> Користите `isOfType` за гранање по типовима у време извршавања када радите са `unknown` вредностима; враћа `true`/
`false` и експлицитно третира `null` и `undefined`.

### Предности

- Проверава примитивне типове директним `typeof` ради брзине и јасноће.
- Исправно обрађује `null` и `undefined`, које сам `typeof` не може да разликује на жељени начин.
- Подржава сложене или прилагођене ниске типова путем резервног поређења користећи `getTypeOf`.
- Враћа једноставан булов резултат (`true`/`false`) погодан за гардове и гранање.

## Употреба

### Синтакса

Функција:

- `isOfType(value, type)`

Параметри:

- `value`: Вредност коју треба тестирати у односу на `type`.
- `type`: Ниска која представља тип у односу на који се врши провера.

### Локални увоз функције

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input je ovde broj
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input je ovde niska
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isOfType(value, type)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 17:06:34 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>