import { Popover } from '@headlessui/react';

import { ChatTeardropDots } from 'phosphor-react';

export default function Widget() {
  return (
    <Popover className='absolute bottom-5 right-5'>
      <Popover.Panel>
        Olá mundo
      </Popover.Panel>

      <Popover.Button
        className='bg-brand-500 rounded-full px-3 h-12 flex items-center group'
      >
        <ChatTeardropDots className='w-6 h-6 text-white' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2 text-white'>Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
