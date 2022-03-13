export default class GoodsWidget {
    constructor(widgets) {
      this.widgets = widgets;
    }
  
    init() {
      this.widgets.forEach((widget) => widget.init());
    }
  }
  