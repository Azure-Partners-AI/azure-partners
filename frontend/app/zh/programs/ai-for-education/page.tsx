import { Check } from 'lucide-react';

export const metadata = {
  title: '教育领域的AI | Azure Partners',
  description: '了解如何在教育中利用人工智能，实现个性化学习、课程设计、评估反馈与学生支持。',
};

export default function AIforEducationPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            教育领域的AI
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">
              教育领域的AI是指通过人工智能技术提升教学、学习和教育管理效率。应用范围包括智能教学系统、
              AI驱动的课程设计、学生个性化支持等多个方面。
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">应用场景</h2>
            
            <div className="space-y-6">
              <UseCase 
                title="个性化学习"
                items={[
                  "AI根据每位学生的学习节奏、风格和进度自适应调整内容",
                  "如ChatGPT这样的工具可作为实时答疑的私人导师",
                  "生成个性化学习计划和学习路径"
                ]}
              />

              <UseCase 
                title="课程与内容生成"
                items={[
                  "自动生成练习题、抽认卡和课程教案",
                  "将复杂知识简化为适合不同年级学生的内容",
                  "创建互动式教学材料与学习模拟场景"
                ]}
              />

              <UseCase 
                title="作业批改与反馈"
                items={[
                  "AI可自动批改作文、项目或编程作业，并提供即时反馈",
                  "教师节省时间，学生获得大规模定制化评语",
                  "跟踪学习进度，识别待改进领域"
                ]}
              />

              <UseCase 
                title="语言学习与沟通"
                items={[
                  "提供实时翻译、语法纠正和会话练习功能",
                  "帮助学生与非母语教师提升语言表达与理解",
                  "打造沉浸式语言学习体验"
                ]}
              />

              <UseCase 
                title="学生支持与参与度管理"
                items={[
                  "AI聊天机器人可全天候回答行政或学术问题",
                  "智能代理追踪学生参与度，预警学习落后的学生",
                  "通过AI辅导提供心理健康与情绪支持"
                ]}
              />

              <UseCase 
                title="教育机构运营"
                items={[
                  "自动化处理招生筛选、成绩单解析、课程排期等流程",
                  "分析课程表现数据，提升教学质量",
                  "优化资源配置与行政效率"
                ]}
              />
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6">教育AI常用工具</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>大语言模型（如 GPT-4、Claude）：用于辅导、写作辅助、互动问答</li>
              <li>RAG 系统：用于搜索教学资料或学校政策</li>
              <li>AI增强的学习管理系统（LMS）：个性化推荐学习内容</li>
              <li>自然语言处理（NLP）：用于语言学习与自动评分</li>
              <li>计算机视觉：用于在线监考和学生参与度分析</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

function UseCase({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
