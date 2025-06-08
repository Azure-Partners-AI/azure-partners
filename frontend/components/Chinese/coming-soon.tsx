import { Metadata } from "next";

export const metadata: Metadata = {
  title: "即将推出 | Azure Partners",
  description: "此页面正在建设中，敬请期待。",
};

export default function ComingSoonPageZH() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">🚧 即将推出</h1>
      <p className="text-muted-foreground text-lg max-w-md">
        我们正在努力构建精彩内容，敬请稍后回来查看！
      </p>
    </main>
  );
}
