/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from '@gorhom/bottom-sheet'
import NetInfo from '@react-native-community/netinfo'
import NavContainer from './src/navigation/NavContainer'
import { Text } from 'react-native-svg'
import NetInfoStatus from './src/components/ui/NetInfoStatus'

function App(): React.JSX.Element {
  const [isConnected, setConnected] = useState<boolean | null>(true)
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnected(state.isConnected)
      console.log('Connected to network state', state)
      if (state.isConnected === false) {
        setConnected(state.isConnected)
        bottomSheetModalRef.current?.present()
      } else {
        setConnected(state.isConnected)
        bottomSheetModalRef.current?.close()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavContainer />
        {/* Network state */}
        {!isConnected && (
          <NetInfoStatus bottomSheetModalRef={bottomSheetModalRef} />
        )}
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default App
