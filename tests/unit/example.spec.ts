import { shallowMount } from '@vue/test-utils';
import WorkInProgress from '@/components/WorkInProgress.vue'; // @ is an alias to /src

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(WorkInProgress, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
