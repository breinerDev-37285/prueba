import Card from '@components/card'
import HeaderCard from '@components/headerCard'
import PlanCard from '@components/planCard'
import DescriptionCard from '@components/descriptionCard'
import Button from '@components/buttonCard'
import FooterCard from '@components/footerCard'

const App = () => (
  <div>
    <div className="wrapper_card">
      <Card>
        <HeaderCard
          customClassStyleHeader="card_header_1"
          customClassStyleBanner="card_titleBanner_1"
          titleBanner="EXCLUSIVO ONLINE"
          desc="Incluye beneficios del plan Basic por 3 meses"
          title="Plan Starter Plus"
        >
          <PlanCard
            plan="29GB"
            planDesc="Facebook e Instagram"
            precioSinIva={12.79}
          />
        </HeaderCard>
        <DescriptionCard
          enlace="https://www.google.com"
          enlaceText="Ver más beneficios"
          items={[
            {
              title: '3 Gigas',
              items: {
                icon: ['fa-solid fa-user', 'fa-solid fa-user'],
                text: 'Facebook e Instagram',
              },
            },
            {
              title: '+8 Gigas',
              items: {
                icon: ['fa-solid fa-user'],
                text: 'Para que navegues cada mes',
              },
            },
            {
              title: '+3 Gigas',
              items: {
                icon: ['fa-solid fa-user'],
                text: 'Para Netflix + Youtube',
              },
            },
            {
              title: '+15 Gigas',
              items: {
                icon: ['fa-solid fa-user'],
                text: 'De regalo x1 mes por cambiarte a Movistar',
              },
            },
          ]}
          totalPlan={{
            total: '29 Gigas',
            text: 'Total Gigas Plan',
          }}
        />
        <Button text="Lo quiero" classStyleWrapper="btn_1" />
        <FooterCard text="Precio al finalizar la promoción: $12.79/mes" />
      </Card>

      <Card>
        <HeaderCard
          customClassStyleHeader="card_header_2"
          customClassStyleBanner="card_titleBanner_2"
          titleBanner="RECOMENDADO"
          title="Combo $4"
        >
          <PlanCard plan="3GB" precioFinal={4} />
        </HeaderCard>

        <DescriptionCard
          enlace="https://www.google.com"
          enlaceText="Ver más beneficios"
          customStyle="description_card_2"
          items={[
            {
              items: {
                icon: ['fa-solid fa-user', 'fa-solid fa-user'],
                text: 'Facebook e Instagram',
              },
            },
            {
              items: {
                icon: ['fa-solid fa-user'],
                text: 'Para que navegues cada mes',
              },
            },
            {
              items: {
                icon: ['fa-solid fa-user'],
                text: 'Para Netflix + Youtube',
              },
            },
            {
              items: {
                icon: ['fa-solid fa-user'],
                text: 'De regalo x1 mes por cambiarte a Movistar',
              },
            },
          ]}
        />

        <Button text="Activar Combo" classStyleWrapper="btn_1" />
        <FooterCard text="Vigencia: 10 días" />
      </Card>
    </div>
  </div>
)

export default App
