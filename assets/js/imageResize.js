export default (url, options = {}) => {
  if (!url) {
    return ''
  }

  if (/imageMogr2/.test(url)) {
    return url
  }

  const link = /^http/.test(url) ? url : `https://m1.calibur.tv/${url}`
  const canUseWebP = () => {
    if (typeof window === 'undefined') {
      return false
    }
    if (window.supportWebP !== undefined) {
      return window.supportWebP
    }

    const elem = document.createElement('canvas')

    if (elem.getContext && elem.getContext('2d')) {
      const support =
        elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
      window.supportWebP = support
      return support
    }

    return false
  }

  const format = options.format
    ? `/format/${options.format}`
    : canUseWebP()
      ? '/format/webp'
      : ''
  const mode = options.mode === undefined ? 1 : options.mode

  if ((mode === 1 && !options.width) || (!options.width && !options.height)) {
    return `${link}?imageMogr2/auto-orient/strip${format}`
  }

  let width
  let height
  const radio = typeof window === 'undefined' ? 2 : window.devicePixelRatio

  if (mode === 1) {
    width = `/w/${options.width * radio}`
    height = options.height ? `/h/${options.height * radio}` : `/h/${options.width * radio}`
  } else {
    width = options.width ? `/w/${options.width * radio}` : ''
    height = options.height ? `/h/${options.height * radio}` : ''
  }

  return `${link}?imageMogr2/auto-orient/strip|imageView2/${mode}${width}${height}${format}`
}
