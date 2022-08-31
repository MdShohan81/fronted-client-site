import React from 'react';
import './Blogs.css';



const Blogs = () => {
    return (
        <div >
            <div class="hero min-h-screen bg-blog" >
            <div class="hero-overlay bg-opacity-70"></div>
            <div class="hero-content text-center md:text-start lg:text-start">
                <div class="lg:min-w-md ">
                    <h1 class="mb-5 text-primary  lg:text-6xl md:text-6xl text-3xl font-bold text-center">How to create a classic</h1>
                    <p class="mb-5 lg:text-4xl md:text-4xl text-xl text-white">A shadowy flight into the dangerous world of a man who does not exist. Flying away on a wing and a prayer. Who could it be.</p>
                    <p class="mb-5text-xl text-white font-bold">A meeting between two design giants: One is the most influential car designer of the 20th century. The other is leading the design for the entire BMW Group into a new, fascinating, yet challenging era. We spoke to Giorgio Giugiaro and Adrian van Hooydonk during the Concorso d’Eleganza Villa d’Este at Lake Como about the legendary BMW M1, designed by Giugiaro, the future of the BMW design language, and the design challenges they are currently facing.</p>
                    </div>
                </div>
            </div>
            <div className='my-8 p-8 card shadow-xl border border-1 border-primary mx-8'>
                <h1 className='text-2xl font-semibold mb-4'>Mr. Giugiaro, Mr. van Hooydonk, let’s start by talking a little about the past, the present, and future of BMW Design</h1>
                <p className='text-primary font-medium mb-4'>Then the question is about the past and the future: What do you feel when you see the beautiful BMW M1 here in this stunning landscape? After all, we are celebrating 50 years of the BMW M.</p>
                <p className='font-medium mb-4'>Giugiaro: A person who has dedicated their whole life to research and design usually only gets to see whether their work was good and meaningful many decades after the fact. At the same time, they also see what they could have done better. When I see the BMW M1 here, I’m surprised. It’s a bit egoistical of me, but I could say that it’s a pleasant surprise. I think the vehicle still has a raison d’être.</p>
                <p className='font-medium mb-4'>Adrian van Hooydonk: When I look at the BMW M1, I see a very exciting but in no way complicated vehicle. What’s more, it’s a compact sports car. I like these three components. That’s why the BMW M1 is still – and will continue to be – an outstanding example of how you don’t have to make things overly difficult to create a strong character and an exciting vehicle.</p>
            </div>
            <div className='my-8 p-8 card shadow-xl border border-1 border-primary mx-8'>
                <h1 className='text-2xl font-semibold mb-4'>Would you get in and go for a drive?</h1>
                <p className='text-primary font-medium mb-4'>van Hooydonk: Of course! I have already driven the BMW M1 and, although it is not built for really tall people like me, it’s one of those cars that you can fit into.</p>
                <p className='font-medium mb-4'>Giugiaro: It’s a sports car that can accommodate even Mr. van Hooydonk, thanks to its spaciousness. So it’s not really all that cramped – in that sense, it’s a fairly tame sports car.</p>
                <p className='font-medium mb-4'>Adrian van Hooydonk: When I look at the BMW M1, I see a very exciting but in no way complicated vehicle. What’s more, it’s a compact sports car. I like these three components. That’s why the BMW M1 is still – and will continue to be – an outstanding example of how you don’t have to make things overly difficult to create a strong character and an exciting vehicle.</p>
            </div>
            <div className='my-8 p-8 card shadow-xl border border-1 border-primary mx-8'>
                <h1 className='text-2xl font-semibold mb-4'>What did the unusual design of the BMW M1 mean for BMW back in 1978? And what does it tell us now when we look at the modern BMW vehicles of the present?</h1>
                <p className='text-primary font-medium mb-4'>van Hooydonk: The BMW M1 was the first real, 100 percent BMW M model. As we all know, BMW M started out as a motorsport company which then had the idea of building a road vehicle. The BMW M1 is the first. It was designed to be a performance car from the beginning. But Mr. Giugiaro knows the whole story much better (laughs)</p>
                <p className='font-medium mb-4'>Giugiaro: It was a time in which design and architecture were going through major changes. It was a time in which the series production vehicles were somewhat flattened due to various design requirements. The BMW M1 reflects these characteristics wonderfully: It is as wide as possible and has a very angular design. The question is whether its impact has suffered or benefited due to the changes of the past decades. That offers enough room for interpretation. Change is inevitable – it just is. In the past, there was a big difference between sports cars like the BMW M1 and the high-performance series production vehicles. Today, everything is a lot closer together.</p>
            </div>
        </div>
    );
};

export default Blogs;