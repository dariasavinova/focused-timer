declare module '*.module.scss' {
  const styles: { [key: string]: string }
  export default styles
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '@uidotdev/usehooks'