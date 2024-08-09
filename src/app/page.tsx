export default function Home() {
  return (
    <div className="flex items-center justify-start h-[60vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="text-left max-w-2xl space-y-6">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          반갑습니다, 저는
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">심민규</h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          혁신적인 아이디어를 웹과 앱으로 구현하는
          <br />
          프론트엔드 개발자입니다.
        </p>
      </div>
    </div>
  );
}
