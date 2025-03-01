'use client'

import { Button } from '@/components/ui'

import { ArrowIcon } from '@/ui/Icons/ArrowIcon'
import { TeamIcon } from '@/ui/Icons/TeamIcon'


export const MatchList = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex gap-6">
        <div className="flex flex-col justify-center w-full gap-6 ">
          <div
            key={`${1}`}
            className={
              'bg-gray-2 rounded-lg text-s_body overflow-hidden p-2 tb:py-4 tb:px-[36px] '
            }
          >
            <div className='flex-col tb:flex-row flex tb:flex-center-between'>
              <div className="flex justify-between flex-grow gap-1">
                <div className="flex-center-center gap-1 tb:gap-3">
                  <TeamIcon className="w-[28px] h-[28px] tb:w-[48px] tb:h-[48px]" />
                  <p className="text-white break-all whitespace-normal text-s_text tb:text-s_body">
                    {'Command № 1'}
                  </p>
                </div>
                <div className="flex-center-center flex-col gap-1">
                  <p className="text-s_text tb:text-s_h5">{'2 : 1'}</p>
                  <Button color={'green'} size={'m'}>
                    Live
                  </Button>
                </div>

                <div className="flex-center-center gap-1 tb:gap-3">
                  <p className="text-white text-left break-all whitespace-normal text-s_text tb:text-s_body">
                    {'Command № 2'}
                  </p>
                  <TeamIcon className="w-[28px] h-[28px] tb:w-[48px] tb:h-[48px]" />
                </div>
              </div>
              <ArrowIcon  className='self-center'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
