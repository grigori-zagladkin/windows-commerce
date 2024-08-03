import { FC } from 'react';

const ContactPage: FC = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='w-full h-14 bg-neutral-50 flex justify-center'>
                <div className='flex items-center justify-between max-w-[800px]'>
                    <div className='mr-20'>Logo</div>
                    <ul className='flex gap-6 items-center justify-between'>
                        <li>главная</li>
                        <li>категории</li>
                        <li>доставка</li>
                        <li>контакты</li>
                        <li>оплата</li>
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-2 place-items-stretch mx-auto max-w-[800px] gap-6'>
                <ul className='flex gap-3 flex-col items-start max-w-[400px]'>
                    <li>
                        <h2 className='font-semibold mb-1'>Адрес</h2>
                        <p className='font-light text-sm'>г. Ярославль, ул. Гагарина, д. 54а</p>
                    </li>
                    <li>
                        <h2 className='font-semibold mb-1'>Как добраться?</h2>
                        <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto atque deleniti dicta dolorum eaque</p>
                    </li>
                    <li>
                        <h2 className='font-semibold mb-1'>Номер телефона</h2>
                        <p className='font-light text-sm'>+7 (920) 174 15 73</p>
                    </li>
                    <li>
                        <h2 className='font-semibold mb-1'>Мессенджеры</h2>
                        <ul className='flex items-center gap-2'>
                            {
                                Array.from({ length: 5}).map((item, idx) => (
                                    <li key={idx} className='w-4 h-4 rounded-sm bg-sky-500' />
                                ))
                            }
                        </ul>
                    </li>
                    <li>
                        <h2 className='font-semibold mb-1'>Оплата</h2>
                        <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam deleniti dolorem eveniet ipsa ipsam provident recusandae veniam!</p>
                    </li>
                </ul>
                <ul className='flex gap-3 flex-col items-start max-w-[400px]'>
                    <li>
                        <h2 className='font-semibold mb-1'>Мы на карте</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d17114.44499627804!2d39.78774844193397!3d57.57526564377293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTfCsDM0JzMwLjkiTiAzOcKwNDknMjguNiJF!5e0!3m2!1sru!2sru!4v1722527122388!5m2!1sru!2sru"
                            width="600"
                            height="450"
                            className='border-0'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </li>
                    <li>
                        <h2 className='font-semibold mb-1'>Доставка</h2>
                        <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dignissimos eos excepturi harum hic illum inventore temporibus voluptates.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactPage;