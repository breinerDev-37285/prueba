import Card from '@components/card'
import BannerTitle from '@components/titleBanner'
import DescriptionCard from '@components/descriptionCard'
import Button from '@components/buttonCard'
import FooterCard from '@components/footerCard'

const App = () => (
  <div>
    <div className="wrapper_card">
      <Card>
        <BannerTitle
          title="NEGOCIOS 300 Mbps"
          subtitle="300GB"
          description="Incluye 30% Descuento"
        />
        <DescriptionCard
          listDescription={[
            {
              icon: 'fa-solid fa-user',
              desc: 'Velocidad simétrica: igual velocidad de subida y de bajada, hasta 300 Mbps',
            },
            {
              icon: 'fa-solid fa-user',
              desc: 'Asistencia tecnológica 360',
            },
          ]}
          enlace={{
            enlace: 'https://www.google.com',
            text: 'Ver más beneficios',
          }}
        />
        <Button text="Lo quiero" classStyle="btn_1" />
        <FooterCard text="Tarifa básica $170" />
      </Card>

      <Card>
        <BannerTitle img="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000" />
        <DescriptionCard
          title="Advertising"
          description="Mejorar posicionamiento en el mercado, mejorar resultados de venta y aumentar rentabilidad"
        />
        <Button
          text="Conocer más"
          classStyle="btn_2"
          classStyleWrapper="wrapper_button_style_2"
        />
      </Card>
    </div>
  </div>
)

export default App
