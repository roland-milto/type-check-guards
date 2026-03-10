# isBuffer

## 설명

값이 Node.js `Buffer`인지 확인하고 `true` 또는 `false`를 반환합니다.

### 사용 사례

런타임에서 입력(예: API 페이로드, 파일 데이터 또는 메시지 버퍼)을 검증하여 처리 전에 값이 `Buffer`인지 확인하고, Node.js 외부에서 `Buffer`가 존재하지 않을 수 있는 환경에서도 안정적으로
`false`를 얻습니다.

> **TypeScript 사용자를 위한 참고:**
>
> `Buffer` 전용 메서드를 호출하기 전에 `isBuffer`를 사용해 `unknown` 값을 `Buffer`로 타입을 좁히세요.

### 장점

- `Buffer.isBuffer`를 사용하여 Node.js `Buffer` 인스턴스를 안전하게 감지합니다.
- `Buffer`를 사용할 수 없는 환경에서는 `false`를 반환하여 런타임 오류를 방지합니다.
- `unknown` 입력에서도 동작하므로 런타임 검증과 타입 좁히기에 적합합니다.

## 사용법

### 문법

함수:

- `isBuffer(value)`

매개변수:

- `value`: 테스트할 값입니다.

### 로컬 함수 임포트

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // 여기서 a는 Buffer입니다
  console.log(a.toString("utf8"));
}
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isBuffer(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 4:32:09 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>