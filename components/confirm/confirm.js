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
      this.triggerEvent('cancel', 123321312)
    },
    confirm() {
      this.triggerEvent('confirm', this.data.text)
    },
    watchValue(event){
      console.log(event.detail.value)
      this.data.text = event.detail.value
    }
  }
})