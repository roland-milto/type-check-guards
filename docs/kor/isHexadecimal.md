# isHexadecimal

## 설명

`isHexadecimal`은 주어진 값이 필수 `0x`/`0X` 접두사를 가진 16진수 문자열 리터럴인지 확인합니다.

### 사용 사례

`isHexadecimal`을 사용하여 16진수 문자열 리터럴(예: ID, 마스크, 주소)로 제공되어야 하고 주변 공백을 포함해서는 안 되는 구성 값, API 페이로드 필드 또는 CLI 인수를 검증하세요.

> **TypeScript 사용자를 위한 참고:**
>
> 파싱하거나 변환하기 전에 사용자 입력 또는 직렬화된 데이터를 엄격한 16진수 리터럴 문자열(`0x`/`0X` 접두사 포함)로 검증해야 할 때 `isHexadecimal`을 사용하세요.

### 장점

- 값이 문자열인지 확인하고 엄격한 16진수 리터럴 형식(`0x`/`0X` 접두사 필수)과 일치하는지 검증합니다.
- 앞뒤 공백이 있는 문자열을 거부하여, 패딩된 입력이 실수로 허용되는 것을 방지하는 데 도움이 됩니다.
- 선택적 부호를 지원하며 접두사와 숫자에 대해 대소문자를 구분하지 않고, 예측 가능하게 `true`/`false`를 반환합니다.

## 사용법

### 문법

함수:

- `isHexadecimal(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (접두사 누락)
isHexadecimal(" 0x1A2B"); // false (선행 공백)
isHexadecimal(0x1a2b); // false (문자열이 아님)
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isHexadecimal(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 10:59:17 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>