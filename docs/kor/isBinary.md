# isBinary

## 설명

`isBinary`는 값이 이진 문자열인지(`0b`/`0B` 접두사는 선택 사항) 판별하고 `true` 또는 `false`를 반환합니다.

### 사용 사례

추가 처리 전에 사용자 제공 문자열(예: 폼 필드, CLI 인자, 설정 값)이 선택적으로 `0b`/`0B` 접두사를 포함한 이진 숫자만을 나타내는지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 문자열을 `BigInt`/`Number`로 파싱하거나 변환하기 전에 `isBinary`를 타입 가드로 사용하여 잘못된 입력을 피하세요.

### 장점

- `0b`/`0B` 접두사가 있거나 없는 이진 문자열을 허용합니다.
- 빈 문자열과 앞/뒤에 공백이 있는 문자열(ASCII ≤ 32)을 거부합니다.
- 예외를 던지지 않고 `true`/`false`를 반환하므로, 알 수 없는 입력에도 안전합니다.

## 사용법

### 문법

함수:

- `isBinary(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // 참
const b = isBinary("1010");   // 참
const c = isBinary("0b1020"); // 거짓
const d = isBinary(0b1010);     // 거짓

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isBinary(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 11:10:21 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>