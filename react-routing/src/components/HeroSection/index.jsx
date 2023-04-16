import React, { useState } from 'react'

const HeroSection = () => {

    const [lang, setLang] = useState('en')

    const article = {
        title: {
            id: "Buat Akun",
            en: "Create Account"
        },
        description: {
            id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
            en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
        }
    };

    const changeLanguage = () => {
        (lang == 'en') ? setLang('id') : setLang('en');
    }

    return (
        <>
            <section className="container-fluid text-center p-5">
                <img className="hero-img mb-3" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstap logo" />
                <h1 className="mb-3">{(lang == "en") ? article.title.en : article.title.id}</h1>
                <p>{(lang == "en") ? article.description.en : article.description.id}</p>
                <button onClick={changeLanguage} type="button" className="btn btn-primary">{(lang == 'en') ? 'Change Language' : 'Ganti Bahasa'}</button>
            </section>
        </>
    )
}

export default HeroSection