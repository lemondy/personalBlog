import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

// const title = '关于lemondy'
const description =
  'lemondy 提供一对一的咨询服务（Ask Me Anything）。我有后端开发、机器学习、数据挖掘、大数据处理、用户增长策略、用户画像、内容创作等经验，可以为你解答相关的问题。'

export default function AboutPage() {
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
          <b>硕士(Master Degree)</b>：北京理工大学计算机学院(Beijing Institute of Technology)，软件工程专业，2014.9～2017.7
        </li>
        <li>
        <b>本科(Bachelor degree)</b>：武汉纺织大学计算机学院(Wuhan Textile University)，软件工程，2010.9～2014.7
        </li>
        <li>  
        <b>通过英语CET4/6考试</b> 
        </li>

        <h2>工作经历</h2>
        <p>我这几年：</p>
        <ul>
          <li>
            <b>阅文集团 - 资深用户画像数据挖掘工程师 - 2020.10~至今</b>
            ：主要负责用户画像标签的挖掘、用户增长策略、内容推荐等工作。
          </li>
          <li>
            <b>字节跳动 - 高级数据挖掘工程师 - 2019.9~2020.10</b>：承担过数据分析师、用户增长算法工程师、服务端开发等工作。
          </li>
          <li>
            <b>百度 - 数据挖掘工程师 - 2017.3~2019.9</b>
            ：主要是大数据开发和服务端开发。 
          </li>
        
        </ul>

        <h2>项目经历</h2>
        <p><b>个性化push策略：</b></p>
        <ul>
          <li>
            <strong>人书召回</strong>
          </li>
          <li>
            <strong>文案个性化模型</strong>
          </li>
        </ul>
        <p><b>新用户LTV预估：</b></p>
        <ul>
          <li>
            <strong>LTV计算公式</strong>
          </li>
          <li>
            <strong>预估模型</strong>
          </li>
        </ul>

        <p><b>老用户流失预测：</b></p>
        <ul>
          <li>
            <strong>流失预测模型</strong>
          </li>
          <li>
            <strong>流失原因分析</strong>
          </li>
        </ul>

        <p><b>用户运营增长：</b></p>
        <ul>
          <li>
            <strong>用户生命周期</strong>
          </li>
          <li>
            <strong>用户价格敏感度</strong>
          </li>
          <li>
            <strong>营销uplift模型</strong>
          </li>
        </ul>

        <p><b>用户画像标签挖掘：</b></p>
        <ul>
          <li>
            <strong>用户长短期兴趣</strong>
          </li>
          <li>
            <strong>用户兴趣转移</strong>
          </li> 
          <li>
            <strong>标签使用策略</strong>
          </li>
        </ul>

        <p><b>账户打通IDMapping</b></p>
        <ul>
          <li>
            <strong>账户规则打通</strong>
          </li>
          <li>
            <strong>账户模型策略打通</strong>
          </li>
          <li>
            <strong>在线服务</strong>
          </li>
        </ul>      

        <p><b>有声小说字幕识别（ASR）</b></p>    
        <ul>
          <li>
            <strong>字幕识别模型</strong>
          </li>
          <li>
            <strong>字幕识别策略</strong>
          </li>
        </ul>

        <h2>技能清单</h2>
        <p>
          
        </p>
        <ul>
          <li>
          <b>编程语言：</b><strong>Python、Java、C++、Go、Shell</strong>
          </li>
          <li>
            <b>大数据处理：</b><strong>SQL、Hive、Spark、MapReduce、PySpark、hadoop</strong>
          </li>
          <li>
            <b>机器学习：</b><strong>Tensorflow、Keras、PyTorch、Scikit-learn、聚类算法、XGBoost、Lightgbm、DeepFm</strong>
         </li>  
        </ul>

        <h2>其他</h2>
        <ul>
          <li>
            <b>专利：</b>
            <RichLink href="https://aiqicha.baidu.com/patent/info?referId=f35802485b8d47d0998a76338af33caccdda1b5e&pid=28783255028393" target="_blank">
            用户标识关联查询方法、装置、设备及可读存储介质
              </RichLink>
          </li>
        </ul>

      </article>
    </Container>
  )
}
