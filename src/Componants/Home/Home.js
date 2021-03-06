import React from 'react';
import ReviewHomePage from '../Review/ReviewHomePage';
import image from './massage.jpg';

const Home = () => {
    return (
        <section>
            <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center">
                    <div className='order-2 md:order-1'>
                        <h1 className='text-center text-3xl font-bold'>ম্যাসেজ</h1>
                        <h3 className=' text-center text-20 pb-4'>আধুনিক মননে দ্বীনের ছোঁয়া</h3>
                        <p>ইসলাম এক নক্ষত্র, যার সংস্পর্শে সমস্ত আঁধার বিলীন হয়ে যায়, ঘাের অমানিশাও তাতে নিজেকে সঁপে দিয়ে আলােকোজ্জ্বল হয়। ইসলাম তাে এমন এক জ্যোতিষ্ক, যা উৎসারিত হয়েছে আরশে আজিমের মহিমান্বিত রওশন থেকে। জাহেলিয়াত পরাজয় কবুল করেছিল ইসলামের বুকে আশ্রয় পেয়ে। এই পবিত্র দ্বীন আত্মাকে-করেছে প্রশান্ত, চরিত্রকে করেছে নিষ্কলুষ, জীবনকে-করেছে সার্থক, মানবতাকে দিয়েছে মুক্তি। এর আলােকচ্ছটা যে জমিনে পড়েছে, সেখানে অঙ্কুরিত হয়েছে শান্তির সবুজ তরু। এই রওশনের ঝলক যে হৃদয় ধারণ করেছে, সে হৃদয় হয়েছে দারাজ দিল । যে যুগ ধারণ করেছে, তা হয়েছে খইরুল কুরুন বা সর্বোত্তম যুগ। কিন্তু হায়! অজ্ঞতা ও অবহেলার কালাে মেঘে সেই সূর্য আজ মেঘলুপ্ত। আলােহীন এ ধরায় উঠে না প্রাণের জোয়ার। তােলে না কেউ আর মানবতার জয়ােধ্বনি। অধিকার হারিয়ে মুমুষুপ্রায় মানবতা। নব্য জাহেলিয়াতের এই গাঢ়-কালাে মেঘপুঞ্জ চূর্ণ করতে দরকার একটি নির্ভেজাল ঈমানি দমকা হাওয়া; যে হাওয়ায় জ্ঞানের সৌরভ মিশে মােহিত করবে প্রতিটি হৃদয়। সেই মােহনীয় দক্ষিণা হাওয়ার গুঞ্জন তুলতেই আমাদের আয়ােজন-ম্যাসেজ।</p>
                        <button className="py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0 rounded-full">অর্ডার করুন</button>
                    </div>
                    <div className='flex order-1 md:order-2 justify-center items-center'>
                        <img className='w-100' src={image} alt="" />
                    </div>
                </div>
            </div >
            <ReviewHomePage />
        </section>
    );
};

export default Home;