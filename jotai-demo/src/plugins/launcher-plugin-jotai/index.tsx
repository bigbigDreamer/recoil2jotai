import { PluginInnerRenderType } from 'react-launcher'
 
import { Provider } from 'jotai'

const jotaiPlugin: { name: string; inner: PluginInnerRenderType } = {
    name: 'jotaiPlugin',
    inner(children) {
        return <Provider>{children}</Provider>
    }
}

export default jotaiPlugin