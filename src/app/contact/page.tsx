import { ICON_PHONE, ICON_MAIL } from "@/lib/figmaAssets";

export default function ContactPage() {
  return (
    <div className="py-10">
      {/* Breadcrumb */}
      <div className="content-stretch flex gap-[12px] items-center mb-10">
        <p className="font-['Poppins'] leading-[21px] text-[14px] text-black dark:text-white opacity-50">Home</p>
        <span className="text-black dark:text-white opacity-50">&gt;</span>
        <p className="font-['Poppins'] leading-[21px] text-[14px] text-black dark:text-white">Contact</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="bg-white dark:bg-black rounded-[4px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_1px_13px_0px_rgba(255,255,255,0.05)] p-8">
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[16px] items-center">
              <div className="bg-[#db4444] rounded-full p-2">
                <img src={ICON_PHONE} alt="Phone" className="size-6 dark:invert" />
              </div>
              <p className="font-['Poppins'] font-medium text-[16px] text-black dark:text-white">Call To Us</p>
            </div>
            <p className="font-['Poppins'] text-[14px] text-black dark:text-white">We are available 24/7, 7 days a week.</p>
            <p className="font-['Poppins'] text-[14px] text-black dark:text-white">Phone: +8801611112222</p>
          </div>
          <hr className="my-6 opacity-50" />
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[16px] items-center">
              <div className="bg-[#db4444] rounded-full p-2">
                <img src={ICON_MAIL} alt="Mail" className="size-6 dark:invert" />
              </div>
              <p className="font-['Poppins'] font-medium text-[16px] text-black dark:text-white">Write To US</p>
            </div>
            <p className="font-['Poppins'] text-[14px] text-black dark:text-white">Fill out our form and we will contact you within 24 hours.</p>
            <p className="font-['Poppins'] text-[14px] text-black dark:text-white">Emails: customer@exclusive.com</p>
            <p className="font-['Poppins'] text-[14px] text-black dark:text-white">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white dark:bg-black rounded-[4px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_1px_13px_0px_rgba(255,255,255,0.05)] p-8 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <input placeholder="Your Name *" className="bg-neutral-100 dark:bg-neutral-800 rounded-[4px] p-3 font-['Poppins'] text-[16px] text-black dark:text-white placeholder:opacity-50" />
            <input placeholder="Your Email *" className="bg-neutral-100 dark:bg-neutral-800 rounded-[4px] p-3 font-['Poppins'] text-[16px] text-black dark:text-white placeholder:opacity-50" />
            <input placeholder="Your Phone *" className="bg-neutral-100 dark:bg-neutral-800 rounded-[4px] p-3 font-['Poppins'] text-[16px] text-black dark:text-white placeholder:opacity-50" />
          </div>
          <textarea placeholder="Your Message" className="bg-neutral-100 dark:bg-neutral-800 rounded-[4px] p-3 font-['Poppins'] text-[16px] text-black dark:text-white placeholder:opacity-50 w-full h-52 mb-8" />
          <button className="bg-[#db4444] text-white font-['Poppins'] font-medium text-[16px] px-[48px] py-[16px] rounded-[4px]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
