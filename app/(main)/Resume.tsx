import Image from 'next/image'
import React from 'react'

import { BriefcaseIcon } from '~/assets'
import baidu from '~/assets/company/baidu.png'
import bytedance from '~/assets/company/bytedance.png'
import tieba from '~/assets/company/tieba.png'
import yuewen from '~/assets/company/yuewen.png'


type Resume = {
  company: string
  title: string
  start: string | { label: string; dateTime: number }
  end: string | { label: string; dateTime: number }
  logo: StaticImageData
}
const resume: Resume[] = [
  {
    company: '阅文集团',
    title: '用户画像资深算法策略工程师',
    logo: yuewen,
    start: '2020',
    end: {
      label: '至今',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Bytedance',
    title: '资深数据挖掘工程师',
    logo: bytedance,
    start: '2019',
    end: '2020',
  },
  {
    company: 'Baidu',
    title: '高级大数据工程师&后端开发',
    logo: baidu,
    start: '2017',
    end: '2019',
  },
  {
    company: 'Baidu Tieba',
    title: '大数据工程师',
    logo: tieba,
    start: '2016',
    end: '2017',
  },
]

function getRoleDate(date: Resume['start'] | Resume['end'], label = true) {
  if (typeof date === 'string') {
    return date
  }

  if (label) {
    return date.label
  } else {
    return String(date.dateTime)
  }
}

export function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        <span className="ml-2">工作经历</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={role.company}
                className="h-8 w-8 rounded-full"
                width={100}
                height={100}
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">公司</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">职位</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">日期</dt>
              <dd className="ml-auto text-xs text-zinc-500/80 dark:text-zinc-400/80">
                {role.start}
                <span aria-hidden="true">—</span> {role.end ?? '至今'}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}
