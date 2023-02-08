//typescript工具

//背景图片自适应不变形实现
interface ImageClass {
    name: string
    url: string
    wrap: HTMLElement | any
    controlImage(wrap: HTMLElement | any): void
}

export class BgImageAuto implements ImageClass {
    public name
    public url
    public img
    public wrap
    constructor(name: string, url: string, wrap: HTMLElement | any) {
        this.name = name
        this.url = url
        this.wrap = wrap
        this.img = new Image()
        this.img.src = this.url
        this.wrap.style.background = `url(${this.img.src}) center / auto 100% no-repeat`
        this.controlImage()
    }

    //
    controlImage(): void {
        if (
            this.wrap.offsetWidth / this.wrap.offsetHeight >=
            this.img.naturalWidth / this.img.naturalHeight
        ) {
            this.wrap.style.backgroundSize = '100% auto'
        } else {
            this.wrap.style.backgroundSize = 'auto 100%'
        }
    }
}

export class BgImagesAuto implements ImageClass {
    public name
    public url
    public img
    public wrap
    constructor(name: string, url: string, wrap: HTMLElement | any) {
        this.name = name
        this.url = url
        this.wrap = wrap
        this.img = new Image()
        this.img.src = this.url
        this.wrap.style.background = `url(${this.img.src}) center / auto 100% no-repeat`
        this.controlImage()
    }

    //
    controlImage(): void {
        if (
            this.wrap.offsetWidth / this.wrap.offsetHeight >=
            this.img.naturalWidth / this.img.naturalHeight
        ) {
            this.wrap.style.backgroundSize = '100% auto'
        } else {
            this.wrap.style.backgroundSize = 'auto 100%'
        }
    }
}
