import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
            "id": 1,
            "question": "Why should I use CodeBook?",
            "answer": "Using CodeBook can be a valuable way to access a diverse range of coding-related books, allowing you to learn at your own pace, deepen your knowledge, and stay up-to-date with the latest developments in the world of coding and programming."
        },
        {
            "id": 2,
            "question": "Can I access my eBook on mobile?",
            "answer": "Yes, you can access your eBooks purchased through CodeBook on your mobile device. Most eBook platforms and readers have mobile apps available for both iOS and Android. After purchasing a coding-related eBook from CodeBook, you can simply download the associated app, log in with your account, and access your eBooks on your mobile device. This allows you to learn and reference coding materials on the go, making it convenient for studying and practicing programming concepts anytime, anywhere."
        },
        {
            "id": 3,
            "question": "Do you offer refunds?",
            "answer": "Yes, refunds for purchases made on CodeBook are available. CodeBook likely has a refund policy in place for coding-related book purchases. To initiate a refund, you should refer to the refund policy section and follow the provided instructions. Be sure to adhere to any specified timeframes and conditions outlined in their policy to ensure a successful refund process."
        },
        {
            "id": 4,
            "question": "Do you support International payments?",
            "answer": "Yes, CodeBook likely supports international payments. Many online bookstores, including those selling coding-related books, typically accept various international payment methods such as credit cards, PayPal, and sometimes even local payment options, making it convenient for customers worldwide to make purchases. You should check the payment options provided on the CodeBook website to confirm their support for international payments."
        }
    ];

    return (
        <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                {faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq} />
                ))}
            </div>
        </section>
    )
}