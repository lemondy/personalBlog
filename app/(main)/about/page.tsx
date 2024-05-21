import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

// const title = '关于lemondy'
const description =
  '我有后端开发、机器学习、数据挖掘、大数据处理、用户增长策略、用户画像、用户个性化推荐、内容创作等经验，可以为你解答相关的问题。'

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
        <p><b>个性化push策略：关键点是：选择合适的推送时间、选择用户最感兴趣的书籍、组装用户最感兴趣的文案；</b></p>
        <ul>
          <li>
            <strong>推送时机：</strong>
            推送时间的策略经过3个版本迭代：
            <ul>
              <li><b>第一版：</b>根据App活跃峰值时间点确定推送时间，和产品一起确定早上7点、上午10点、晚上19点三个固定的推送时间点；</li>
              <li><b>第二版：</b>根据用户在App内过去30天活跃数据，建设粗略版本用户常活跃时间段，然后在用户常活跃时间前半个小时进行推送；</li>
              <li><b>第三版：</b>根据腾讯系设备活跃实时信号，消费实时kafka设备活跃数据，实时推送；</li>
            </ul>

          </li>
          <li>
            <strong>人书召回:类似推荐系统，关键点是匹配用户最感兴趣的书籍，</strong>
            书籍匹配策略迭代了2个版本：
            <ul>
              <li>
                <b>第一版：</b>
                建设用户人-书评分表数据，评分表中记录每个用户对书籍的偏好分数；基于人-书-分数，建设书籍向量数据（book2vec）；基于用户向量和书籍向量，计算用户对书籍的偏好分数，推荐分数最高的书籍；
              </li>
              <li>
                <b>第二版：</b>
                增加多通道召回数据；建设用户在app内进30天的搜索/找书行为数据，基于找书通道进行书籍召回，然后和基于评分表召回通道结果交替进行推送；
              </li>
            </ul>
          </li>
          <li>
            <strong>文案点击预估模型：预估用户对每条候选文案的点击率</strong>
            文案点击率模型构建步骤：
            <ul>
              <li>
                <b>特征工程：</b>
                抽取用户画像特征、用户行为特征、文案特征；
              </li>
              <li>
                <b>模型选择：</b>
               Lightgbm建模，二分类问题、CTR预估；
              </li>
              <li>
                <b>模型评估：</b>
                AUC、F1、Precision、Recall；
              </li>
            </ul>
          </li>
        </ul>
        <p><b>新用户LTV预估：</b></p>
        <ul>
          <li>
            <strong>LTV计算公式</strong>
          </li>
          <li>
            <strong>实现步骤</strong>
            <ul>
              <li>特征工程</li>
              <li>模型选择：幂函数拟合、lightgbm、深度学习、MOE多目标尝试</li>
              <li>模型评估</li>
              <li>模型上线</li>
            </ul>
          </li>
        </ul>

        <p><b>老用户流失预测：</b></p>
        <ul>
          <li>
            <strong>流失预测模型</strong>
            <ul>
              <li>
                <b>用户流失口径定义:</b>
                优先和业务侧对齐业务侧口径，确定目标用户人群（新用户、老用户）；
                如果业务侧没有明确流失口径，可以通过用户活跃度、用户付费情况、用户行为等维度定义流失口径；
                通常可以基于用户行为的回访率拐点来确定流失口径；
              </li>
              <li>
                <b>特征工程:</b>
                <li>基础类：抽取用户近期（7天、30天、90天等）活跃、阅读、付费等维度特征；</li>
                <li>变化趋势类：加工用户行为变化率类特征，如前后两周活跃天数变化率、阅读时长变化率、付费金额/频次变化率；</li>
              </li>
              <li>
                <b>模型选择:</b>
                基于模型预测效果、模型复杂度、模型的可解释性等维度选择使用lightgbm模型；
                <li>
                  <b>模型调优：</b>
                  对于树模型，主要调优参数包括：树的棵树、树的深度、叶子节点数、学习率、正则化参数等；
                  这些参数一般可以通过网格搜索、贝叶斯优化等方式进行调优；
                </li>
              </li>
              <li>
                <b>模型评估：</b>
                <li>评估指标：AUC、F1、Precision、Recall；</li>
                <li>离线评估：将离线数据分位：训练集、验证集、测试集；在测试集上计算准召、F1等指标；</li>
                <li>线上评估：直接用模型预估最新的用户数据，N天后评估模型预估效果；</li>
              </li> 
              <li>
                <b>模型上线：离线利用用户最新的特征数据，执行预测模型，产出每个用户预测的流失概率；</b>
              </li>
            </ul>
          </li>
          <li>
            <strong>流失原因分析：通过分析用户流失原因，针对性的制定端内优化策略，降低用户流失率；</strong>
            <ul>
              <li>流失原因分析</li>
              <li>流失原因解决方案</li>
            </ul>
          </li>
        </ul>

        <p><b>用户运营增长：</b></p>
        <ul>
          <li>
            <strong>用户生命周期</strong>
            <ul>
              <li>用户分层</li>
              <li>用户生命周期定义</li>
              <li>用户生命周期策略</li>
            </ul>
          </li>
          <li>
            <strong>营销uplift模型</strong>
            <ul>
              <li>营销策略</li>
              <li>营销模型</li>
              <li>营销效果评估</li>
            </ul>
          </li>
          <li>
            <strong>红包/金币激励策略:</strong>
            金币激励策略通常能显著的拉新新用户、促进用户活跃、延长用户留存/活跃时间；但是红包/金币发出去的是真实成本，需要保持这个事项的ROI大于1才可以保证业务形态的可持续发展；

          </li>
        </ul>

        <p><b>用户画像标签挖掘：</b></p>
        <ul>
          <li>
            <strong>用户长短期兴趣：长期一般是指3个月的兴趣；短期一般是近2天；</strong>
          </li>
          <li>
            <strong>用户兴趣转移</strong>
          </li> 
        </ul>

        <p><b>账户打通IDMapping</b></p>
        <ul>
          <li>
            <strong>账户规则打通：通过规则将各种ID（设备ID、账号ID、cookieid等）归属到同一个自然人。</strong>
            <ul>
              <li>技术点：mapreduce、hive sql、hadoop、连通图</li>
              <li>主要逻辑：通过一条日志里面出现的多个id对，构建ID之间关系边，多个ID之间通过边形成图，然后通过连通图将整体划分出一个个子图；</li>
              <li>主要难点：数据量级大、数据脏（格式不统一、异常数据、作弊/刷子数据等）</li>
            </ul>
          </li>
          <li>
            <strong>账户模型策略打通：通过算法模型，预测多个设备维度是否是同一个自然人。</strong>
            <ul>
              <li>粗分桶</li>
              <li>精分桶</li>
              <li>模型打通/预测</li>
            </ul>
          </li>
          <li>
            <strong>ID在线打通查询服务</strong>
            <ul>
              <li>技术点：C++、Brpc服务、高性能</li>
              <li>主要逻辑：离线构建ID与自然人正反向关联关系，将映射关系导入在线kv存储，在线服务支持同一个自然人任意ID之间打通查询；</li>
            </ul>
          </li>
        </ul>      

        <p><b>有声小说字幕识别（ASR）</b></p>    
        <ul>
          <li>
            <strong>字幕识别模型</strong>
            <ul>
              <li>前期方案调研:对比了B站自动生成的字幕、飞书妙记、叮叮、讯飞、百度PaddleSpeech 语音转文本能力</li>
              <li>模型选择：fast-whisper(large-v2)</li>
              <li>模型效果：通过asr转录、人名修正/关键词修正、小说原文关联修正、幻听修正等操作，最后转录的WER在4%以内；</li>
            </ul>
          </li>
          <li>
            <strong>落地项目</strong>
            <ul>
              <li>广告片段识别：主要针对有声书前两分钟和后两分钟的音频进行广告识别；音频切片后，输入到whisper模型中；</li>
              <li>有声书字幕：
                主要经过步骤：asr模型字幕识别、音频字幕匹配原文修正、修正书名、作者名、主播名、关键字等、广告识别、标点符号增加；</li>
            </ul>
          </li>
        </ul>

        <h2>技能清单</h2>

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
