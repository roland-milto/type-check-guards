# isOfType

## Описание

Определя дали дадена `value` съвпада с указан низ за тип, използвайки `typeof` за примитиви и резервен механизъм за
сложни типове.

### Случай на употреба

Валидирайте и стеснявайте `unknown` входове (напр. API отговори, потребителски вход, парсиран JSON), като проверявате
дали стойността е от очаквания низов тип, преди да извършвате операции, специфични за типа.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isOfType`, за да разклонявате по типове по време на изпълнение при работа със стойности `unknown`; връща
`true`/`false` и третира `null` и `undefined` изрично.

### Предимства

- Проверява примитивни типове чрез директен `typeof` за бързина и яснота.
- Коректно обработва `null` и `undefined`, които самостоятелният `typeof` не може да различи по желания начин.
- Поддържа сложни или потребителски низове за тип чрез резервно сравнение с `getTypeOf`.
- Връща прост булев резултат (`true`/`false`), подходящ за гардове и разклоняване.

## Използване

### Синтаксис

Функция:

- `isOfType(value, type)`

Параметри:

- `value`: Стойността, която да се тества спрямо `type`.
- `type`: Низовото представяне на типа, спрямо който да се провери.

### Локален импорт на функция

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input е число тук
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input е низ тук
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isOfType(value, type)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 16:58:47 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>