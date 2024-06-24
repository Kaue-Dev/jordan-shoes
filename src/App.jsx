import { Banner } from './components/Banner'
import { MainSection } from './components/MainSection'
import { SneakerCard } from './components/SneakerCard'
import { SneakersSection } from './components/SneakersSection'
import './styles/App.css'

import jordan1 from './assets/jordan-1.png'
import jordan2 from './assets/jordan-2.png'
import jordan3 from './assets/jordan-3.png'
import jordan4 from './assets/jordan-4.png'
import jordan5 from './assets/jordan-5.png'
import jordan6 from './assets/jordan-6.png'

export const App = () => {
  return (
    <>
      <header className="header">
        <p>Frete grátis para todo o Brasil</p>
      </header>

      <Banner />
      
      <MainSection>
        <div className="mainSectionTexts">
          <h2>Os melhores em um só lugar</h2>
          <p>A marca Jordan na JordanShoes é a escolha certa para <br/> os amantes de sneakers que buscam estilo e conforto.</p>
        </div>

        <SneakersSection>
          <SneakerCard
            image={jordan1}
            name="Air Jordan 1 Mid Dutch Green"
            collection="Tênis Air Jordan"
            price="R$ 1.199,99"
          />
          <SneakerCard
            image={jordan2}
            name="Air Jordan 1 High Zoom CMFT Tropical Twist"
            collection="Tênis Air Jordan"
            price="R$ 1.049,00"
          />
          <SneakerCard
            image={jordan3}
            name="Air Jordan 1 High Purple"
            collection="Tênis Air Jordan"
            price="R$ 1.350,00"
          />
          <SneakerCard
            image={jordan4}
            name="Air Jordan 1 Mid GS Light Smoke Grey"
            collection="Tênis Air Jordan"
            price="R$ 1.585,00"
          />
          <SneakerCard
            image={jordan5}
            name="Air Jordan 1 Mid SE Bright Citrus"
            collection="Tênis Air Jordan"
            price="R$ 949,99"
          />
          <SneakerCard
            image={jordan6}
            name="Air Jordan 1 Mid Grey Camo"
            collection="Tênis Air Jordan"
            price="R$ 999,99"
          />
        </SneakersSection>
      </MainSection>
    </>
  )
}