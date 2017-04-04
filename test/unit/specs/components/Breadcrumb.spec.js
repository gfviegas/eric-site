import Vue from 'vue'
import Breadcrumb from 'src/components/breadcrumb/Breadcrumb'

describe('components/breadcrumb/Breadcrumb.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Breadcrumb)
    })
    expect(vm.$el.querySelector('.level.lime .subtitle').textContent)
      .to.equal('Home / Home')
  })
})
