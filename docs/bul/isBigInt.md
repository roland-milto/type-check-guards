# isBigInt

## Описание

`isBigInt` проверява дали дадена стойност е от тип `bigint`, като връща `true` за BigInt примитиви и `false` в противен
случай.

### Случай на употреба

Валидирайте и стеснявайте стойности, идващи от нетипизирани източници (напр. парсване на JSON, потребителски вход,
външни API), преди да извършвате специфични за BigInt изчисления или да ги съхранявате в полета, които приемат само
BigInt.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isBigInt`, за да стесните `unknown` до `bigint` преди да правите BigInt аритметика (напр. `+`, `*`),
> която изисква операнди от тип BigInt.

### Предимства

- Предоставя проста и надеждна проверка по време на изпълнение за примитивния тип `bigint`.
- Помага за стесняване на стойности от тип `unknown` преди извършване на операции, валидни само за BigInt.
- Избягва фалшиви положителни резултати: обикновени числа, низове и други типове връщат `false`.

## Използване

### Синтаксис

Функция:

- `isBigInt(value)`

Параметри:

- `value`: Стойността за проверка.

### Локален импорт на функция

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // вярно
console.log(isBigInt(10));  // невярно
console.log(isBigInt("10")); // невярно
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isBigInt(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 23:31:18 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>