# isValidDate

## 설명

`isValidDate`는 주어진 값이 유효한 `Date` 객체인지 확인하며, 실제로 유효하고 무효하지 않은 날짜에 대해서만 `true`를 반환합니다.

### 사용 사례

날짜가 포함될 수 있는 사용자 입력 또는 API 데이터를 검증하여, 날짜 계산, 서식 지정, 비교를 수행하기 전에 해당 값이 유효하지 않은 날짜가 아닌 실제 `Date` 인스턴스인지 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `unknown`으로 타입이 지정된 값에 대해 `Date` 메서드(예: `toISOString`, `getTime`)를 호출하기 전에 `isValidDate`를 사용하여 해당 값이 유효한 `Date` 객체인지
> 확인하세요.

### 장점

- 값이 단순한 날짜처럼 보이는 문자열이나 숫자가 아니라 `Date` 인스턴스임을 보장합니다.
- `NaN` 시간 값인지 확인하여 유효하지 않은 날짜(예: `new Date("invalid")`)를 거부합니다.
- 조건문과 검증 파이프라인에서 사용하기 쉬운 간단한 불리언 가드입니다.
- 입력을 먼저 검증하여 날짜 메서드를 호출할 때 발생할 수 있는 런타임 오류를 방지하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `isValidDate(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input은 유효한 Date 인스턴스입니다
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isValidDate(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 4:51:28 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>