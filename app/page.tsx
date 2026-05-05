import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-pink-100 py-6 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-[#e85d8a] tracking-wide">Shu<span className="text-[#c94a73]">★</span>Stars</h1>
          <p className="text-sm text-gray-400 mt-1">by Aviv Shuster</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        {/* Greeting */}
        <section className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">היי! 👋</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            איזה כיף שהחלטת לקחת את הריצה שלך יותר ברצינות ולעשות מה שאפשר כדי להשתפר.
          </p>
          <p className="text-gray-600 leading-relaxed">
            ההמלצה שלי? להתחיל לאט לאט ובהדרגה להוסיף תרגילים, אימוני כוח וגם להתחיל לעבוד עם תוכנית מסודרת.
          </p>
        </section>

        {/* Step 1 */}
        <section className="bg-pink-50 border border-pink-200 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#e85d8a] text-white text-sm font-bold px-3 py-1 rounded-full">דבר ראשון</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            בתחילת כל אימון, אחרי החימום, מומלץ בחום לעצור ולבצע הנפות רגליים וכמה מהתרגילים בסרטון הבא:
          </p>
          <Link
            href="https://www.instagram.com/reel/C7tguO_oRs2/?igsh=MWdnczByaGF6cjgzNQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e85d8a] hover:bg-[#c94a73] text-white font-medium px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            סרטון Instagram - הנפות רגליים
          </Link>
        </section>

        {/* Step 2 */}
        <section className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">דבר שני</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            כאן יש תרגילי טכניקה - ככל שמתמידים ומשקיעים בהם יותר, מרגישים את יעילות הריצה משתפרת:
          </p>
          <Link
            href="https://youtube.com/playlist?list=PLX5srtjZmF6UXRRsDBTn1L-xS9DrOZyUA&si=IjUgzlmccXdKl4I9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            פלייליסט YouTube - תרגילי טכניקה
          </Link>

          <div className="mt-4">
            <p className="text-gray-700 font-semibold mb-3">יעילות ריצה גבוהה מביאה ל:</p>
            <ul className="space-y-2">
              {[
                "שיפור בקצב הריצה",
                "מניעת פציעות",
                "התאוששות טובה יותר",
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#e85d8a] text-lg">➡</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Step 3 */}
        <section className="bg-orange-50 border border-orange-200 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">דבר אחרון</span>

          </div>
          <p className="text-gray-700 leading-relaxed">
            יש לי <strong>תוכנית אימוני כוח בסיסית במחיר מצחיק לכל החיים</strong>. שווה להכנס אליה ולהתחיל לעשות אותה, פעמיים בשבוע לפחות.
          </p>
          <Link
            href="https://my.schooler.biz/s/108487/strength4runnersBASE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            תוכנית אימוני כוח - Strength4Runners BASE
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-[#fdf0f5] border border-[#f5c0d4] rounded-2xl p-6 space-y-3 text-center">
          <p className="text-gray-700 text-lg font-medium">
            רוצה להתחיל לעבוד עם תוכנית מסודרת?
          </p>
          <p className="text-gray-600">
            פה יש לך את כל הקורסים בבית הספר שלי - תבחרו את זה שמתאים לרמה שלכם:
          </p>
          <Link
            href="https://my.schooler.biz/s/108487/bundles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e85d8a] hover:bg-[#c94a73] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            לכל הקורסים שלי ←
          </Link>
        </section>

        {/* Signature */}
        <footer className="text-center py-6 space-y-2">
          <p className="text-xl font-bold text-gray-800">בהצלחה!</p>
          <p className="text-[#e85d8a] font-semibold text-lg">אביב שוסטר</p>
          <p className="text-gray-500 text-sm">
            בעלים ומאמנת ראשית במועדון ריצה ה&quot;שוסטארס&quot;, יזמית ויוצרת התוכנית &quot;ריצהקלה&quot;
          </p>
        </footer>
      </main>
    </div>
  )
}
