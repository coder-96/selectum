import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import Navbar from "./Navbar";
import { motion } from "framer-motion";
import teamsunset from "../images/team-sunset.jpg";
import istanbulbg from "../images/about-bg-istanbul.jpg";

import cook from "../images/cook.jpg";
import bellboy from "../images/bellboy.jpg";
import housekeeper from "../images/housekeeper.jpg";
import animator from "../images/animators.jpg";
import dishwasher from "../images/dishwasher.jpg";
import bartender from "../images/bartender.jpg";
import waiter from "../images/waiter2.jpg";
import receptionist from "../images/receptionist.jpg";

import Feature from "./Feature";
import Footer from "./Footer";

function App() {
    const posts = [
        {
            title: "ПОВАР",
            desc: "С опытом работы и обязательно диплом либо сертификат об окончании кулинарных курсов",
            img: cook,
        },
        {
            title: "БЕЛБОЙ",
            desc: "Все мужчины от 18 до 45 лет",
            img: bellboy,
        },
        {
            title: "ГОРНИЧНЫЕ",
            desc: "Все девушки от 18 до 45 лет",
            img: housekeeper,
        },
        {
            title: "АНИМАТОР",
            desc: "Все мужчины, девушки от 18 до 45 лет",
            img: animator,
        },
        {
            title: "ПОСУДОМОЙЩИК",
            desc: "Все мужчины от 18 до 45 лет",
            img: dishwasher,
        },
        {
            title: "БАРМЕН",
            desc: "Обязательно с опытом работы и со знанием турецкого языка, либо английского языка, а также уверенные знания алкогольных и безалкогольных напитков",
            img: bartender,
        },
        {
            title: "ОФИЦИАНТ В РЕСТОРАНЕ",
            desc: "С опытом работы и со знанием турецкого языка, либо английского языка",
            img: waiter,
        },
        {
            title: "РЕСЕПШИОНИСТ",
            desc: "Со знанием турецкого, английского или немецкого языка. Желательно опыт работы",
            img: receptionist,
        },
    ];

    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    const textAnimation2 = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    };



    return (
        <div className="app">
            <Navbar />

            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                className="hero"
                id="main"
            >
                {/* <img className="" src={teamsunset} alt="team at sunsets" /> */}
                <motion.h1 variants={textAnimation}>
                    <span>SELECTUM</span> КОНСАЛТИНГ
                </motion.h1>
                <motion.p variants={textAnimation}>
                    Вас приветствует команда <span>SELECTUM</span> Консалтинг
                </motion.p>
                <motion.div variants={textAnimation} className="btn-regis">
                    <a href="http://wa.me/996550069798">Запись на консультацию</a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                className="about"
                id="aboutinfo"
            >
                {/* <img className="" src={istanbulbg} alt="istanbul" /> */}
                <motion.h2 custom={1} variants={textAnimation2}>
                    О нас
                </motion.h2>
                <motion.p custom={2} variants={textAnimation2}>
                    Selectum Консалтинг в сфере трудоустройства уже более 4 лет
                    и за весь период мы трудоустроили более 2000 клиентов.
                    Selectum предоставляет отличные и доступные возможности для
                    граждан КР успешно трудоустроиться зарубежом, а именно в
                    такой стране как Турция. Лучшие качества Selectum это
                    своевременная работа, консультация от опытных работников,
                    помощь и поддержка всем соискателям до и вовремя работы.
                </motion.p>
            </motion.div>

            <div className="jobs" id="vacancy">
                <section className="py-32 sm:py-0">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        {/* <h1 className="jobs-title sm:text-4xl sm:pt-10 sm:pb-0"> */}
                        <h1 className="jobs-title">
                            Открытые вакансии в Турцию
                        </h1>
                        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {posts.map((items, key) => (
                                <li
                                    className="w-full mx-auto group sm:max-w-sm"
                                    key={key}
                                >
                                    <img
                                        src={items.img}
                                        loading="lazy"
                                        alt={items.title}
                                        className="w-full rounded-lg h-80 object-cover"
                                    />
                                    <div className="mt-3 space-y-2">
                                        <h3 className="title">{items.title}</h3>
                                        <p className="desc">{items.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>

            <Feature/>
            <Footer/>


            {/* <motion.div
                className="one bg-slate-700"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                <motion.h1 custom={1} variants={textAnimation2}>
                    Hello World
                </motion.h1>
                <motion.h1 custom={2} variants={textAnimation2}>
                    Hello World
                </motion.h1>
                <motion.h1 custom={3} variants={textAnimation2}>
                    Hello World
                </motion.h1>
            </motion.div> */}

            {/* <motion.div
                className="two bg-orange-700"
                initial={{ opacity: 0 }}
                initial="hidden"
                whileInView={{ opacity: 1 }}
                whileInView="visible"
                viewport={{ once: true }}
                viewport={{ amount: 0.2, once: false }}
            >
                <motion.h1 variants={textAnimation} >Hello World</motion.h1>
            </motion.div> */}
        </div>
    );
}

export default App;
