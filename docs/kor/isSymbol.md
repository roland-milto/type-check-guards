# isSymbol

## 설명

`isSymbol`은 주어진 값이 `symbol` 타입인지 여부를 판단하며, 심볼이면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

객체와 맵에서 고유 식별자, 레지스트리 키 또는 계산된 프로퍼티 키로 사용하기 전에 `unknown` 값이 `symbol`인지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 심볼 관련 함수를 호출하거나 계산된 프로퍼티 키로 사용하기 전에 `isSymbol`을 사용해 `unknown`을 `symbol`로 좁히세요.

### 장점

- JavaScript `symbol` 원시 타입에 대해 간단하고 신뢰할 수 있는 런타임 검사를 제공합니다.
- 심볼 전용 API를 사용하거나 키로 저장하기 전에 `unknown` 값을 좁히는 데 도움이 됩니다.
- `symbol` 값을 감지하는 정석적인 방법인 `typeof`를 사용하여 오탐을 방지합니다.

## 사용법

### 문법

함수:

- `isSymbol(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // 여기서 input은 심볼입니다
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isSymbol(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 2:27:23 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>