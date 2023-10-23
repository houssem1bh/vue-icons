import { mount } from '@vue/test-utils';
import SpinnerIcon from './Spinner.vue';

function mountComponent() {
  return mount(SpinnerIcon);
}

let wrapper;

describe('Spinner.vue', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set the spinner svg class attribute based on provided size and color props', async () => {
    const color = 'blue';
    const size = 'small';

    wrapper = mountComponent();
    await wrapper.setProps({
      color,
      size
    });

    const svg = wrapper.find('svg');

    expect(svg.classes().includes('fill-blue-600')).toBeTruthy();
    expect(svg.classes().includes('w-4', 'h-4')).toBeTruthy();
    expect(wrapper.vm.color).toEqual(color);
    expect(wrapper.vm.size).toEqual(size);
    expect(wrapper.vm.classList).toEqual('w-4 h-4 fill-blue-600');
  });
});
