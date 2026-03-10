# isRegEx

## 설명

제공된 값이 `RegExp` 인스턴스인지 여부를 판별합니다.

### 사용 사례

사용자 제공 값이나 동적 값(예: 구성, API 페이로드, 플러그인 입력)을 정규식으로 취급하기 전에 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `isRegEx`를 사용해 `unknown`(또는 유니언) 값을 좁힌 다음 RegExp 전용 속성이나 메서드를 사용하세요. 이 함수는 `RegExp`의 인스턴스인 값에 대해서만 `true`를 반환합니다.

### 장점

- 값이 `RegExp`인지 확인하기 위한 간단한 런타임 타입 가드를 제공합니다.
- 코드가 정규식을 기대할 때(예: `test`, `exec` 호출 또는 `source` 읽기 전) 오류를 방지하는 데 도움이 됩니다.
- 정규식 리터럴과 `new RegExp(...)`로 생성된 인스턴스 모두에서 동작합니다.
- 정규식이 아닌 입력에 대해 예외를 던지지 않고 명확한 불리언 결과(`true`/`false`)를 반환합니다.

## 사용법

### 문법

함수:

- `isRegEx(value)`

매개변수:

- `value`: 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // 여기서 input은 RegExp입니다
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isRegEx(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 11:29:55 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>