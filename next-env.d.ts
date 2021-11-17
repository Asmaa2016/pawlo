/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />
declare module '*.svg?inline' {
    const content: any
    export default content
  }
  
  declare module '*.svg' {
    const content: any
    export default content
  }