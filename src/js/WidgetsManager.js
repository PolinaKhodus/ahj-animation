/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default class GoodsWidget {
    constructor(widgets) {
      this.widgets = widgets;
    }

    init() {
      this.widgets.forEach((widget) => widget.init());
    }
  }
