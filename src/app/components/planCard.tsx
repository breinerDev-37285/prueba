import React from 'react'
import { IPlanCard } from '../interfaces/card'

const PlanCard = ({ plan, planDesc, precioSinIva, precioFinal }: IPlanCard) => {
  return (
    <div className="wrapper_plan_container">
      <div className="left">
        <span className="plan">{plan}</span>
        {planDesc && <span className="planDesc">{planDesc}</span>}
      </div>
      <hr className="hr" />
      <div className="right">
        <span className="precio_label">
          {precioFinal ? 'Precio final:' : 'Precio:'}
        </span>
        <div className="wrapper_precio">
          {precioSinIva && (
            <span className="precio">{`$ ${precioSinIva?.toFixed(2)}`}</span>
          )}
          {precioFinal && (
            <span className="precio">{`$ ${precioFinal?.toFixed(2)}`}</span>
          )}
          {precioSinIva ? (
            <div className="wrapper_info_precio1">
              <span>Incl. Imp.</span>
              <span>/mes</span>
            </div>
          ) : (
            <div className="wrapper_info_precio2">
              <span className="info_with_iva">Incl. IVA</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlanCard
