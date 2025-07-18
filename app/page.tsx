import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, DollarSign, Users, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            自信ゼロでも大丈夫。
            <br />
            たった<span className="text-blue-600">60分</span>で<br />
            <span className="text-orange-500">"売れるLP"</span>があなたの手に。
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            プロンプトに答えるだけ。無料ツール×マニュアルで、
            <br />
            誰でも今日からWeb発信をスタート。
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🔶 今すぐLPを作ってみる
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">3つの特長で、もう迷わない</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-2 hover:border-blue-300 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">質問に答えるだけ</h3>
                <p className="text-gray-600 mb-4">「何を書けばいいかわからない…」を解消。プロンプト式で自動生成</p>
                <p className="text-sm text-blue-600 font-medium">"もう文章で悩まない！"</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-green-300 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">無料ツールだけ</h3>
                <p className="text-gray-600 mb-4">高額ツール不要。V0＋GitHub＋ChatGPTで低コスト実現</p>
                <p className="text-sm text-green-600 font-medium">"お財布に優しい！"</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-purple-300 transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">初心者でも迷わない</h3>
                <p className="text-gray-600 mb-4">クリックの順番までわかるステップガイド付き</p>
                <p className="text-sm text-purple-600 font-medium">"PC苦手でも安心！"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">あなたの未来が変わります</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">Before</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span>PCが苦手でなかなか始められない</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span>発信したいのに、ページがない</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span>どこに頼めばいいかすらわからない</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">After</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>自分のサービスを紹介できるページが完成！</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>SNSプロフィールにURLを載せてすぐ集客可能に</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>自信をもって「わたしのページ」と言えるように</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">料金プラン</h2>
          <Card className="p-8 border-4 border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-orange-600 mb-2">¥10,000</div>
                <div className="text-gray-600">（税込）</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>60分LP制作セッション</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>完全初心者対応ガイド</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>サポート付き</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg mb-6">
                <h4 className="font-bold text-gray-900 mb-2">🎁 特典</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• プロンプトテンプレート</li>
                  <li>• 成功する構成見本</li>
                  <li>• 無料公開の手順マニュアル</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">今すぐ始めましょう</h2>
          <p className="text-xl text-gray-300 mb-8">あなたの理想のランディングページを作成する準備はできていますか？</p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            🔶 申し込む（すぐにLP制作スタート）
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-800 text-white text-center">
        <p className="text-gray-400">© 2024 LP作成サービス. All rights reserved.</p>
      </footer>
    </div>
  )
}
