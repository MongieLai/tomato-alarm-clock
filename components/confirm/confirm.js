Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ""
    }
  },
  data: {
    text: ""
  },
  methods: {
    cancel() {
      this.triggerEvent('cancel')
    },
    confirm() {
      this.triggerEvent('confirm', this.data.text)
    },
    watchValue(event) {
      this.data.text = event.detail.value
    }
  }
})