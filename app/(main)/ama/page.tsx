// import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

// import AlipayQR from './alipay-qr.jpg'
// import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
// import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = '关于lemondy'
const description =
  'lemondy 提供一对一的咨询服务（Ask Me Anything）。我有后端开发、机器学习、数据挖掘、大数据处理、用户增长策略、用户画像、内容创作等经验，可以为你解答相关的问题。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          About lemondy / 关于lemondy
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>教育经历</h2>
        <li>
          <b>硕士(Master's Degree)</b>：北京理工大学计算机学院(Beijing Institute of Technology)，软件工程专业，2014.9～2017.7
          <b>本科(Bachelor's degree)</b>：武汉纺织大学计算机学院(Wuhan Textile University)，软件工程，2010.9～2014.7
          
        </li>

        <h2>工作经历</h2>
        <p>我可以为你解答以下相关的问题：</p>
        <ul>
          <li>
            <b>前端/全栈开发</b>
            ：工作难找，或是寻求职场建议？想提升自己的工程师水平？还是想锐评
            React vs Vue？
          </li>
          <li>
            <b>UI/UX 设计</b>：不知道如何开始学习设计？想提升自己的设计水平？
          </li>
          <li>
            <b>创业经验</b>
            ：我是
            <RichLink href="https://zolplay.com" target="_blank">
              佐玩
            </RichLink>
            的创始人，现在带领着团队帮助游戏开发者打造协同平台。
          </li>
          <li>
            <b>英语技能</b>：英语能力不足，想提高自己的英语水平？想跟 Cali
            一样可以{' '}
            <RichLink
              href="https://y.qq.com/n/ryqq/songDetail/003c0O9B3firAU"
              favicon={false}
              target="_blank"
            >
              英文说唱
            </RichLink>
            ？
          </li>
          <li>
            <b>其他</b>
            ：我的美国留学与工作经验，内容创作，音乐制作经验等等都可以帮助你解答一些其他的问题。
          </li>
        </ul>
        <p>
          你也可以全程跟我用英语聊，我也非常乐意，因为可能我的英语比中文说的要好。。。
        </p>

        <h2>项目经历</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥150 - 30分钟</strong>
          </li>
          <li>
            <strong>¥300 - 60分钟</strong>
          </li>
        </ul>

        <h2>技能清单</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
        </p>
      </article>
    </Container>
  )
}
