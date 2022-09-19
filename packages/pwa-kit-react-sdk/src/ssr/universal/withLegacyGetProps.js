import hoistNonReactStatic from 'hoist-non-react-statics'
import {getAppConfig} from './compatibility'
import {FetchStrategy} from './fetchStrategy'
import React from 'react'

export const withLegacyGetProps = (Wrapped) => {
    const wrappedComponentName = Wrapped.displayName || Wrapped.name

    class WithLegacyGetProps extends FetchStrategy {
        render() {
            return <Wrapped {...this.props} />
        }

        static async doInitAppState({App, match, route, req, res, location}) {
            const {params} = match

            const components = [App, route.component]
            const promises = components.map((c) =>
                c.getProps
                    ? c.getProps({
                          req,
                          res,
                          params,
                          location
                      })
                    : Promise.resolve({})
            )

            const [appProps, pageProps] = await Promise.all(promises)
            return {
                appProps,
                pageProps,
            }
        }

        static getInitializers() {
            return [WithLegacyGetProps.doInitAppState, ...(Wrapped.getInitializers?.() ?? [])]
        }
    }

    WithLegacyGetProps.displayName = `withLegacyGetProps(${wrappedComponentName})`

    const exclude = {doInitAppState: true, getInitializers: true, initAppState: true}
    hoistNonReactStatic(WithLegacyGetProps, Wrapped, exclude)

    return WithLegacyGetProps
}
