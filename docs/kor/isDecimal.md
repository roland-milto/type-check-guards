# isDecimal

## 설명

`isDecimal`은 값이 앞뒤 공백 없이 유효한 10진수 형식을 갖는 10진수 문자열 표현인지 확인합니다.

### 사용 사례

파싱하거나 저장하기 전에, 주변 공백 없이(선택적으로 부호 포함) 10진수 문자열로 제공되어야 하는 폼 필드, API 페이로드 또는 구성 값을 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 특히 공백을 거부해야 하는 경우, `Number(value)` 등으로 변환하기 전에 `isDecimal`을 사용해 사용자 입력을 검증하세요.

### 장점

- 입력이 문자열인지 엄격하게 검증하고, 10진수 리터럴 패턴과 일치하는지 확인합니다.
- 모호한 파싱을 방지하기 위해 앞뒤 공백(제어 문자 포함)을 허용하지 않습니다.
- 정규식을 실행하기 전에 빠른 사전 검사(타입 검사 및 첫/마지막 문자 검사)를 수행합니다.
- 가드 및 입력 검증에 적합한 단순한 불리언 결과(`true`/`false`)를 반환합니다.

## 사용법

### 문법

함수:

- `isDecimal(value)`

매개변수:

- `value`: 10진수 문자열 형식인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v는 여기서 문자열입니다(런타임에서 검증됨)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isDecimal(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 3:53:03 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>