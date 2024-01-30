import React from 'react'
import { FAQItem } from '../components/faq/FAQItem'
import { PageTitle } from '../components/title/PageTitle'

export const FAQs = () => {
    return (
        <div id='faqs' className='text-white bg-black px-5 lg:px-10 py-10'>
            <div className='max-w-5xl mx-auto'>
                <PageTitle title="FAQs" tagline="Have Questions?"/>
                <FAQItem
                    question="Are there any special financing options available for Adarsh Welkin Park Sky Residences?"
                    answer="We understand the importance of financing options. For detailed information on available financing plans, offers, and assistance, kindly get in touch with our sales team through the provided contact options."
                />
                <FAQItem
                    question="Can I customize the interior of my Adarsh Welkin Park residence?"
                    answer="Personalization is key! To explore customization options for your residence, including interior design choices, please connect with our customer service team. We're here to make your dream home uniquely yours."
                />
                <FAQItem
                    question=" What schools, hospitals, and other essential services are in proximity to Adarsh Welkin Park?"
                    answer="Community amenities matter. While the website provides an overview, for specific details on nearby schools, hospitals, and essential services, feel free to reach out to our team. We're happy to share insights into the neighborhood."
                />
                <FAQItem
                    question="How is the Adarsh Welkin Park community managed, and are there any ongoing community events or initiatives?"
                    answer="Community life is vital! To learn more about the management of the Adarsh Welkin Park community, ongoing events, and initiatives, please contact our community relations team for the latest updates and involvement opportunities."
                />
                <FAQItem
                    question="What are the green initiatives and sustainability practices implemented at Adarsh Welkin Park?"
                    answer="Sustainability matters. For comprehensive details on green initiatives and sustainability practices at Adarsh Welkin Park, please inquire with our sustainability team. We're committed to eco-friendly living and are happy to share our efforts with you."
                />
            </div>
        </div>
    )
}
