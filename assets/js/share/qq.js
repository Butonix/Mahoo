// http://open.mobile.qq.com/api/component/share

export default class {
  constructor(config) {
    this.config = config
  }

  init() {
    if (typeof window === 'undefined' || typeof window.setShareInfo === 'undefined') {
      return
    }

    setShareInfo({
      title: this.getShareTitle(), // 分享标题
      summary: this.getShareDesc(), // 分享内容
      pic: this.getShareImage(), // 分享图片
      url: this.getShareLink(), // 分享链接
      // 微信权限验证配置信息，若不在微信传播，可忽略
      WXconfig: {
        swapTitleInWX: true,
        appId: this.config.appId,
        nonceStr: this.config.nonceStr,
        timestamp: this.config.timestamp,
        signature: this.config.signature
      }
    })
  }

  getShareTitle() {
    return this.shareData().title
  }

  getShareLink() {
    return this.shareData().link
  }

  getShareDesc() {
    return this.shareData().desc
  }

  getShareImage() {
    return this.shareData().image
  }

  shareData() {
    return {
      link: window.location.href,
      title: document.title,
      desc: document.querySelector('[name=description]').getAttribute('content'),
      image: 'http://m1.calibur.tv/default-poster-sharejpg120'
    }
  }
}