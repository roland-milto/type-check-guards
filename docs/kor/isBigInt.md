# isBigInt

## 설명

`isBigInt`는 주어진 값이 `bigint` 타입인지 확인하며, BigInt 기본값에는 `true`를, 그 외에는 `false`를 반환합니다.

### 사용 사례

BigInt 전용 계산을 수행하거나 BigInt만 허용하는 필드에 저장하기 전에, 타입이 지정되지 않은 소스(예: JSON 파싱, 사용자 입력, 외부 API)에서 들어오는 값을 검증하고 좁힙니다.

> **TypeScript 사용자를 위한 참고:**
>
> BigInt 피연산자가 필요한 BigInt 산술(예: `+`, `*`)을 수행하기 전에 `isBigInt`를 사용해 `unknown`을 `bigint`로 좁히세요.

### 장점

- `bigint` 기본(primitive) 타입에 대해 간단하고 신뢰할 수 있는 런타임 검사를 제공합니다.
- BigInt 전용 연산을 수행하기 전에 `unknown` 값을 좁히는 데 도움이 됩니다.
- 거짓 양성을 방지합니다: 일반 숫자, 문자열 및 기타 타입은 `false`를 반환합니다.

## 사용법

### 문법

함수:

- `isBigInt(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // 참
console.log(isBigInt(10));  // 거짓
console.log(isBigInt("10")); // 거짓

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isBigInt(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 11:32:18 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>