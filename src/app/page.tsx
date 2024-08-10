import Image from "next/image";

export default function Home() {
  return (
    <>
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
      <div className="flex items-center justify-between min-h-[60vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 bg-pink-200">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="text-left max-w-xl space-y-6 md:pr-8">
            <p className="text-gray-600 text-sm">2023년 9월 - 현재</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              삐뽀 (Pippo)
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              AI 기반 반려동물 건강 모니터링 솔루션
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              자동 소변 검사 스틱 촬영 및 분석을 통해 반려견의 건강 상태를
              모니터링하는 모바일 앱입니다.
            </p>
            <div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
              >
                프로젝트 더 알아보기 →
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex-shrink-0">
            <Image
              src="/pippi_icon.png"
              alt="삐뽀 앱 아이콘"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
