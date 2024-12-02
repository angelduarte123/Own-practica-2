import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstComponent } from './FirstComponent.jsx'
import { Props } from './Props.jsx'
import './Styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstComponent />
    <Props title="Another title to test the props" subtitle="Testing" text="Raising say express had chiefly detract demands she.
      Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed excited suppose to shortly. He improve started no we manners however effects. Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything. 
      Up help home head spot an he room in.
      Offered say visited elderly and. Waited period are played family man formed. He ye body or made on pain part meet. You one delay nor begin our folly abode. By disposed replying mr me unpacked no. As moonlight of my resolving unwilling.
      Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom. Moonlight age depending bed led therefore sometimes preserved exquisite she. An fail up so shot leaf wise in. Minuter highest his arrived for put and. Hopes lived by rooms oh in no death house. Contented direction september but end led excellent ourselves may. Ferrars few arrival his offered not charmed you.
      Offered anxious respect or he. On three thing chief years in money arise of."/>
  </StrictMode>,
)

