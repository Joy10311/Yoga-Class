import React from 'react';
import img from '../../image/about.jpg'
import logo from '../../image/contact.jpg'

const About = () => {
    return (
        <div>
            <div className="grid grid-cols-2 mt-10">
                <img className="pl-20" src={img} alt="" />
                <div>
                    <h1 className="font-bold text-5xl text-left pb-5 ">Our <span className="text-red-700 underline ">Story</span></h1>
                    <h5 className="text-justify pr-20 font-semibold">Yogi is created with our passionate love for yoga. We would like to transform that love to the others and together build up a yoga community in town.
                        Yoga doesn’t take time, it gives time. Times for us to balance ourselves, to get peace back in our soul and keep calm before any matter in life. At Yogi, we help you to release your positive energy over the stress, negative power in today busy work and life. Peace out your mind with our yoga asanas and community events.
                        Yogi has regular classes in various styles including Hatha, Vinyasa, Flow, Kundalini and Yoga Dance. We have passionate and experienced yoga trainers who will not hesitate to answer any question for you and frequently guest trainers to give more advice about other asana styles. Every week, we have outdoor event or workshop for you to understand better about origins and benefits of yoga as well give advice for yoga practice.
                        Let’s join us at Yogi to find balance for your mind and body in daily life.</h5>
                </div>
            </div>

            <h2 className="pt-20 pl-5 font-bold text-4xl text-blue-700">Contact Us</h2>
            <div className="grid grid-cols-2 pb-20">
                <img className="pl-20 pt-20" src={logo} alt="" />
                <div className="mt-24 ml-40 pl-40">
                    <input className="border border-gray-800  pt-2 pb-2 pl-40 block" type="text" placeholder="NAME" />
                    <input className="border border-gray-800 mt-2 pt-2 pb-2 pl-40 block" type="text" placeholder="EMAIL" />
                    <input className="border border-gray-800 mt-2 pt-2 pb-2 pl-40 block" type="text" placeholder="NUMBER" />
                    <input className="border border-gray-800 mt-2 pt-14 pl-40 pb-14 block" type="text" placeholder="Enter your Messege" />
                    <button className="border border-gray-800 block mt-2  p-2 bg-blue-700 text-white rounded-lg">Send Messege</button>

                </div>
            </div>


        </div>



    );
};

export default About;