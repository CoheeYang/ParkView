import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-none px-4 py-4">
      <h1 className="text-3xl font-bold text-center mb-12">政策</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        {/* 左侧图片 */}
        <div className="relative">
          <Image 
            src="/other.jpeg" 
            alt="公司大楼" 
            width={80}
            height={80}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded">
            载图(Alt + A)
          </div>
        </div>

        {/* 右侧文字内容 */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            汽车租赁有限公司，自成立以来，一直专注为广大客户提供优质、便捷的汽车租赁服务。
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            作为一家专业的汽车租赁公司，我们致力于满足各类客户的出行需求，无论是商务出行、旅游度假
            还是日常通勤，我们都能为您提供合适的租赁方案。
          </p>

        </div>
      </div>
    </div>
  );
}