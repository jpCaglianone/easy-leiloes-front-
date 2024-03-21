import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import FormLogin from "../components/auth/formLogin";

const ComponentPreviews = () => {
  return (
      <Previews palette={<PaletteTree/>}>
        <ComponentPreview path="/FormLogin">
          <FormLogin/>
        </ComponentPreview>
      </Previews>
  )
}

export default ComponentPreviews